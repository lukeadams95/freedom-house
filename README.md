# Freedom House website

Static, dependency-free website for Freedom House (Liberty, MO), implemented from the
Claude Design handoff in `project/` (`Freedom House Home.dc.html`) and `chats/`.

## Pages
| File | Page |
| --- | --- |
| `site/index.html` | Home |
| `site/about.html` | About Us (Past / Present / Future, board) |
| `site/ministries.html` | Our Ministries |
| `site/contact.html` | Contact |
| `site/donate.html` | Donate |

`site/` is the finished, ready-to-upload website. Host it on any static host
(Netlify, GitHub Pages, Cloudflare Pages, or a shared host) by uploading the folder's contents.

## Editing
Edit files in `src/`, then rebuild:

```sh
python3 src/build.py      # writes site/
```

- `src/pages/<page>.html` — each page's main content
- `src/partials/header.html`, `src/partials/footer.html` — shared header and footer (one place for every page)
- `src/assets/css/site.css` — shared styles, header, hover states
- `src/assets/js/site.js` — sticky header, mobile menu, gift-amount pickers, FAQ, form handling, About tabs
- `src/build.py` — `CONFIG` holds site-wide links and contact details; `PAGES` holds page titles and SEO descriptions

To preview locally: `cd site && python3 -m http.server` and open http://localhost:8000.

## Still needed from the client
Set these in `CONFIG` in `src/build.py`:
- `GIVEBUTTER_URL` — Givebutter donation page (all Donate/Give buttons; the header Donate goes to the Donate page)
- `IRS_LETTER_URL` — 501(c)(3) determination letter PDF
- `SITE_URL` — final domain (enables canonical links)

In the page content (search for `[`): mission statement, event details, gift impact figures
($25–$500), wishlist items, stats, board message, and photo/video placeholders.
Also replace the Givebutter embed placeholder on the Donate page with the real widget code.

## Forms
The newsletter signups and the contact form validate and confirm in the browser but are
**not yet connected** to anything. Hook them to an email-list provider and a form handler
(see the `TODO` comments in `src/assets/js/site.js`).
