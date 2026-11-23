# Homepage hero photo update

_Started 2026-11-20 15:36 UTC_

---

## User

<artifact-content-authored-by-others/>
Continuing from "Freedom House website revisions".

## Assistant

We redesigned the Freedom House homepage with a "Many ministries. One roof" concept using the building's gable roofline as the signature graphic device. The hero now features the actual Freedom House photo inside a house-shaped frame with a tan shadow behind it. We built a full design system with navy, tan, cream, and green accents, using Bricolage Grotesque for headings and Inter for body text. All eyebrow labels now use a small house icon in sentence case across every section.

The header evolved significantly: it's now a two-bar sticky structure with a tan house logo tab on the left (spanning the full header height), a mini info bar on top with hours/phone/email and social links, and a main navy menu bar below with right-aligned nav links and a tan Donate pill. On scroll, the mini bar hides and only the main bar stays. Mobile has a hamburger menu that opens a full-width navy panel.

The About section was redesigned with a dark navy background, white text, and a house icon in the eyebrow. The photo moved to the right side. All section eyebrows across the page now follow this pattern: house icon, 16px Inter 500, sentence case, no tracking.

The footer now displays the Freedom House logo in white on the navy background.

Current state: the homepage is fully responsive and sticky, with the actual Freedom House building photo in the hero. All sections use the new eyebrow style, and the color palette includes navy, tan, cream, white, near-black, blue accent, and green accent. CLAUDE.md has notes for the About Us, Our Ministries, Contact and Donate pages.

Still needed: client confirmation on the mission statement, event details, impact figures ($25/$100/$500 donations), real hours/phone/email/address, social links, and ministry wishlists. These are all marked as [PLACEHOLDERS] in the code.

Files: Freedom House Home.dc.html, support.js, CLAUDE.md.

## User

Update ONLY the homepage HERO section. Edit the SAME existing file and do not change the header or any other section.

KEEP THE EXISTING HERO CONTENT EXACTLY AS IT IS: eyebrow, "Freedom House" heading, tagline and both buttons. Keep the site fonts (Bricolage Grotesque headings, Inter body).

━━━━━━━━━━━━━━━━━━━━
CHANGE: BUILDING PHOTO BEHIND THE NAME
━━━━━━━━━━━━━━━━━━━━
- REMOVE the house-shaped photo frame and the tan house shape on the right side of the hero.
- REPLACE the solid navy background with a FULL-WIDTH photo of the Freedom House building (exterior or interior) filling the entire hero, edge to edge, behind the text.
- Placeholder label: "[ HERO PHOTO: Freedom House building — exterior or interior. Real photo only, no AI images. Keep the cross and the Freedom House sign in frame. ]"
- Position the photo so the top of the building (cross and sign) stays visible (background-position: center top). Never crop it off.
- Add a dark navy overlay on the photo for readability: #0F2340 at about 70% opacity, a bit stronger on the left where the text sits. The building should still clearly show through.
- Hero height: about 680px on desktop (min-height 85vh), with the content vertically centered.

━━━━━━━━━━━━━━━━━━━━
TEXT ON TOP OF THE PHOTO
━━━━━━━━━━━━━━━━━━━━
- Content is left-aligned, max-width about 760px.
- Eyebrow: keep "LIBERTY, MISSOURI · 501(C)(3) NONPROFIT" in tan #D8C3A0.
- "Freedom House": white, HUGE (about 130px on desktop), Bricolage Grotesque 800.
- Tagline "Uniting local charities under one roof to serve our community.": make it BIG and prominent, clearly the second-biggest text in the hero (about 46–52px on desktop, Bricolage Grotesque 700, white, with "under one roof" in tan). It should feel like a headline, not a caption between the name and the button.
- Spacing: about 24px between the name and the tagline, and about 40px between the tagline and the buttons.
- Buttons: keep "Donate Now" (tan pill) and "Meet Our Ministries" (white outline pill), at least 56px tall.

━━━━━━━━━━━━━━━━━━━━
MOBILE
━━━━━━━━━━━━━━━━━━━━
- The photo still fills the hero behind the text, with a slightly stronger overlay so white text stays readable.
- "Freedom House" about 64px, tagline about 30px, buttons full-width and stacked.
- Everything readable without zooming.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Small refinements to the homepage HERO only. Edit the SAME existing file and do not change any content or other sections.

1. Overlay: make the navy overlay a left-to-right fade. Keep it strong on the left behind the text (#0F2340 at about 80%), and fade it to about 35% on the right so the building and the "FH Freedom House" sign show clearly.
2. Buttons: on desktop, the "Donate Now" and "Meet Our Ministries" buttons should size to their text (padding about 18px 36px), not stretch wide. Keep them full-width only on mobile.
3. Sizing: reduce "Freedom House" to about 112px and the tagline to about 44px on desktop, so the heading, tagline and buttons all fit on screen without scrolling (about 760px tall hero max).
4. Header logo tab: make sure the peak of the house-shaped logo is fully visible at the top and not clipped.

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

use this as hero background instead

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

The hero background is now the daylight entrance photo, and the overlay, text and buttons are unchanged. I didn't check how the text reads over the new photo. The photo is wide and short, so on tall or narrow screens it will crop at the sides. The Freedom House tower sign should stay visible because the image is anchored to the top.

## User

let's put a form fill up in hero as per client request - See if we could find a place where they could get sign up their email so we could get a list of people to send updates and donation requests?

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

let's do this kind of form

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

can you put the buttons in hero to other sections in home page

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I read this as linking the hero buttons to sections on the page, so that's what I did:

- **Donate Now** now scrolls to the "See what your gift does" section, where you pick an amount.
- **Meet Our Ministries** already scrolled to the ministries section, so it's unchanged.

If you meant moving the buttons out of the hero and placing them in other sections, tell me and I'll do that instead.

## User

these buttons. also remove this Our story: past, present & future → if it wasn't in the client instruction and put the buttons there

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I moved the two buttons from the hero into the About section. They now sit where the "Our story: past, present & future →" link was, and I removed that link. I haven't looked at the page since the move. The hero now ends at the tagline, with the sign-up card beside it.

## User

WHY DID YOU MOVE IT? I SAID DON'T MOVE BUT PUT ANOTHER CTA BUTTON THERE.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I'm sorry, I misread your request. The buttons are back in the hero, in their original spot under the tagline. A second set stays in the About section, where the "Our story" link used to be. I haven't looked at the page since the change.

## User

WHY IS THE LOGO SMALL AGAIN?

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

The logo had shrunk because I scaled it down earlier to stop the house peak from being clipped. I've raised it to about 30% larger than that. It should now fill the tab while the peak stays visible. I haven't looked at the header since the change.

## User

ate the CTA buttons on other sections too?

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

<pasted_text name="Pasted text (106 lines)">
Create the ABOUT US page for Freedom House. Edit the SAME existing file and add this as a new page.

RULES:
- Do NOT change the homepage in any way.
- Use the SAME header, footer, colors and fonts as the homepage (navy #0F2340, deep navy #0A1830, tan #D8C3A0, cream #F7F2E8, white; Bricolage Grotesque headings, Inter body).
- Use the same eyebrow style as the homepage: small tan HOUSE icon + label in sentence case.
- NO AI or stock photos. Use clearly labeled placeholders for the client's real photos and videos.
- Do not invent facts, dates or numbers. Use [PLACEHOLDERS] where the client will fill in her own text.

PAGE THEME: "The Past, the Present, the Future"

━━━━━━━━━━━━━━━━━━━━
1. PAGE HERO
━━━━━━━━━━━━━━━━━━━━
- Shorter than the homepage hero (about 440px on desktop). This is the standard height for all inner pages.
- Full-width building photo behind the text (a different shot than the homepage if possible) with the same left-to-right navy overlay.
- Eyebrow: house icon + "About Us"
- Heading: "Our Story"
- Subtext: "The past, the present, and the future of Freedom House."
- Button: "501(c)(3) Nonprofit" (tan outline pill with a small document icon). It opens the 501(c)(3) determination letter [PDF LINK] in a new tab.

━━━━━━━━━━━━━━━━━━━━
2. PAST / PRESENT / FUTURE NAVIGATOR
━━━━━━━━━━━━━━━━━━━━
- Right under the hero, a bar with three large clickable tabs that jump to each section: "The Past" · "The Present" · "The Future"
- Each tab shows a small label above ("01", "02", "03") and a short line under it ("Where we started" / "How we help now" / "Where we're going").
- On scroll, this bar sticks just under the header and highlights the section the visitor is in.

━━━━━━━━━━━━━━━━━━━━
3. THE PAST: The History of Freedom House (cream background)
━━━━━━━━━━━━━━━━━━━━
- Eyebrow: house icon + "The Past"
- Heading: "Why Freedom House was needed"
- Split layout: story text on the left [CLIENT TEXT: how it started and the big "why"], historic or early photo on the right [PHOTO PLACEHOLDER].
- Milestone TIMELINE below: a horizontal line with 4–5 points (vertical on mobile). Each point has [YEAR] + [MILESTONE] + one sentence, e.g. "[Year] — Freedom House opens its doors."
- "Past events" photo strip: 3–4 photo cards with [EVENT NAME] + [YEAR] captions.

━━━━━━━━━━━━━━━━━━━━
4. THE PRESENT: How We Help Now (white background)
━━━━━━━━━━━━━━━━━━━━
- Eyebrow: house icon + "The Present"
- Heading: "How we help today"
- Intro paragraph [CLIENT TEXT]

a) STATS BAND (navy background, full width)
   - 4 big numbers in tan with white labels: [#] Ministries under one roof · [#] Neighbors served each year · [#] Volunteers · [#] Years serving Liberty
   - All numbers are placeholders for the client to confirm.

b) UPCOMING EVENTS
   - 2–3 event cards (same style as the homepage events): photo, "Upcoming · [DATE]" tag, [EVENT NAME], short description.

c) GET INVOLVED
   - Heading: "Ways to get involved"
   - PROJECT BOARD: a grid of project cards for work volunteers can help with or raise money for. Each card has:
     • [PROJECT NAME] (e.g., "[Parking lot repairs]", "[Paint the community room]")
     • One-line description
     • Type tag: "Volunteer" or "Fundraise" (or both)
     • Optional goal + progress bar: "[$X] raised of [$Y]"
     • Button: "I can help" → Contact page, or "Give to this project" → Givebutter
     Show 4–6 placeholder cards.
   - HOW TO GIVE: three simple columns with icons:
     • Donate online → "Donate on Givebutter" button
     • Give items → "See what our ministries always need" link → Our Ministries page
     • Volunteer → "Contact us to volunteer" link → Contact page

━━━━━━━━━━━━━━━━━━━━
5. THE FUTURE: What We Could Do With Your Help (deep navy background)
━━━━━━━━━━━━━━━━━━━━
- Eyebrow: house icon + "The Future"
- Heading: "Where we're going, together"
- Intro paragraph [CLIENT TEXT]

a) MESSAGE FROM THE BOARD
   - A large quote-style block: [BOARD MESSAGE about future plans and what Freedom House hopes to become], signed "— The Freedom House Board"
   - Next to it: a placeholder for a board member photo or the group photo.

b) MINISTRY GROWTH VIDEOS
   - Heading: "Hear from our ministries"
   - Grid of 4 video cards (16:9 placeholders with a play button): [MINISTRY NAME] + "How we could grow with your help". The client will add the videos.

c) VISION GOALS
   - 3 simple cards: [FUTURE GOAL 1], [FUTURE GOAL 2], [FUTURE GOAL 3], each with a one-line description.

━━━━━━━━━━━━━━━━━━━━
6. MEET OUR BOARD (cream background)
━━━━━━━━━━━━━━━━━━━━
(The board members list is moving here from the homepage.)
- Eyebrow: house icon + "Leadership"
- Heading: "Meet our board"
- Large board GROUP PHOTO placeholder across the top [GROUP PHOTO].
- Below it, a clean grid of board members: [NAME] + [ROLE], e.g. President, Vice President, Treasurer, Secretary, Board Member. Names and roles only, no individual photos needed.

━━━━━━━━━━━━━━━━━━━━
7. 501(c)(3) + DONATE CTA (tan background)
━━━━━━━━━━━━━━━━━━━━
- Left: "Freedom House is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible as allowed by law." + EIN: [EIN NUMBER]
- Button: "View our 501(c)(3) letter" (navy outline pill) → [PDF LINK]
- Right: heading "Help write our next chapter" + "Donate Now" navy pill → Givebutter

━━━━━━━━━━━━━━━━━━━━
MOBILE
━━━━━━━━━━━━━━━━━━━━
- Fully responsive. Everything stacks to one column.
- The Past/Present/Future navigator becomes a 3-button row that still sticks under the header.
- The timeline turns vertical, and stats show as 2×2.
- Text readable without zooming; buttons at least 44px tall.
</pasted_text>

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Fix the active menu highlight in the header. Edit the SAME existing file. Do not change anything else on any page.

The tan underline under the menu item must show which page the visitor is CURRENTLY on. Right now "Home" stays underlined on every page.

- Home page → underline "Home" only
- About Us page → underline "About Us" only
- Our Ministries page → underline "Our Ministries" only
- Contact page → underline "Contact" only

Only ONE menu item is underlined at a time. Use the same style on every page: white text with a 3px tan (#D8C3A0) underline. The other menu items have no underline, only the tan hover effect.

Set this up on the shared header so it updates automatically on every page, including pages added later. Apply the same active state to the mobile menu panel too.

Also fix the Past / Present / Future navigator: make the three tabs exactly equal width, and make the bar span the full width of the page content with no white gaps on the sides.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

can we make this house white instead

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

The header house tab is now white, on both desktop and mobile. I haven't looked at the page since the change. The logo is navy, so it should read clearly against the white.

## User

<artifact-content-authored-by-others/>


## User

<pasted_text name="Pasted text (72 lines)">
Create the OUR MINISTRIES page for Freedom House. Edit the SAME existing file and add this as a new page.

RULES:
- Do NOT change the homepage or the About Us page.
- Use the SAME header, footer, colors and fonts as the rest of the site (navy #0F2340, deep navy #0A1830, tan #D8C3A0, cream #F7F2E8, white; Bricolage Grotesque headings, Inter body).
- The page hero must be the SAME height and style as the About Us hero.
- In the header, underline "Our Ministries" only (active page).
- Use the same eyebrow style: small tan HOUSE icon + label in sentence case.
- NO AI or stock photos. Use clearly labeled placeholders for the client's real photos and videos.
- Do not invent facts. Use [PLACEHOLDERS] for client text.
- Never call this page "Non-Profits". Freedom House is itself a nonprofit, and this page is about the ministries it houses.

━━━━━━━━━━━━━━━━━━━━
1. PAGE HERO
━━━━━━━━━━━━━━━━━━━━
- Full-width photo of the inside of the building or a hallway of ministry offices [PHOTO PLACEHOLDER], with the same left-to-right navy overlay as the About Us hero.
- Eyebrow: house icon + "Our Ministries"
- Heading: "Many ministries. One roof."
- Subtext: "Freedom House is a 501(c)(3) nonprofit that gives local ministries a home, so neighbors in need can find help in one place."
- Buttons: "Meet the ministries" (tan pill, scrolls to section 4) and "Donate" (white outline pill → Givebutter)

━━━━━━━━━━━━━━━━━━━━
2. WHAT FREEDOM HOUSE PROVIDES (cream background)
━━━━━━━━━━━━━━━━━━━━
- Eyebrow: house icon + "What we provide"
- Heading: "A home base for local ministries"
- Short intro [CLIENT TEXT: what Freedom House gives the ministries]
- OFFICE PHOTO GALLERY: a grid of 4–6 photos showing the spaces Freedom House provides. One large photo with smaller photos beside it, all square-cornered. Each photo has a short caption label, e.g. [Ministry offices], [Shared meeting room], [Donation storage], [Reception / waiting area]. All are placeholders for real photos.
- Below the gallery, a row of 3–4 simple icon items for what Freedom House provides: [Office space], [Shared spaces], [Utilities], [One accessible address]. The client will confirm these.

━━━━━━━━━━━━━━━━━━━━
3. UNITED UNDER ONE ROOF (navy background)
━━━━━━━━━━━━━━━━━━━━
- A large group photo of all four ministry directors together in front of or inside Freedom House [GROUP PHOTO PLACEHOLDER: all four directors together].
- Next to it or overlaid at the bottom: eyebrow "United under one roof" + heading "Four ministries. One mission." + a caption naming the directors: [Director Name, Ministry] × 4.

━━━━━━━━━━━━━━━━━━━━
4. MINISTRY QUICK-JUMP BAR
━━━━━━━━━━━━━━━━━━━━
- A row of the 4 ministry logos that jump to each ministry's section below.
- IMPORTANT: every logo sits in an IDENTICAL fixed-size white box (160×160px on desktop, 120×120px on mobile) with the logo centered and scaled to fit (object-fit: contain, same padding). All logos must look the SAME visual size on desktop AND mobile, whatever the original file proportions.
- Ministry name under each logo.

━━━━━━━━━━━━━━━━━━━━
5. MINISTRY PROFILES (one section per ministry, 4 total)
━━━━━━━━━━━━━━━━━━━━
Alternate the layout (photo left / text right, then text left / photo right) and alternate white and cream backgrounds. Each ministry section has:
- Small label: "Suite 01", "Suite 02"… (matches the homepage)
- Logo in the same fixed-size box used in the quick-jump bar
- [MINISTRY NAME] as the heading
- Mini bio [CLIENT TEXT: who they are and what they do for the community, 2–3 sentences]
- "How they help" with 3 short points [CLIENT TEXT]
- "ALWAYS NEEDED" wishlist box: a tan box with a list of their top 5–6 wishlist items [ITEM]. Include a small note: "Drop off items at Freedom House during building hours."
- Contact line: [Ministry hours] · [Phone] · [Website link]
- Photo of THEIR office inside Freedom House [PHOTO PLACEHOLDER: Ministry office]
- Optional video card (16:9 placeholder with a play button) [MINISTRY VIDEO]
- Buttons: "Visit their website" (navy outline) and "Support this ministry" (navy pill → Givebutter or the ministry's donation link)

━━━━━━━━━━━━━━━━━━━━
6. HOW YOU CAN HELP (tan background)
━━━━━━━━━━━━━━━━━━━━
- Heading: "Help every ministry at once"
- Short line: "Your gift to Freedom House keeps the doors open for every ministry under our roof."
- Three options with icons: "Donate online" (→ Givebutter), "Drop off wishlist items" (→ building hours on the Contact page), "Volunteer" (→ Contact page)

━━━━━━━━━━━━━━━━━━━━
MOBILE
━━━━━━━━━━━━━━━━━━━━
- Fully responsive. All sections stack to one column.
- The quick-jump logos show as a 2×2 grid, and every logo box stays EXACTLY the same size.
- The gallery stacks into a simple column or 2-column grid.
- Text readable without zooming; buttons at least 44px tall.
</pasted_text>

## User

Make the page hero the SAME height on every page EXCEPT the homepage. Edit the SAME existing file. Do NOT change the homepage hero.

- Use the About Us hero as the standard. Apply the exact same hero height, padding and layout to About Us, Our Ministries, Contact, and any page added later.
- Desktop: fixed height of 500px for every inner-page hero (not min-height, so the height doesn't change with how much text each hero has).
- Tablet: 440px. Mobile: 420px.
- Content is vertically centered in the hero, with the same left alignment, max-width and spacing on every page: eyebrow → heading → subtext → buttons.
- Keep each page's own photo, text and buttons. Only the height and spacing should match.
- If a hero's content doesn't fit, shorten the spacing or scale the heading down slightly. Do not make that hero taller.

Set this up as one shared inner-page hero style, so every new page automatically uses the same height.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

<pasted_text name="Pasted text (68 lines)">
Create the CONTACT page for Freedom House. Edit the SAME existing file and add this as a new page.

RULES:
- Do NOT change the homepage, About Us or Our Ministries pages.
- Use the SAME header, footer, colors and fonts as the rest of the site (navy #0F2340, deep navy #0A1830, tan #D8C3A0, cream #F7F2E8, white; Bricolage Grotesque headings, Inter body).
- The page hero must be the EXACT same height and style as the About Us hero (shared inner-page hero: 500px desktop, 440px tablet, 420px mobile).
- In the header, underline "Contact" only (active page).
- Use the same eyebrow style: small tan HOUSE icon + label in sentence case.
- NO AI or stock photos. Use labeled placeholders.
- The client said the old contact page "felt a little bare," so make it warm and colorful with the navy and tan blocks, not a plain white page.

━━━━━━━━━━━━━━━━━━━━
1. PAGE HERO
━━━━━━━━━━━━━━━━━━━━
- Full-width photo of the Freedom House front entrance [PHOTO PLACEHOLDER], with the same left-to-right navy overlay as the other inner pages.
- Eyebrow: house icon + "Contact"
- Heading: "We'd love to hear from you"
- Subtext: "Stop by, give us a call, or send a message. We're here to help."
- Buttons: "Call [PHONE]" (tan pill, tel: link) and "Get directions" (white outline pill → Google Maps link)

━━━━━━━━━━━━━━━━━━━━
2. QUICK INFO CARDS (overlapping the bottom of the hero)
━━━━━━━━━━━━━━━━━━━━
- A row of 4 cards that slightly overlaps the bottom edge of the hero, white cards with a tan top border:
  • Visit: [STREET ADDRESS], Liberty, MO [ZIP] + "Get directions →"
  • Building hours: Mon–Fri [HOURS] · Sat [HOURS] · Sun [HOURS]
  • Call: [PHONE] (click-to-call)
  • Email: [CONTACT EMAIL] (click-to-email)
- Each card has a tan outline icon (map pin, clock, phone, mail) inside a navy circle.

━━━━━━━━━━━━━━━━━━━━
3. CONTACT FORM + HOURS (cream background)
━━━━━━━━━━━━━━━━━━━━
Two columns:
- LEFT (wider): white card with the contact form
  • Eyebrow: house icon + "Send a message" / heading "How can we help?"
  • Fields: Name*, Email*, Phone, "I'm reaching out about" dropdown (General question, Volunteering, Donating items, Finding help from a ministry, Events, Other), Message*
  • Large navy "Send message" pill button
  • Small note: "We'll get back to you within [1–2 business days]."
  • Labels above every field, clear required markers, and inline error messages
- RIGHT: navy card with BUILDING HOURS shown as a clean weekly table (Monday–Sunday rows: day on the left, hours on the right in tan, "Closed" where applicable), plus a highlighted note: "Dropping off donations? Please come during building hours." Below it, the phone number in large tan text: [PHONE].

━━━━━━━━━━━━━━━━━━━━
4. MAP (full width)
━━━━━━━━━━━━━━━━━━━━
- Full-width Google Map embed of the Freedom House address [MAP PLACEHOLDER], about 420px tall.
- A small white "Freedom House" label card floats on the map with the address and a "Get directions" link.

━━━━━━━━━━━━━━━━━━━━
5. LOOKING FOR A SPECIFIC MINISTRY? (white background)
━━━━━━━━━━━━━━━━━━━━
- Heading: "Looking for a specific ministry?"
- Short line: "Each ministry at Freedom House has its own hours and contact info."
- The 4 ministry logos in the same fixed-size boxes used on the Our Ministries page, each linking to that ministry's section on the Our Ministries page.

━━━━━━━━━━━━━━━━━━━━
6. STAY CONNECTED (tan background)
━━━━━━━━━━━━━━━━━━━━
- Left: "Follow along" + Facebook and Instagram icon buttons (navy circles)
- Right: email signup ("Get updates from Freedom House": Name + Email + "Sign me up" navy pill), matching the homepage signup

━━━━━━━━━━━━━━━━━━━━
MOBILE
━━━━━━━━━━━━━━━━━━━━
- Fully responsive. Info cards stack (2×2 on tablet, 1 column on phone).
- The form goes first, then the hours card below it.
- Phone and email are tap-to-call and tap-to-email.
- Text readable without zooming; inputs and buttons at least 44px tall.
</pasted_text>

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Update the site CONTENT ONLY with Freedom House's real information. Edit the SAME existing file. Do NOT change any layout, design, colors or fonts. Only replace the matching placeholders on every page (header, footer, Home, About Us, Our Ministries, Contact).

━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS (replace everywhere)
━━━━━━━━━━━━━━━━━━━━
- Address: 2050 Plumbers Way, Liberty, MO 64068
- Phone: (816) 781-6357 (click-to-call link: tel:+18167816357)
- Building hours: Thursday and Saturday, 9:00 AM – 12:00 PM. All other days: Closed.
- Leave [CONTACT EMAIL] as a placeholder for now.
- "Get directions" links → Google Maps for 2050 Plumbers Way, Liberty, MO 64068. The map embed should show this address.

Where hours appear:
- Header mini info bar: change "Mon–Fri [HOURS]" to "Thu & Sat 9 AM – 12 PM"
- Homepage "Visit" block, Contact page info card and footer: "Thursday & Saturday, 9:00 AM – 12:00 PM"
- Contact page weekly hours table: Monday Closed · Tuesday Closed · Wednesday Closed · Thursday 9:00 AM – 12:00 PM · Friday Closed · Saturday 9:00 AM – 12:00 PM · Sunday Closed. Highlight Thursday and Saturday in tan.

Accessibility note (add a small line with an accessibility icon on the Contact page and the homepage Visit block):
"Wheelchair-accessible entrance and parking lot."

━━━━━━━━━━━━━━━━━━━━
THE FOUR MINISTRIES (replace the [Ministry Name] placeholders, in this order)
━━━━━━━━━━━━━━━━━━━━
- Suite 01: Love INC of Clay County
- Suite 02: In As Much Ministry
- Suite 03: Hillcrest Ministries
- Suite 04: Rebuilding Together Clay County

Apply these names on the homepage ministry cards, the Our Ministries quick-jump bar and profile sections, and the Contact page "Looking for a specific ministry?" logos. Keep the logo boxes as labeled placeholders: [Love INC logo], [In As Much Ministry logo], [Hillcrest Ministries logo], [Rebuilding Together Clay County logo]. Keep the bios and wishlist items as placeholders.

━━━━━━━━━━━━━━━━━━━━
HISTORY (About Us page)
━━━━━━━━━━━━━━━━━━━━
- In "The Past" timeline, set the first milestone to: "February 2008 — Freedom House opens its doors in Liberty to house local charitable groups under one roof."
- In the stats band, replace "[#] Years serving Liberty" with "2008" and the label "Serving Liberty since".
- Keep all other timeline points and stats as placeholders.

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

Footer still has placeholders; fixing it and adding hours.

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Remove the contact email from the entire site. Edit the SAME existing file. Do NOT change any other content, layout or design.

Remove every displayed email address, email placeholder and email icon, including:
- Header mini info bar: remove the mail icon and "[CONTACT EMAIL]". Keep the hours and phone.
- Homepage "Visit us" block: remove the Email item and rebalance the remaining items (Visit, Building Hours, Call) so the layout has no empty gap.
- Contact page quick info cards: remove the Email card. Keep 3 cards (Visit, Building hours, Call), equal width, still overlapping the hero.
- Footer: remove the email line.
- Mobile menu panel: remove the email line.
- Remove any "mailto:" links anywhere on the site.

Phone and the contact form are now the main ways to reach Freedom House. Make sure the phone number (816) 781-6357 stays prominent and tap-to-call everywhere.

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

<pasted_text name="Pasted text (82 lines)">
Create the DONATE page for Freedom House. Edit the SAME existing file and add this as a new page.

RULES:
- Do NOT change the homepage, About Us, Our Ministries or Contact pages, except for the link updates listed at the end.
- Use the SAME header, footer, colors and fonts as the rest of the site (navy #0F2340, deep navy #0A1830, tan #D8C3A0, cream #F7F2E8, white; Bricolage Grotesque headings, Inter body).
- NO RED anywhere on this page, especially not as a background.
- The page hero must be the EXACT same height and style as the other inner pages (500px desktop, 440px tablet, 420px mobile).
- Use the same eyebrow style: small tan HOUSE icon + label in sentence case.
- NO AI or stock photos. Use labeled placeholders for real Freedom House photos.
- Do not invent facts or dollar amounts. Use [PLACEHOLDERS] where the client will confirm.
- No email addresses anywhere.

━━━━━━━━━━━━━━━━━━━━
1. PAGE HERO
━━━━━━━━━━━━━━━━━━━━
- Full-width photo of the Freedom House building or ministries at work [PHOTO PLACEHOLDER], with the same left-to-right navy overlay as the other inner pages.
- Eyebrow: house icon + "Donate"
- Heading: "Keep the doors open"
- Subtext: "One gift to Freedom House supports every ministry under our roof."
- Button: "Give now on Givebutter" (tan pill → Givebutter link)
- Small trust line under the button: "Secure giving · Freedom House is a 501(c)(3) nonprofit · Donations are tax-deductible as allowed by law"

━━━━━━━━━━━━━━━━━━━━
2. SEE WHAT YOUR GIFT DOES (cream background, interactive)
━━━━━━━━━━━━━━━━━━━━
- Eyebrow: house icon + "Your impact" / heading "See what your gift does"
- Clickable amount buttons: $25 · $50 · $100 · $250 · $500 · $1,000 (the selected one turns solid navy with white text)
- Next to the buttons, a large impact card that updates with the selected amount: a photo placeholder showing that impact, the amount in big tan type, and what it provides:
  • $1,000 → "Covers one month of rent for the building that houses every ministry." (selected by default)
  • $25 / $50 / $100 / $250 / $500 → [IMPACT — client to confirm, e.g. "keeps the lights on for a week"]
- Navy pill button under the card that updates too: "Give $1,000 on Givebutter"
- A small "Make it monthly" note: "Monthly gifts help us plan ahead. Choose 'monthly' on Givebutter."

━━━━━━━━━━━━━━━━━━━━
3. WHERE YOUR MONEY GOES (white background)
━━━━━━━━━━━━━━━━━━━━
- Heading: "Every dollar keeps help under one roof"
- 3–4 photo cards showing what donations pay for, each with a real photo placeholder, a short title and one line:
  • [Building rent]: "A home for every ministry."
  • [Utilities]: "[Client text]"
  • [Building upkeep and repairs]: "[Client text]"
  • [Shared spaces]: "[Client text]"
- Optional simple bar showing how gifts are used: [X]% building, [X]% upkeep, [X]% programs. Placeholders, and hide it if the client has no numbers.

━━━━━━━━━━━━━━━━━━━━
4. GIVEBUTTER DONATION PORTAL (deep navy background)
━━━━━━━━━━━━━━━━━━━━
- Heading: "Give securely online"
- A large white card holding the Givebutter donation widget [GIVEBUTTER EMBED PLACEHOLDER], centered, max-width about 640px.
- Under it: "Prefer to give on Givebutter directly?" + link "Open our Givebutter page →"

━━━━━━━━━━━━━━━━━━━━
5. OTHER WAYS TO GIVE (tan background)
━━━━━━━━━━━━━━━━━━━━
Four cards with tan outline icons in navy circles:
- Donate items: "Each ministry has an 'always needed' list." → link "See wishlists" → Our Ministries page
- Volunteer your time: "Help with building projects and events." → link "Get involved" → About Us page, "Get involved" section
- Give by check: "Mail to Freedom House, 2050 Plumbers Way, Liberty, MO 64068." [client to confirm]
- Drop off in person: "Thursday &amp; Saturday, 9 AM – 12 PM" + "Call (816) 781-6357" (tap-to-call)

━━━━━━━━━━━━━━━━━━━━
6. GIVING FAQ (white background)
━━━━━━━━━━━━━━━━━━━━
Accordion with 4 questions (answers are placeholders for the client to confirm):
- Is my donation tax-deductible?
- Does my gift go to one ministry or all of them?
- Can I give monthly?
- Can I donate in honor or memory of someone?

━━━━━━━━━━━━━━━━━━━━
LINK UPDATES (site-wide)
━━━━━━━━━━━━━━━━━━━━
- The "Donate" button in the header (desktop and mobile) now goes to this Donate page instead of straight to Givebutter.
- When the visitor is on the Donate page, the header Donate pill shows an active state: white background with navy text and a tan border.
- Keep the other "Donate" / "Give" buttons on the site as they are.

━━━━━━━━━━━━━━━━━━━━
MOBILE
━━━━━━━━━━━━━━━━━━━━
- Fully responsive. The previous Donate page didn't shrink to fit phones, so make sure this one does.
- Amount buttons wrap into a 3×2 grid, and the impact card stacks below them.
- All sections stack to one column. Text readable without zooming; buttons at least 44px tall.
</pasted_text>

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Add a MINISTRY LOGO STRIP to the HOMEPAGE, directly below the hero and above the "I want to help / I need help" cards. Edit the SAME existing file. Do NOT change anything else.

━━━━━━━━━━━━━━━━━━━━
LOGO STRIP
━━━━━━━━━━━━━━━━━━━━
- Full-width white band with about 48px padding top and bottom, plus a thin 1px tan (#D8C3A0) line at the top and bottom.
- Centered small label above the logos: house icon (tan) + "Home to these local ministries" (Inter 600, 15px, navy #0F2340).
- The 4 ministry logos in one row, evenly spaced across the content width, in this order:
  1. Rebuilding Together (Kansas City)
  2. In As Much Ministry
  3. Hillcrest Transitional Housing
  4. Love INC of Clay County
- Use the actual uploaded logo files in their ORIGINAL colors. Do not recolor, crop or redraw them. If a logo file isn't uploaded yet, show a labeled placeholder box.

LOGO SIZING (important; the client noticed mismatched logo sizes before):
- Each logo sits in an IDENTICAL invisible box: 220px wide × 90px tall on desktop.
- Scale each logo to fit inside its box (object-fit: contain), centered, so they all LOOK the same visual size even though the files have different shapes (some wide, some square).
- The Love INC logo has its own navy background block. Keep that as part of the logo, at the same height as the others.

BEHAVIOR:
- Each logo links to that ministry's section on the Our Ministries page.
- On hover, a logo lifts slightly (translateY -3px). No color changes.

━━━━━━━━━━━━━━━━━━━━
MOBILE
━━━━━━━━━━━━━━━━━━━━
- 2×2 grid, with every logo box exactly the same size (about 150px × 70px).
- Label stays centered above.

## Assistant

_[tool: list_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Update the CONTENT of the "About Freedom House" section on the HOMEPAGE. Edit the SAME existing file. Do NOT change the design, layout, colors or fonts of this section or any other section.

1. PARAGRAPH: replace the placeholder paragraph with:
"Freedom House is an organization that provides an accessible location under one roof for local nonprofit ministries that aid those in need in our community."

2. PHOTO: replace the interior photo placeholder with the uploaded image of the Freedom House building (exterior view).
   - Show the WHOLE building. Do not crop the left tower or the right end of the building.
   - Keep the same frame style the section already uses (square corners, thin 1px tan border).
   - Use object-fit: cover with object-position: center so the building stays centered.

3. Keep the existing eyebrow ("About Freedom House"), heading ("One accessible place to find help in Liberty.") and the "Our story: past, present & future →" link exactly as they are.

## Assistant

_[tool: image_metadata]_

_[tool: run_script]_

_[tool: ready_for_verification]_

The About section on the homepage now has your new paragraph, and the interior photo placeholder is replaced with the building exterior photo. The frame keeps the 1px tan border and square corners. I sized it to the photo's own proportions, so the whole building shows, with nothing cropped at the left tower or right end. That makes it a wide, shorter frame than the old 4:3 one. I haven't looked at the page since the change.

I used `hero-entrance.webp`, since no new building photo was uploaded. If you meant a different file, tell me which.

The "Our story: past, present & future →" link isn't in this section. Earlier you asked me to remove it and put the CTA buttons there, so I left the buttons in place. I can bring the link back above them if you want it.

## User

also here are logos for Home to these local ministries strip

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

I think those logos are house here

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

## User

let's remove this strip instead

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I removed the "Home to these local ministries" strip from the homepage. The "I want to help / I need help" cards now sit directly under the hero. I haven't looked at the page since the removal.

The real logos I added in the last step are still in the homepage ministry cards, on the Our Ministries page and in the Contact page ministry list.

## User

Small fixes to the ministry cards in the "Many ministries. One roof." section on the HOMEPAGE. Edit the SAME existing file. Do NOT change the layout, the roofline or anything else.

1. LOGO SIZING: make all 4 logos look the same visual size inside their white boxes.
   - Wide logos (In As Much Ministry, Hillcrest) should fill about 90% of the box width.
   - Square or stacked logos (Rebuilding Together, Love INC) should fill about 75% of the box height.
   - Keep the white boxes identical in size. Only the logo scaling inside changes.

2. NAMES: update the ministry names to match their logos:
   - "Hillcrest Ministries" → "Hillcrest Transitional Housing"
   - "Rebuilding Together Clay County" → "Rebuilding Together Kansas City"
   Apply the same name changes on the Our Ministries page and the Contact page.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

