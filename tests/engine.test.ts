import test from"node:test";import assert from"node:assert/strict";import{accrueTime,createSession,exactMatch,scoreSession,shuffledUnique}from"../lib/engine.ts";import{elapsedSeconds,isExpired,remainingSeconds}from"../lib/time.ts";import{fullExamEligibleQuestions,isFullExamEligible,validateQuestionBank}from"../lib/question-validation.ts";import{aggregateMistakes,performance}from"../lib/analytics.ts";import{upsertAttempt}from"../lib/storage.ts";import{questions}from"../data/questions.ts";import type{Attempt,Question,Session}from"../lib/types.ts";
const clone=<T>(x:T):T=>structuredClone(x),base=()=>clone(questions[0]);
const reviewed=()=>{const q=base();q.editorialStatus="reviewed";q.verificationStatus="source-checked";q.reference={source:"Official test source",section:"Test section"};q.answers.push({id:"e",text:"Fifth plausible answer"});return q};
const session=(ids:string[],selected:Record<string,string[]>={},start=0):Session=>({id:"s",questionBankVersion:1,mode:"quick-test",startedAt:start,questionIds:ids,currentIndex:0,selectedAnswers:selected,flaggedQuestionIds:[],questionTimeSeconds:{},activeQuestionEnteredAt:start,checkedQuestionIds:[]});
const attempt=(id:string,qids:string[],correctness:Record<string,boolean>,selected:Record<string,string[]>={}):Attempt=>({id,questionBankVersion:1,mode:"quick-test",startedAt:0,completedAt:1000,durationSeconds:1,questionIds:qids,selectedAnswers:selected,correctness,questionTimeSeconds:{},flaggedQuestionIds:[],correct:Object.values(correctness).filter(Boolean).length,incorrect:0,unanswered:0,percentage:0,passed:false});

test("canonical bank validates",()=>assert.deepEqual(validateQuestionBank(questions),[]));
for(const [name,mutate,field]of[
 ["duplicate question IDs",(b:Question[])=>b.push(clone(b[0])),"id"],
 ["unknown correct answer",(b:Question[])=>b[0].correctAnswers=["missing"],"correctAnswers"],
 ["single with two correct answers",(b:Question[])=>b[0].correctAnswers=["a","b"],"correctAnswers"],
 ["multiple with one correct answer",(b:Question[])=>{b[0].type="multiple";b[0].correctAnswers=["a"]},"correctAnswers"],
 ["mismatched required selections",(b:Question[])=>b[0].requiredSelections=2,"requiredSelections"],
 ["duplicate answer IDs",(b:Question[])=>b[0].answers[1].id=b[0].answers[0].id,"answers.id"],
]as const)test(`validation rejects ${name}`,()=>{const b=[base()];mutate(b);assert.ok(validateQuestionBank(b).some(x=>x.field===field))});

test("selection is deterministic, unique, bounded, and non-mutating",()=>{const items=[{id:"1",answers:[1]},{id:"2",answers:[2]},{id:"3",answers:[3]}],before=clone(items),a=shuffledUnique(items,2,()=>0);assert.deepEqual(a.map(x=>x.id),["2","3"]);assert.equal(new Set(a.map(x=>x.id)).size,2);assert.equal(shuffledUnique(items,99,()=>.5).length,3);assert.deepEqual(items,before)});
test("quick/category generation clamps count and preserves bank",()=>{const bank=questions.slice(0,3),before=clone(bank),s=createSession("quick-test",bank,20,0,()=>"id");assert.equal(s.questionIds.length,3);assert.equal(new Set(s.questionIds).size,3);assert.deepEqual(bank,before)});
test("full exam refuses an insufficient bank",()=>assert.throws(()=>createSession("full-exam",questions,110,0,()=>"id"),/requires at least 110/));
test("full exam creates exactly 110 unique questions",()=>{const seed=reviewed(),bank=Array.from({length:111},(_,i)=>({...clone(seed),id:`q${i}`}));const s=createSession("full-exam",bank,999,0,()=>"id");assert.equal(s.questionIds.length,110);assert.equal(new Set(s.questionIds).size,110)});
test("generation rejects duplicate eligible IDs",()=>assert.throws(()=>createSession("quick-test",[base(),base()],2,0,()=>"id"),/unique/));

for(const [selected,expected,label]of[[["a","c","e"],true,"exact"],[["e","a","c"],true,"order independent"],[["a","c"],false,"missing"],[["a","c","e","b"],false,"extra"],[["a","c","d"],false,"wrong same size"],[[],false,"empty"],[["a","c","e","e"],false,"duplicate selected"]]as const)test(`multiple scoring: ${label}`,()=>assert.equal(exactMatch([...selected],["a","c","e"]),expected));
test("single choice correct and incorrect",()=>{assert.equal(exactMatch(["b"],["b"]),true);assert.equal(exactMatch(["a"],["b"]),false)});
test("unanswered is incorrect and separately counted",()=>{const q=base(),a=scoreSession(session([q.id]),[q],1000);assert.equal(a.correct,0);assert.equal(a.incorrect,0);assert.equal(a.unanswered,1);assert.equal(a.correctness[q.id],false)});
for(const [correct,total,passed]of[[7,10,true],[6,10,false],[8,10,true]]as const)test(`${correct}/${total} pass boundary is ${passed}`,()=>{const seed=base(),bank=Array.from({length:total},(_,i)=>({...clone(seed),id:`q${i}`})),selected=Object.fromEntries(bank.slice(0,correct).map(q=>[q.id,q.correctAnswers])),a=scoreSession(session(bank.map(q=>q.id),selected),bank,1000);assert.equal(a.passed,passed);assert.equal(a.percentage,correct/total*100)});

test("timestamp helpers floor elapsed and remaining at zero",()=>{assert.equal(elapsedSeconds(1000,3500),2);assert.equal(remainingSeconds(1000,10,3500),8);assert.equal(remainingSeconds(1000,1,99999),0);assert.equal(isExpired(1000,1,2000),true)});
test("question time accrues once without mutating session",()=>{const s=session(["q"],{},1000),a=accrueTime(s,4500),b=accrueTime(a,6500);assert.equal(s.questionTimeSeconds.q,undefined);assert.equal(a.questionTimeSeconds.q,3);assert.equal(b.questionTimeSeconds.q,5)});
test("session restore fields remain stable when active marker resets",()=>{const s={...session(["a","b"],{a:["x"]},10),currentIndex:1,flaggedQuestionIds:["a"],checkedQuestionIds:["a"],questionTimeSeconds:{a:4}},restored={...clone(s),activeQuestionEnteredAt:99};for(const key of["id","questionIds","currentIndex","selectedAnswers","flaggedQuestionIds","checkedQuestionIds","questionTimeSeconds","startedAt"]as const)assert.deepEqual(restored[key],s[key])});

test("performance deduplicates question IDs and repeated language tags",()=>{const q={...base(),languageTags:["NOT","NOT"]},a=attempt("a",[q.id,q.id],{[q.id]:true});assert.deepEqual(performance([a],[q],"languageTags"),[{name:"NOT",correct:1,total:1,percentage:100}]);assert.equal(performance([a],[q],"subcategory")[0].total,1)});
test("performance is empty without data",()=>assert.deepEqual(performance([],questions,"subcategory"),[]));
test("mistakes aggregate attempts, unanswered, latest result, and duplicate IDs once",()=>{const q=base(),rows=aggregateMistakes([attempt("new",[q.id],{[q.id]:true},{[q.id]:q.correctAnswers}),attempt("old",[q.id,q.id],{[q.id]:false})],[q]);assert.equal(rows[0].attempted,2);assert.equal(rows[0].missed,1);assert.equal(rows[0].unanswered,1);assert.equal(rows[0].latestCorrect,true)});
test("mistakes sort by misses then attempts",()=>{const a=base(),b={...base(),id:"b"},rows=aggregateMistakes([attempt("1",[a.id,b.id],{[a.id]:false,b:false}),attempt("2",[b.id],{b:false})],[a,b]);assert.equal(rows[0].question.id,"b")});
test("attempt completion upsert is idempotent",()=>{const a=attempt("same",[],{}),newer={...a,completedAt:2};assert.deepEqual(upsertAttempt(upsertAttempt([],a),newer),[newer])});


test("sample question is not Full Exam eligible",()=>assert.equal(isFullExamEligible(base()),false));
test("draft question is not Full Exam eligible",()=>{const q=reviewed();q.editorialStatus="draft";assert.equal(isFullExamEligible(q),false)});
test("reviewed but unverified question is not eligible",()=>{const q=reviewed();q.verificationStatus="unverified";assert.equal(isFullExamEligible(q),false)});
test("reviewed source-checked valid five-answer question is eligible",()=>assert.equal(isFullExamEligible(reviewed()),true));
test("reviewed four-answer question is not Full Exam eligible",()=>{const q=reviewed();q.answers.pop();assert.equal(isFullExamEligible(q),false)});
test("missing explanation fails eligibility",()=>{const q=reviewed();q.explanation="";assert.equal(isFullExamEligible(q),false)});
test("missing reference fails eligibility",()=>{const q=reviewed();q.reference=undefined;assert.equal(isFullExamEligible(q),false)});
test("Full Exam availability counts only eligible questions",()=>{const seed=reviewed(),eligible=Array.from({length:100},(_,i)=>({...clone(seed),id:`eligible-${i}`})),samples=Array.from({length:10},(_,i)=>({...base(),id:`sample-extra-${i}`}));assert.equal(fullExamEligibleQuestions([...eligible,...samples]).length,100);assert.throws(()=>createSession("full-exam",[...eligible,...samples],110,0,()=>"id"),/Current bank: 100/)});
test("110 eligible unique questions make Full Exam available",()=>{const seed=reviewed(),bank=Array.from({length:110},(_,i)=>({...clone(seed),id:`eligible-${i}`}));assert.equal(createSession("full-exam",bank,110,0,()=>"id").questionIds.length,110)});
test("Full Exam generator selects only eligible questions",()=>{const seed=reviewed(),bank=Array.from({length:110},(_,i)=>({...clone(seed),id:`eligible-${i}`}));bank.push({...base(),id:"sample-never-selected"});const session=createSession("full-exam",bank,110,0,()=>"id");assert.equal(session.questionIds.includes("sample-never-selected"),false)});


test("canonical serious reviewed questions have five answers",()=>assert.ok(questions.filter(q=>q.editorialStatus==="reviewed").every(q=>q.answers.length===5)));
test("canonical source-checked questions have precise sections and explanations",()=>assert.ok(questions.filter(q=>q.verificationStatus==="source-checked").every(q=>Boolean(q.reference?.source.trim()&&q.reference.section?.trim()&&q.explanation.trim()))));
test("canonical Full Exam eligibility equals the derived reviewed verified valid set",()=>{const expected=questions.filter(q=>q.editorialStatus==="reviewed"&&q.verificationStatus==="source-checked"&&q.answers.length===5&&validateQuestionBank([q]).length===0).map(q=>q.id);assert.deepEqual(fullExamEligibleQuestions(questions).map(q=>q.id),expected)});
test("canonical drafts and unverified records are excluded from Full Exam",()=>assert.ok(questions.filter(q=>q.editorialStatus==="draft"||q.verificationStatus==="unverified").every(q=>!isFullExamEligible(q))));
test("source-checked question without a precise section is structurally invalid and ineligible",()=>{const q=reviewed();q.reference={source:"Official test source"};assert.ok(validateQuestionBank([q]).some(x=>x.field==="reference.section"));assert.equal(isFullExamEligible(q),false)});

test("placeholder reference section cannot become source-checked eligibility",()=>{const q=reviewed();q.reference={source:"2020 Minnesota Residential Code",section:"Exact section not established — audit pending"};assert.ok(validateQuestionBank([q]).some(x=>x.field==="reference.section"));assert.equal(isFullExamEligible(q),false)});
