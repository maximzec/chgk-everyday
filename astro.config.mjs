import { defineConfig } from 'astro/config';
export default defineConfig({site: process.env.SITE_URL || 'http://localhost:4321', output:'static', vite:{define:{__BUILD_VERSION__:JSON.stringify(process.env.GITHUB_SHA?.slice(0,8)||'dev')}}});
