import { defineConfig } from 'astro/config';

const deployTarget = process.env.DEPLOY_TARGET ?? 'preview';
const isGitHubPages = deployTarget === 'github';
const githubUser = process.env.GITHUB_PAGES_USER ?? 'your-username';
const githubRepo = (process.env.GITHUB_PAGES_REPO ?? 'sapienza-macro-days').replace(/^\/+|\/+$/g, '');

export default defineConfig({
  site: isGitHubPages ? `https://${githubUser}.github.io` : undefined,
  base: isGitHubPages ? `/${githubRepo}/` : '/',
  build: {
    assets: '_assets'
  }
});
