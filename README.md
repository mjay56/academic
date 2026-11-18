# Minje Kim — Academic Homepage (Oxford Wine)

A static, responsive academic website designed for GitHub Pages. The entire site uses a white background, Times New Roman, black body text, and **Oxford Wine (#55212F)** for accents. No indigo is used.

## Pages

- `index.html` — intro with interactive daisy
- `cv.html` — CV (contact, current position, education, research interests, qualification)
- `research.html`, `project.html`, `archive.html` — deliberately blank pages
- `style.css` — shared design
- `script.js` — automatic copyright year + touch toggle for daisy

## Interaction

- Desktop: hover the daisy to rotate its petals.
- Mobile/touch: tap once to rotate; tap again to pause without resetting.
- Users who have enabled reduced-motion settings will not see animation.

## Publish on GitHub Pages

Extract the ZIP file, then upload the files **inside this folder** to the repository root at https://github.com/mjay56/academic and commit the changes. Existing GitHub Pages settings (branch `main`, folder `/(root)`) do not need to be changed.

The deployed address is https://mjay56.github.io/academic/.

## Editing

The CV text is in `cv.html`. The colours, typography, and layout are in `style.css`. For more dated qualifications or education items, duplicate a `.year-row` and update its year and content.
