# One-Line Laugh: The Inflation Raise

[![make.fun](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/c/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Erwinsays12/makefun-one-line-laugh-2/rank.svg)](https://make.fun/c/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Erwinsays12/makefun-one-line-laugh-2/reward.svg)](https://make.fun/c/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

Entry for the [One Line, One Laugh](https://make.fun/c/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one original funny line to `/output/entry.txt`:

> I asked my boss for a raise because of inflation. He gave me a balloon.

The joke turns on the double meaning of "inflation": a pay raise to keep up
with rising prices, answered with the most literal inflated thing there is —
a balloon. One line, 71 characters, self-contained, no setup beyond the line
itself.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

The program is deterministic: it always writes the same line, uses no network,
no clock, and no environment input.
