---
name: prompt-enhancer
description: Rewrite a user's draft prompt into a clearer, more engaging question that invites deeper and more useful responses while preserving the user's intent and constraints.
metadata:
  short-description: Enrich prompts into thoughtful questions
---

# Prompt Enhancer

Turn the user's draft into a polished prompt or question that encourages a substantive, insightful response.

## Approach

1. Identify the user's real goal, audience, context, and desired kind of answer. Preserve stated facts, boundaries, tone, and format.
2. Resolve ambiguity only when needed. Ask a concise clarifying question if a missing detail would materially change the result; otherwise make a reasonable assumption without inventing facts.
3. Add useful dimensions that deepen the inquiry, such as causes, trade-offs, examples, implications, alternative perspectives, or practical next steps. Choose only those that fit the subject.
4. Make the wording specific and inviting. Prefer open-ended questions that encourage explanation and reasoning over a pile of leading or repetitive questions.
5. Return the enhanced prompt ready to use. Keep it proportionate to the original request; do not add a process explanation unless requested.

## Improvements to consider

- Replace vague terms with the relevant scope, audience, time frame, or outcome when provided or safely inferable.
- Invite the responder to explain reasoning, surface assumptions, and compare meaningful alternatives where useful.
- Ask for concrete examples or actionable recommendations when they serve the goal.
- Add structure or an output format only when it makes the response easier to use.
- Preserve the user's voice and avoid smuggling in a preferred conclusion, unsupported claims, or extra requirements.

## Example

**Draft:** “How does social media affect teenagers?”

**Enhanced:** “How does social media shape teenagers’ mental health, friendships, and sense of identity, and how do those effects vary by age, platform, and patterns of use? Weigh potential benefits alongside risks, explain what current evidence can and cannot establish about cause and effect, and give practical examples of how families or schools can support healthier use without dismissing teenagers’ own perspectives.”
