# Reddem Geethanjali: Portfolio Website

A responsive personal portfolio built with plain **HTML5, CSS3 and vanilla JavaScript**. No frameworks, no build step, no backend, so it deploys directly to GitHub Pages.

## Project structure

```
portfolio/
├── index.html      Page markup (all sections)
├── styles.css      Design tokens, layout, components, responsive rules
├── script.js       Mobile menu, active nav link, scroll reveal, resume placeholder
├── profile.jpeg    Profile photo (original asset, unchanged)
├── favicon.svg     "RG" monogram favicon (replace if you like)
└── README.md
```

## Run locally with VS Code

1. Open the `portfolio` folder in VS Code (**File > Open Folder**).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **Open with Live Server**. The site opens at `http://127.0.0.1:5500` and reloads when you save.

You can also just double-click `index.html` to open it in a browser. Google Fonts need an internet connection; without one the site falls back to system fonts.

## Publish on GitHub Pages

This folder is already a git repository connected to `https://github.com/Geethanjali2007/portfolio`.

1. In VS Code's terminal (inside the `portfolio` folder):
   ```bash
   git add .
   git commit -m "Redesign portfolio"
   git push origin main
   ```
2. On GitHub open the repository, then **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute the site is live at `https://geethanjali2007.github.io/portfolio/`.

The main page is `index.html` (renamed from `portfolio.html`) because GitHub Pages serves `index.html` automatically.

## Things you need to update

| What | Where | How |
|------|-------|-----|
| Resume PDF | `index.html`, the `Download Resume` button | Create a `resume/` folder, add your PDF, and change the `href` from `resume/Geethanjali_Resume_PLACEHOLDER.pdf` to your file name (for example `resume/Geethanjali_Resume.pdf`). While the href contains `PLACEHOLDER`, the button shows a message instead of a broken download. |
| Nyaya Path and Complaint Management repository links | `index.html`, `.project-actions` in those two cards | Replace the `Repository link to be added` span with the commented-out `<a>` button, filling in the real URL. |
| College name | `index.html`, Education section | Add it where the HTML comment says so. It was not in the original files, so it is not shown. |
| Open Graph URLs | `<head>` of `index.html` | `og:url` and `og:image` assume `https://geethanjali2007.github.io/portfolio/`. Change them if your address differs. |
| Certificate links | `index.html`, Certifications | No URLs were available. To add one, put `<a href="URL" target="_blank" rel="noopener noreferrer">View certificate</a>` inside the certificate's `<li>`. |
| Live demo buttons | Project cards | Add a button only when a project is actually deployed. |

## Customising the design

Colours, fonts, radius and spacing are CSS variables at the top of `styles.css` (`:root`). Changing them there updates the whole site.

## Accessibility notes

Skip link, semantic landmarks, keyboard-operable menu (Escape closes it), visible focus outlines, descriptive link labels, and reduced-motion support.
