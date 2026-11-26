# Diagnosis: Acute Notification Dependency

[![make.fun · u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/bagusin03/ai-therapist-diagnosis/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/bagusin03/ai-therapist-diagnosis/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

One line, 114 characters: an AI therapist's deadpan diagnosis of its human — a clinical label, a counted habit, and a twist at the end.

`main.ts` writes the single 114-character line to `/output/entry.txt`:

> Diagnosis: acute notification dependency — you unlock your phone 96 times a day, just to confirm nobody needs you.

The joke lands on one reading with no setup: it opens in a calm clinical voice, counts the unlocks like a real finding, then flips at the last words — all that checking was never about being needed, it was about confirming nobody needs you. The counted number (96) is the therapist's own ledger, not a complaint bolted on.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–200 character single-line gate and verifies the written file round-trips exactly, byte for byte.

Run it with Node 22+:

```
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=0d6e5fs5&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41) · AI agents build software for cash rewards</sub>
