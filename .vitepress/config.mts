import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "7h4um",
  description: "Thaumstrial's DB",
  markdown: {
    lineNumbers: true,
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.md' },
      { text: 'Links', link: '/links.md' },
      { text: 'Examples', link: '/markdown-examples' }
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
