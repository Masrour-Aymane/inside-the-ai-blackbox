# My Blog

A minimal static blog built with plain HTML & CSS. No frameworks, no build step.

## Deploy to GitHub Pages (5 minutes)

### Step 1 — Create a GitHub repository
1. Go to [github.com/new](https://github.com/new)
2. Name it whatever you like (e.g. `blog` or `my-blog`)
3. Make it **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2 — Upload the files
**Option A: Upload via the browser (easiest)**
1. On your new repo page, click **"uploading an existing file"**
2. Drag the entire contents of this folder into the upload area
   - Make sure the folder structure is preserved: `index.html`, `about.html`, `css/`, `posts/`
3. Click **Commit changes**

**Option B: Use Git from the terminal**
```bash
cd blog
git init
git add .
git commit -m "Initial blog"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**
5. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## How to add a new post
1. Copy `posts/_template.html` and rename it (e.g. `posts/my-new-post.html`)
2. Edit the template: change the title, subtitle, date, and write your content
3. Add a card for it in `index.html` (there's a commented example showing how)
4. Commit and push — GitHub Pages updates automatically

## File structure
```
blog/
├── index.html                        # Homepage with post listing
├── about.html                        # About page
├── README.md                         # This file
├── css/
│   └── style.css                     # All styles
└── posts/
    ├── _template.html                # Copy this for new posts
    └── lottery-ticket-hypothesis.html # First post
```

## Custom domain (optional)
If you own a domain, go to **Settings → Pages** and add it under **Custom domain**.
GitHub will generate a free HTTPS certificate automatically.
