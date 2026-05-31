import { defineConfig } from 'vitepress'

const base = process.env.BASE || '/'
const siteUrl = process.env.SITE_URL || 'https://evander0x.github.io'

const zhNav = [
  { text: '首页', link: '/zh/' },
  { text: '文章', link: '/zh/posts/template' },
  { text: '关于', link: '/zh/about' }
]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Posts', link: '/en/posts/template' },
  { text: 'About', link: '/en/about' }
]

const zhSidebar = [
  {
    text: '开始写作',
    collapsed: false,
    items: [
      { text: '博客模板', link: '/zh/posts/template' },
      { text: '关于我', link: '/zh/about' }
    ]
  },
  {
    text: 'Vibe Coding',
    collapsed: true,
    items: [{ text: '栏目说明', link: '/zh/vibe-coding/index' }]
  }
]

const enSidebar = [
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'Post Template', link: '/en/posts/template' },
      { text: 'About', link: '/en/about' }
    ]
  },
  {
    text: 'Vibe Coding',
    collapsed: true,
    items: [{ text: 'Section Intro', link: '/en/vibe-coding/index' }]
  }
]

export default defineConfig({
  title: 'Evander Blog',
  description: 'A bilingual personal blog built with VitePress.',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl
  },
  head: [
    ['meta', { name: 'theme-color', content: '#c4492d' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Evander Blog' }]
  ],
  themeConfig: {
    siteTitle: 'Evander Blog',
    logo: '/logo.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/evander0x/evander0x.github.io'
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026 Evander'
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar
      }
    }
  }
})
