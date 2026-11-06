# Brand assets

Put your logo and brand image files in this folder, inside your project at `.skilloffice/context/<profile>/brand-assets/`.

- Preferred formats: SVG for logos, PNG for images with transparency, JPG for photos.
- Use clear file names, for example `logo.svg`, `logo-dark.svg`, `icon.png`.
- List the file names in `brand.yaml` under `logos`.

Skills refer to these files by path and never run them. SVG files can contain scripts, so only use SVGs from a source you trust.

This folder is private to your project and is not committed to git unless you choose to.
