# Personal Resume & Portfolio Website

A personal portfolio and registration website built with React, Vite, and React Router.

## Deployment to GitHub Pages

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Steps to Host:

1. **Create a new repository** on GitHub (e.g. `my-resume`).
2. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site. Your website will be live at:
   `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`
