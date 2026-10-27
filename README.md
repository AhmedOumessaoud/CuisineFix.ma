# Dépannage Cuisine

A buildless Moroccan Arabic landing page using HTML, CSS and vanilla JavaScript.

## Preview

Open `index.html` directly, or run `python -m http.server 8000 --bind 127.0.0.1` and visit http://127.0.0.1:8000.

## Configure contact

Set `WHATSAPP_NUMBER` at the top of `script.js` to the service's real Moroccan number in international format, without `+` or spaces. Every WhatsApp CTA shares this constant and the same encoded Arabic message. Until the placeholder is replaced, buttons display an explanatory dialog.

## Assets

All photography is generated using the built-in image generation tool and stored locally as optimized WebP files in `assets/`. The exact prompts are recorded in `asset-sources.json`. The comparison images are corresponding generated scenes, with an explicit on-page illustrative disclosure. They are not customer results.

Cairo is loaded from Google Fonts, with a sans-serif fallback. All other assets are local. The page has no build dependencies.

## Interaction and accessibility

Comparison sliders support dragging, touch, arrow keys, Home and End. Buttons have visible focus states. Entrance effects respect reduced-motion preferences and content remains visible if JavaScript is unavailable.

## Verification

JavaScript syntax, HTML content, local asset references and local HTTP serving were checked. Browser visual verification was blocked by the Computer Use URL policy check; desktop and 375px visual verification should be completed before launch.

# CuisineFix.ma
