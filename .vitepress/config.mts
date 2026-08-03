import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: true,
  title: "7h4um",
  description: "Thaumstrial's DB",
  markdown: {
    lineNumbers: true,
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Blogs', link: '/blogs.md' },
      { text: 'Notes', link: '/notes.md' },
      { text: 'About', link: '/about.md' },
      { text: 'Links', link: '/links.md' },
    ],

    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thaumstrial' }
    ],
    search: {
      provider: 'local'
    }
  }
})
