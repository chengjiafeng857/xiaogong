# Xiaogong — A Little Web Gift

A small, hand-crafted interactive web gift made by a interesting(hopefully) soul. This repository contains a lightweight HTML/CSS/JavaScript experience intended as a present — a playful, sweet page to make someone smile.

This project was created by chengjiafeng857 as a gift. Feel free to personalize everything: messages, colors, animations, and music.
---

## Preview

Open `index.html` in your browser to see it locally, or deploy to GitHub Pages / Netlify for a public link.

---

## What it contains

- A single-page interactive experience built with:
    - Some visual stuff
    - A Clock remebering a beatiful date
- Animations, interactive messages, and visual flourishes (confetti, transitions, etc.)
- Simple assets (optional music or images) included in the repo

(Percentages above reflect this repository's language breakdown.)

---

## Features

- Charming entrance animation and gentle interactions
- Sequenced messages/notes that can be personalized
- Decorative styling and responsive layout for mobile & desktop
- Easy customization of text, colors, and media
- Zero build step: just open in a browser

---

## How to run (quick)

1. Clone the repo:
   git clone https://github.com/chengjiafeng857/xiaogong.git
2. Open the project folder and double-click `index.html`, or start a simple static server:
   - Python 3:
     python -m http.server 8000
     then open http://localhost:8000
   - Node (http-server):
     npx http-server

That's it — the page should load in your browser.

---

## How to personalize (suggested places to edit)

- Main text/messages:
  - Search the JavaScript files for arrays or variables named `messages`, `notes`, or `lines`. Replace the strings with your own heartfelt messages.
- Colors & styles:
  - Edit the CSS files (likely `styles.css`, `main.css`, or the `<style>` block in `index.html`) to change color variables, fonts, or spacing.
- Music or sounds:
  - Add your audio file to the assets folder and update the audio element's `src` in `index.html` or the script that initializes audio.
- Images:
  - Replace placeholder images in the `assets` or `images` folder with your own photos.
- Timing & animations:
  - Look for setTimeouts or animation CSS classes; adjust durations to fit the pacing you like.

If you want, I can open the repository, find the exact files and line numbers for each editable spot and prepare a small "customize for her" patch — tell me what to change (names, colors, messages, or a song) and I'll generate the edits.

---

## File structure (typical)

- index.html — main page
- css/ or styles.css — styling
- js/ or script.js — interaction & message sequencing
- assets/ or images/ — optional images and music
- README.md — this file

(If your structure differs, open the repo and look for similarly named files. I can search the repo and list exact files if you want.)

---

## Accessibility & mobile

- The layout is intended to be responsive; test on a phone to check spacing.
- Ensure text is readable against background colors; adjust contrast in CSS if needed.

---

## License

This project is a personal gift. If you want to reuse any code publicly, consider MIT (or pick your favorite). Let me know and I can add a LICENSE file.

---

## A personal note

This little project was built as a warm, interactive surprise. It's intentionally simple so you can easily adapt every part of it. I hope it brings a smile and becomes something you both cherish.

---

Made with ❤️ by chengjiafeng857
