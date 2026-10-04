# Independent Development & Content Provenance Policy

## Purpose

This project is developed independently as a Minnesota QB exam-practice platform.

Competitor products may be reviewed only at a high product-category level (for example: pricing, publicly advertised feature categories, or broad market positioning). They are **not** source material for our questions, explanations, code, interface, wording, analytics labels, or interaction design.

This file records the project's development rules so future contributors follow the same standard.

## Primary source rule

Question content and instructional material must be created from primary or properly licensed sources, including:

- Minnesota Department of Labor and Industry materials
- Minnesota Revisor rules/statutes
- Minnesota Residential Code / applicable adopted code sources
- other official standards or references when the project has a lawful basis to use them

Commercial exam-prep products are not acceptable question-authoring sources.

## Original question rule

Every production question must be independently authored.

Do not:
- copy a competitor question
- lightly paraphrase a competitor question
- preserve a competitor's unusual fact pattern
- preserve the same distractor set/order from a competitor
- translate a competitor question into another language
- feed a competitor question to AI and ask it to "rewrite" it for our bank

It is acceptable for independently written questions to test the same underlying public rule or code requirement.

## Original explanation rule

Explanations must be written from the verified rule/reference used by this project.

Do not copy or paraphrase competitor explanations, mnemonics, section summaries, teaching scripts, or answer rationales.

## Interface and terminology rule

Do not reproduce competitor-specific labels, prompts, workflow wording, dashboard terminology, or distinctive visual arrangement.

Our code-book training feature uses our own product model:

### Product name
**Code Book Practice**

### Learner actions
- **Answer Directly**
- **Use Code Book**
- **Found It**

### Internal data terms
- response_path: `direct` | `book-assisted`
- book_search_started_at
- book_search_completed_at
- book_search_seconds
- reported_section
- index_term

### Analytics language
Prefer terms such as:
- Book Search Time
- Direct Answer Accuracy
- Book-Assisted Accuracy
- Search Efficiency by Topic
- Section Navigation Speed

Do not adopt third-party proprietary or distinctive wording merely because it describes a similar concept.

## Design rule

UI should be designed from our own requirements and user flow.

Do not trace, clone, screenshot-match, or intentionally reproduce:
- competitor page layouts
- color systems
- card arrangements
- icons/illustrations
- progress dashboards
- onboarding sequence
- paywall copy
- result screens

Common functional patterns may be used when designed independently.

## Code rule

Never copy source code, scripts, stylesheets, bundled JavaScript, API behavior, database structures, or hidden implementation details from a competitor.

No scraping or reverse engineering is permitted for building product functionality.

## Market research boundary

Allowed:
- public pricing
- publicly advertised feature categories
- publicly available plan duration
- high-level market positioning
- publicly visible product capabilities

Not allowed as development input:
- competitor question banks
- competitor explanations
- copied interface text
- copied data labels
- extracted/private APIs
- scraped paid content
- reconstructed confidential exam questions

## Development provenance

The repository history is part of the development record.

Keep:
- meaningful Git commit messages
- question-source audit files
- source-check status
- editorial review status
- architecture decisions
- dates of major feature design decisions

Do not rewrite Git history merely to make the project appear older or independent. Preserve an accurate history.

## AI use

AI may help draft original material only from project-provided requirements and permitted source material.

AI must not be asked to transform competitor content into "different wording."

For question generation, the preferred workflow is:
1. identify the official rule/reference
2. define the skill being tested
3. create an original fact pattern
4. create independent distractors
5. source-check the answer
6. editorially review the question
7. localize from our canonical version

## Brand rule

Do not use a product name, logo, slogan, or visual identity designed to create confusion with another exam-prep provider.

Product naming should be cleared separately before commercial launch.

## Legal scope

This policy is a product-development control, not a legal opinion or a guarantee against claims.

Before a commercial launch, material branding, licensing, copyright, trademark, terms-of-use, and regulatory questions should be reviewed as appropriate for the business.

## Contributor checklist

Before merging a new feature or content batch, confirm:

- [ ] No competitor content was used as source material.
- [ ] Wording and UX labels are independently authored.
- [ ] Question content has a permitted/primary source.
- [ ] Explanations are original.
- [ ] Source references are recorded.
- [ ] No confidential exam content is included.
- [ ] No competitor code/assets were copied.
- [ ] The commit history accurately describes the work.
