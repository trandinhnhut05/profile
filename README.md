# Personal Portfolio Website - Trần Đình Nhứt

A stunning, modern, and fully responsive personal portfolio website built with **React** and **Vite** using pure CSS for high-quality aesthetics (glassmorphism cards, light/dark themes, and interactive animations). 

Automated CI/CD is configured to build and deploy to **Cloudflare Pages** on every push.

## 🚀 Features

- **Responsive Design:** Optimized for all screen sizes (mobile, tablet, desktop).
- **Glassmorphism Theme:** Elegant semi-transparent glass cards with backdrop filters.
- **Theme Toggle:** Interactive light and dark theme mode toggle with localStorage state persistence.
- **Visuals:** High-quality developer avatar asset.
- **Automation:** GitHub Actions workflow configures automatic builds and pushes deployments directly to Cloudflare Pages.

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Styling:** CSS3 (Variables, Gradients, Keyframe animations)
- **Deployment:** Cloudflare Pages
- **CI/CD:** GitHub Actions

## 💻 Local Development

To run the project locally, install dependencies and start the development server:

```bash
# Install packages
npm install

# Start Vite dev server
npm run dev
```

The app will be running locally at `http://localhost:5173`.

## 📦 Deployment and CI/CD

### Manual Upload
The production bundle is created in the `dist` directory:

```bash
npm run build
```

You can zip the `dist` folder and drag-and-drop it into the Cloudflare Pages dashboard.

### GitHub Actions (Automation)
The repository is configured with a GitHub Action workflow located in `.github/workflows/deploy.yml`. 

It deploys automatically to Cloudflare Pages on every push to `main` using the following repository secrets:
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`
