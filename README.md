# Next-Generation AI Systems Homepage

This folder stores the code and design notes for the paper homepage:

- Repository: https://github.com/Next-Generation-AI-Systems/Next-Generation-AI-Systems.github.io
- GitHub Pages: https://next-generation-ai-systems.github.io/
- Source paper TeX folder: `../youtu_survey`

## Paper Identity

- Paper title: `Next-Generation AI Systems`
- Running header: `Next-Generation AI`
- LaTeX class: Tencent YouTu Lab template, based on an ICLR-style article layout.
- Main visual direction: clean research-paper page, Tencent YouTu blue accents, pale blue paper panels, dark neutral text, compact academic spacing.

Relevant TeX sources:

- `../youtu_survey/youtu.cls`
- `../youtu_survey/survey.tex`

## Logo Assets

Primary institution/logo assets found in the paper project:

| Asset | Size | Notes |
| --- | ---: | --- |
| `../youtu_survey/figures/tencentyoutu.png` | 834 x 133 | Main Tencent YouTu logo used in the paper page header. |
| `../youtu_survey/figures/youtu_logo.png` | 850 x 298 | Larger YouTu logo asset, useful for homepage hero or footer branding. |
| `../youtu_survey/figures/youtulogo.jpg` | 900 x 900 | Square logo/avatar-style asset. |
| `../youtu_survey/logo/thu_log.png` | 3596 x 1217 | Tsinghua logo asset available in the project, not used by the current header. |

The current paper header is configured with:

```tex
\fancyhead[L]{\includegraphics[height=2\baselineskip]{figures/tencentyoutu.png}}
\fancyhead[R]{\tencentsanswseven{Next-Generation AI}}
```

## Core Palette

These colors are defined or overridden in the LaTeX source and should be treated as the homepage design tokens.

| Token | RGB / Source | Hex | Intended Usage |
| --- | --- | --- | --- |
| `youtuBlue` | `RGB(0, 82, 217)` | `#0052D9` | Tencent primary blue; section headings, primary links, key accents. |
| `youtuLightBlue` | `RGB(235, 245, 255)` | `#EBF5FF` | Original abstract/background panel color in `youtu.cls`. |
| `FigureBackground` | `RGB(237, 245, 254)` | `#EDF5FE` | Paper overrides `youtuLightBlue` to this value; use for hero and paper panels. |
| `AIboxBackground` | `RGB(238, 245, 253)` | `#EEF5FD` | Background for AI/info callout boxes. |
| `AIboxFrame` | `RGB(54, 85, 140)` | `#36558C` | Callout border/title color. |
| `youtuText` | `HTML 1C2B33` | `#1C2B33` | Main body text. |
| `youtuBg` | `HTML F1F4F7` | `#F1F4F7` | Subtle page/background neutral. |
| `darkblue` | `rgb(0, 0.40, 0.75)` | `#0066BF` | Hyperlink, citation, and URL color in `survey.tex`. |
| `blue` | `RGB(55, 83, 156)` | `#37539C` | Figure legend strokes and secondary blue accents. |

## Supporting Accent Palette

Use these sparingly for figures, tags, legends, or small comparison elements.

| Token | RGB | Hex |
| --- | --- | --- |
| `hidden-red` | `RGB(205, 44, 36)` | `#CD2C24` |
| `hidden-blue` | `RGB(194, 232, 247)` | `#C2E8F7` |
| `hidden-orange` | `RGB(243, 202, 120)` | `#F3CA78` |
| `hidden-green` | `RGB(34, 139, 34)` | `#228B22` |
| `hidden-pink` | `RGB(255, 245, 247)` | `#FFF5F7` |
| `hidden-black` | `RGB(20, 68, 106)` | `#14446A` |
| `purple` | `RGB(144, 153, 196)` | `#9099C4` |
| `yellow` | `RGB(255, 228, 123)` | `#FFE47B` |
| `hidden-yellow` | `RGB(255, 248, 203)` | `#FFF8CB` |
| `tkcolor` | `RGB(224, 223, 255)` | `#E0DFFF` |
| `myblue` | `RGB(215, 226, 240)` | `#D7E2F0` |
| `lightcream` | `RGB(252, 249, 242)` | `#FCF9F2` |

## Typography Notes

- The class defines and uses `TencentSans-W7` for title, author, affiliation, and running header branding.
- The paper body imports `mathpazo`, `XCharter`, and scaled `zlmtt`.
- For the web version, prefer a practical stack close to the paper feel:

```css
font-family: "Source Sans Pro", "Segoe UI", Arial, sans-serif;
color: #1C2B33;
```

## Homepage Style Guidance

- Use `#0052D9` as the primary action/accent color.
- Use `#EDF5FE` or `#EEF5FD` for abstract, hero, and explanation panels.
- Keep body text dark neutral with `#1C2B33`; avoid a single-color blue-only page.
- Use the Tencent YouTu logo as a first-screen institutional signal when appropriate.
- Keep cards and callouts modest, paper-like, and information dense.
- Prefer clear academic sections: abstract, roadmap, resources, figures, citation, and links.
