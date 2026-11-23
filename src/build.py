#!/usr/bin/env python3
"""Build the Freedom House static site.

    python3 src/build.py

Assembles src/partials (header, footer) + src/pages/*.html (each page's <main>)
into ready-to-host HTML files in site/, and copies assets.
Edit CONFIG below to swap in real links (Givebutter, socials, 501(c)(3) letter).
No dependencies beyond the Python 3 standard library.
"""
import re
import shutil
from pathlib import Path

SRC = Path(__file__).resolve().parent
ROOT = SRC.parent
OUT = ROOT / "site"

# ---------------------------------------------------------------------------
# Site-wide settings. Placeholders the client still needs to confirm start
# with "#" so they stay harmless until replaced.
# ---------------------------------------------------------------------------
CONFIG = {
    "GIVEBUTTER_URL": "#GIVEBUTTER_LINK",   # TODO: Freedom House Givebutter page
    "IRS_LETTER_URL": "#PDF_LINK",          # TODO: 501(c)(3) determination letter PDF
    "FACEBOOK_URL": "https://www.facebook.com/p/Freedom-House-Liberty-61550532695252/",
    "PHONE": "(816) 781-6357",
    "PHONE_TEL": "+18167816357",
    "HOURS_SHORT": "Thu &amp; Sat 9 AM – 12 PM",
}

SITE_URL = ""  # e.g. "https://freedomhouseliberty.org" — enables canonical URLs

NAV = [
    ("index", "Home", "index.html"),
    ("about", "About Us", "about.html"),
    ("ministries", "Our Ministries", "ministries.html"),
    ("contact", "Contact", "contact.html"),
]

PAGES = {
    "index": ("Freedom House Liberty | Liberty Non Profit to Donate To",
              "Freedom House in Liberty, MO: many ministries, one roof. A Liberty non profit to donate to and find help in one place."),
    "about": ("About Us | Freedom House Liberty",
              "The past, present and future of Freedom House, a Liberty, MO 501(c)(3) non profit uniting local ministries under one roof since 2008."),
    "ministries": ("Our Ministries | Freedom House Liberty",
                   "Meet the ministries at Freedom House in Liberty, MO: Love INC of Clay County, In As Much Ministry, Hillcrest Transitional Housing and Rebuilding Together Kansas City."),
    "contact": ("Contact | Freedom House Liberty",
                "Visit Freedom House at 2050 Plumbers Way, Liberty, MO 64068. Open Thursday & Saturday, 9 AM – 12 PM. Call (816) 781-6357."),
    "donate": ("Donate | Freedom House Liberty — A Non Profit to Donate To",
               "Donate to Freedom House, a Liberty non profit. One gift keeps the doors open for every ministry under our roof."),
}

FONTS = ("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;"
         "12..96,800&family=Inter:wght@400;500;600;700&display=swap")

SOCIAL_SMALL = (
    '<a class="fh-soc" href="{{FACEBOOK_URL}}" target="_blank" rel="noopener" aria-label="Freedom House on Facebook">f</a>'
)

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<meta property="og:image" content="assets/img/hero-entrance.webp">{canonical}
<meta name="theme-color" content="#0F2340">
<link rel="icon" href="favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{fonts}" rel="stylesheet">
<link rel="stylesheet" href="assets/css/site.css">
</head>
<body data-page="{page}">
"""

FOOT = """<script src="assets/js/site.js" defer></script>
</body>
</html>
"""


def header_for(page):
    h = (SRC / "partials" / "header.html").read_text(encoding="utf-8")
    links, panel = [], []
    for key, label, href in NAV:
        on = key == page
        cur = ' aria-current="page"' if on else ""
        cls = ' class="is-active"' if on else ""
        links.append(f'<a{cls} href="{href}"{cur}>{label}</a>')
        panel.append(f'<a{cls} href="{href}"{cur}><span>{label}</span></a>')
    h = h.replace("{{NAV_LINKS}}", "\n        ".join(links))
    h = h.replace("{{PANEL_LINKS}}", "\n    ".join(panel))
    h = h.replace("{{DONATE_ACTIVE}}", " is-active" if page == "donate" else "")
    h = h.replace("{{DONATE_CURRENT}}", ' aria-current="page"' if page == "donate" else "")
    h = h.replace("{{SOCIAL_SMALL}}", SOCIAL_SMALL)
    return h


def fill(text):
    for k, v in CONFIG.items():
        text = text.replace("{{%s}}" % k, v)
    left = re.findall(r"\{\{[A-Z_]+\}\}", text)
    if left:
        raise SystemExit(f"Unfilled placeholders: {sorted(set(left))}")
    return text


def build():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    footer = (SRC / "partials" / "footer.html").read_text(encoding="utf-8")
    for page, (title, desc) in PAGES.items():
        main = (SRC / "pages" / f"{page}.html").read_text(encoding="utf-8")
        canonical = ""
        if SITE_URL:
            path = "" if page == "index" else f"{page}.html"
            canonical = f'\n<link rel="canonical" href="{SITE_URL.rstrip("/")}/{path}">'
        html = (HEAD.format(title=title, desc=desc, page=page, fonts=FONTS, canonical=canonical)
                + header_for(page) + main + footer + FOOT)
        (OUT / f"{page}.html").write_text(fill(html), encoding="utf-8")
    shutil.copytree(SRC / "assets", OUT / "assets")
    for f in (SRC / "static").iterdir():
        shutil.copy2(f, OUT / f.name)
    print(f"Built {len(PAGES)} pages into {OUT.relative_to(ROOT)}/")


if __name__ == "__main__":
    build()
