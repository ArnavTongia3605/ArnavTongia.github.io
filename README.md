# Personal Portfolio

A minimal personal portfolio site for a BTech Computer Engineering student (3rd year), built with **HTML, CSS, and JavaScript only**—no JS frameworks. Suited for internship and placement applications.

Inspired by [yashitanamdeo.github.io](https://yashitanamdeo.github.io/) ([repo](https://github.com/yashitanamdeo/yashitanamdeo.github.io)).

## Features

- **Sections:** Hero, About, Education & Experience, Projects, Contact
- **Design:** Navy theme with green accent; responsive layout
- **Accessibility:** Skip link, semantic HTML, ARIA where needed
- **Behavior:** Loader, sticky nav, mobile menu, smooth scroll, scroll reveal

## Local setup

1. Clone the repo (or use the folder as-is).
2. Open `index.html` in a browser, or run a simple local server:
   ```bash
   # Python 3
   python3 -m http.server 8000
   # Then open http://localhost:8000
   ```

## Customize content

Edit `index.html` and replace placeholders:

- **Name & tagline:** Hero section (`Your Name`, `I build things for the web`, etc.)
- **About:** Bio, skills list, and photo (replace placeholder image URL or use a local image)
- **Education & Experience:** College name, years, and any internships/projects
- **Projects:** Titles, descriptions, tech stack, GitHub and live links
- **Contact:** `mailto:` email and social links (GitHub, LinkedIn, Twitter)
- **Resume:** Add a `resume.pdf` in the root and keep the “Resume” link, or point it to an external URL
- **Loader logo:** Change the letter inside `<div class="loader-logo">Y</div>` (e.g. your initial)

Logo in the nav (e.g. `YN`) can be updated in the `<a href="#" class="nav-logo">YN</a>` element.

## Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a user/org site).
2. Push this project to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Branch: **main**, folder: **/ (root)**. Save.
6. After a few minutes, the site will be at `https://yourusername.github.io`.

If you use a repo name other than `username.github.io`, the URL will be `https://yourusername.github.io/repo-name/`. In that case, set the site’s base path (e.g. add `<base href="/repo-name/">` in `<head>` or use relative paths that already work from subpaths).

## Tech stack

- HTML5
- CSS3 (custom, no framework)
- Vanilla JavaScript (no frameworks)
- Fonts: [Caladea](https://fonts.google.com/specimen/Caladea), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts)

## Color reference

| Name         | Hex     |
| ------------ | ------- |
| Navy         | `#0a192f` |
| Light Navy   | `#172a45` |
| Slate        | `#8892b0` |
| Light Slate  | `#ccd6f6` |
| White        | `#e6f1ff` |
| Green (accent) | `#64ffda` |

## License

MIT.
