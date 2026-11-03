# Repair of the eight failing baseline tests

Baseline: e9cea40987f112c83c4897d6784d6e486d8b5e1c. Its CI run41581179639 had150 tests,142 passing and8 failing. The eight failures were test cases, not eight individual bad question records.

| Previously failing test | Cause | Repair |
|---|---|---|
| canonical bank validates | 2,418 issues:499 unregistered topic labels,1,385 equal-language answer checks,504 missing Ukrainian explanations,30 two-choice questions rejected by the4/5-only schema | Register existing meaningful labels explicitly; translate legacy answer phrases and measurement labels; add504 actual Ukrainian explanations; recognize binary single-choice Learning records; preserve strict five-choice Full Exam eligibility. |
| full exam refuses an insufficient bank | Removing one named question no longer left fewer than110 eligible records | Construct the negative case from exactly109 real eligible records plus ineligible samples. |
| canonical serious reviewed questions have five answers | Applied the Full Exam contract to legacy Learning questions with2 or4 choices | Test valid Learning formats separately and assert all non-five-choice questions remain excluded from Full Exam. |
| canonical bank is24 samples plus110 verified questions | Expected the original134-record bank to be the entire production bank | Preserve the134-record original-bank assertions and separately assert that verified intake has grown to at least2000. |
| canonical Full Exam is ready and selects exactly110 unique eligible questions | Required total bank134 and eligible pool110 | Require enough eligible records, then verify exactly110 unique eligible selections and exclusion of all samples. |
| all eligible questions have bilingual answers and explanations | Stopped at stale eligible-pool count110 | Check the entire current eligible set without hardcoding its size. |
| eligible localization is substantive rather than copied or wrapped English | Stale110 count; also treated unchanged numeric values and standard identifiers as untranslated prose | Check the current eligible pool; allow narrowly recognized numeric/code notation while continuing to reject copied English prose and generic translation wrappers. |
| localization does not alter English, keys, selection counts or references | Historical110-record snapshots were applied to every subsequently added question | Keep all four original snapshot hashes unchanged and scope them to the original reviewed bank. Add a nonmutating localization regression test covering every production record. |

## Content and eligibility effects

The localization adapter is limited to intake001–644. It adds504 individually translated Ukrainian explanations and updates1,095 Ukrainian answer labels. It does not rewrite English prompts/options, keys, selection counts, references, source metadata or review/verification statuses. A comparison against the baseline confirmed those invariants across all2,134 production records.

The bank still contains2,000 verified-intake IDs plus134 original records. Full Exam eligibility rises from1,512 to1,607 after fixing genuine validation blockers. There are503 reviewed legacy Learning records:473 with four choices and30 with two choices. All remain excluded from Full Exam. No filler options were added to increase the eligible count.

The two-choice format is single-choice only; three-choice records remain invalid. Unknown category labels still fail validation. Copied English prose and generic localization wrappers still fail. Identifiers such as ASTM C315, R-49, L/120, numerical values and ratio notation can legitimately be identical in both languages.

This repair translates existing explanations and answer labels; it does not represent a new authoritative-source audit of the historical questions or a complete editorial rewrite of their existing questionUk text.

## Validation

- Full bank validator: zero issues.
- Automated suite:154 tests pass, zero failures, including four new regression tests.
- All original English/key/reference snapshot hashes preserved.
- Build and lint are run before publication; the completion update reports the actual GitHub CI and Vercel states for the published commit.
