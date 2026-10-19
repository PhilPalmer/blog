# philpalmer.me

My personal website: a single static HTML page, no build step.

```
index.html          # the whole site
assets/css/style.css
assets/js/main.js   # dark-mode toggle
assets/img/         # avatar + research figures
```

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy

Pushing to `master` publishes to GitHub Pages via `.github/workflows/deploy.yml`,
served at the domain in `CNAME`.

## Figure credits

Research images are figures/graphical abstracts from the linked papers, used
under their CC BY licences, except the H5 nanocage panel (CC BY-NC-ND, Emerging
Microbes & Infections) and the MYC graphical abstract (CC BY-NC-ND, Cell Reports).
