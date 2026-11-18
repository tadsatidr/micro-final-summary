# Micro final summary

Bilingual static study site for an intermediate microeconomics final (Kasetsart), covering Pindyck & Rubinfeld topics in chapters 10–14 and 16–18.

The pages emphasize graphs, formulas, and worked calculations. Emphasis follows the 2025 final and the question styles in the 2020–2024 papers from the same packet. “Exam focus” marks what that 2025 paper asked. It is not a prediction of a later exam.

Lecture slides are not in this repository.

## Pages

- `index.html` — overview and the 2025 point map
- `ch10.html` through `ch18.html` — one page per chapter (no chapter 15)
- `formulas.html` — one-page formula sheet
- `exam.html` — 2025 paper with worked solutions

Language toggle (EN / ไทย) is stored in `localStorage` under `micro-lang`.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8000
```

Math is rendered with KaTeX from a CDN, so a network connection is needed for typeset formulas.

## GitHub Pages

The site is plain HTML, CSS, and JS at the repository root. GitHub Pages publishes that root from the `main` branch (Deploy from a branch, folder `/`).

Live URL: https://tadsatidr.github.io/micro-final-summary/
