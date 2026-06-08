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

## Proposed Homepage Structure

The homepage should feel like a polished research project page rather than a marketing landing page. The first screen should immediately show the paper identity, institutional branding, and the central "from Chatbot to Digital Colleague" idea.

| Page Section | Purpose | Figures / Assets |
| --- | --- | --- |
| Header / Hero | Paper title, subtitle, author/institution line, primary links to paper/code/data/citation. | `assets/logos/tencentyoutu.png`, `assets/figures/png/abs.png` |
| Abstract Snapshot | Condensed abstract plus 3-4 contribution bullets: cognitive core, task execution, workspace + skill, evolving evaluation. | `assets/figures/png/abs.png` |
| Roadmap and Timeline | Show the survey's high-level map of next-generation AI systems. | `assets/figures/png/map.png`, `assets/figures/png/horizon.png` |
| Cognitive Core | Explain the transition from Chatbot-era next-token systems to Thinking LLMs. | `assets/figures/png/chatbot.png`, `assets/figures/png/thinkingllm.png` |
| Task Execution | Explain tool use, agent loops, and the move toward OpenClaw-style task closure. | `assets/figures/png/agent.png`, `assets/figures/png/openclaw.png` |
| Workspace + Skill | Present the persistent workspace and reusable skill paradigm as the paper's core system-level lens. | `assets/figures/png/tool.png`, `assets/figures/png/workspace.png` |
| Data and Evaluation | Explain the shift from instruction-response pairs to trajectories, and from static benchmarks to auditable environments. | `assets/figures/png/data.png`, `assets/figures/png/eval.png` |
| Challenges and Future | Summarize open challenges, governance questions, and the future direction of AI workstations. | `assets/figures/png/challenges.png`, `assets/figures/png/future.png` |
| Full Figure Gallery | Include every paper figure in a compact gallery for fast scanning and citation/reuse. | All PNG figure assets |
| Resources | Paper PDF, BibTeX, dataset, project links, contact, and acknowledgements. | `assets/icons/*.png`, logos as needed |

## Figure Asset Handling

The paper stores its main figures as PDF files. For the web page, the safest approach is:

1. Keep the original PDFs as source-quality assets under `assets/figures/pdf/`.
2. Convert each PDF into a PNG under `assets/figures/png/`.
3. Use PNG files in normal responsive HTML image elements.
4. Optionally link each PNG figure back to its original PDF.

Browsers can display PDFs through `<iframe>` or `<object>`, but PDF files are not reliable as ordinary `<img>` sources across browsers and devices. Therefore, the homepage should use PNGs for image display and keep PDFs for high-quality download/open-in-new-tab access.

Recommended HTML pattern:

```html
<figure>
  <img
    src="assets/figures/png/map.png"
    alt="Roadmap and evolutionary timeline of next-generation AI systems"
    loading="lazy"
  >
  <figcaption>
    Roadmap and timeline.
    <a href="assets/figures/pdf/map.pdf">Open source PDF</a>
  </figcaption>
</figure>
```

If a direct PDF preview is needed, use:

```html
<object
  data="assets/figures/pdf/map.pdf"
  type="application/pdf"
  width="100%"
  height="720"
>
  <a href="assets/figures/pdf/map.pdf">Open PDF</a>
</object>
```

Current conversion command used for each figure:

```powershell
pdftoppm -png -r 160 -singlefile assets/figures/pdf/map.pdf assets/figures/png/map
```

## Copied Figure Inventory

All core paper figures referenced by the TeX source have been copied into this homepage folder. Each figure has both a PDF source and a PNG web-display version.

| Figure | PDF Source | PNG for Web | Suggested Homepage Role |
| --- | --- | --- | --- |
| Abstract overview | `assets/figures/pdf/abs.pdf` | `assets/figures/png/abs.png` | Hero or abstract visual summary. |
| Roadmap | `assets/figures/pdf/map.pdf` | `assets/figures/png/map.png` | Main roadmap section. |
| Horizon | `assets/figures/pdf/horizon.pdf` | `assets/figures/png/horizon.png` | Timeline/time-horizon supplement. |
| Chatbot | `assets/figures/pdf/chatbot.pdf` | `assets/figures/png/chatbot.png` | Chatbot-era cognitive core. |
| Thinking LLM | `assets/figures/pdf/thinkingllm.pdf` | `assets/figures/png/thinkingllm.png` | Reasoning and test-time compute. |
| Agent | `assets/figures/pdf/agent.pdf` | `assets/figures/png/agent.png` | Tool-using agent workflow. |
| OpenClaw | `assets/figures/pdf/openclaw.pdf` | `assets/figures/png/openclaw.png` | Task closure and workstation system. |
| Tool | `assets/figures/pdf/tool.pdf` | `assets/figures/png/tool.png` | Tool-use and skill interface. |
| Workspace | `assets/figures/pdf/workspace.pdf` | `assets/figures/png/workspace.png` | Persistent workspace paradigm. |
| Data | `assets/figures/pdf/data.pdf` | `assets/figures/png/data.png` | Data construction section. |
| Evaluation | `assets/figures/pdf/eval.pdf` | `assets/figures/png/eval.png` | Evaluation section. |
| Challenges | `assets/figures/pdf/challenges.pdf` | `assets/figures/png/challenges.png` | Open challenges. |
| Future | `assets/figures/pdf/future.pdf` | `assets/figures/png/future.png` | Future directions. |

Copied branding and metadata assets:

- `assets/logos/tencentyoutu.png`
- `assets/logos/youtu_logo.png`
- `assets/logos/youtulogo.jpg`
- `assets/logos/thu_log.png`
- `assets/icons/github.png`
- `assets/icons/huggingface-color.png`
- `assets/icons/icons8-date-96.png`
- `assets/icons/icons8-email-96.png`
- `assets/icons/icons8-website-100.png`
- `assets/icons/icons8-robot-100.png`
