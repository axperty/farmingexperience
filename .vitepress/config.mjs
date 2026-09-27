import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

function getSidebar(base) {
  return [
    {
      text: 'Wiki',
      items: [
        { text: 'About', link: `${base}/wiki/about` },
        { text: 'Installation', link: `${base}/wiki/installation` },
        { text: 'Create a Server', link: `${base}/wiki/create_a_server` },
        { text: 'Included Mods', link: `${base}/wiki/included_mods` },
        { text: 'Feedback & Suggestions', link: `${base}/wiki/feedback` },
      ]
    }
  ]
}

export default defineConfig({
  base: '/farmingexperience/',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  title: "Farming Experience",
  description: "Farming Experience is an adventure and farming based modpack that enhances vanilla Minecraft. Explore, build, farm, decorate, and cook with new items, blocks, and structures!",
  head: [
    ['link', { rel: 'icon', href: '/farmingexperience/assets/farmingexperience_favicon.png' }],
    ['meta', { name: 'theme-color', content: '#5A821E' }],
    ['meta', { property: 'og:title', content: 'Farming Experience' }],
    ['meta', { property: 'og:description', content: 'Farming Experience is an adventure and farming based modpack that enhances vanilla Minecraft.' }],
    ['meta', { property: 'og:image', content: 'https://axperty.com/farmingexperience/assets/farmingexperience_1.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://axperty.com/farmingexperience/assets/farmingexperience_1.png' }]
  ],
  sitemap: {
    hostname: 'https://axperty.com/farmingexperience/'
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/assets/farmingexperience_icon_hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/about' },
      { text: 'Donate', link: '/donate' }
    ],
    sidebar: {
      '/wiki/': getSidebar('')
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/axperty/farmingexperience' },
      { icon: 'discord', link: 'https://discord.gg/e2BQx4bbsU' },
      { icon: 'youtube', link: 'https://www.youtube.com/@axperty' }
    ],
    footer: {
      message: '<a href="/farmingexperience/privacy">Privacy Policy</a><br/> Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.<br/> All other trademarks and logos are property of their respective owners.',
      copyright: 'Copyright © 2026 Axperty. Website source code is under the MIT License.'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ja: {
      label: 'Japanese',
      lang: 'ja',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/ja/' },
          { text: 'Wiki', link: '/ja/wiki/about' },
          { text: 'Donate', link: '/donate' }
        ],
        sidebar: {
          '/ja/wiki/': getSidebar('/ja')
        }
      }
    },
    es: {
      label: 'Spanish',
      lang: 'es',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/es/' },
          { text: 'Wiki', link: '/es/wiki/about' },
          { text: 'Donate', link: '/donate' }
        ],
        sidebar: {
          '/es/wiki/': getSidebar('/es')
        }
      }
    },
    zh: {
      label: 'Chinese',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/zh/' },
          { text: 'Wiki', link: '/zh/wiki/about' },
          { text: 'Donate', link: '/donate' }
        ],
        sidebar: {
          '/zh/wiki/': getSidebar('/zh')
        }
      }
    },
    ko: {
      label: 'Korean',
      lang: 'ko',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/ko/' },
          { text: 'Wiki', link: '/ko/wiki/about' },
          { text: 'Donate', link: '/donate' }
        ],
        sidebar: {
          '/ko/wiki/': getSidebar('/ko')
        }
      }
    },
    ru: {
      label: 'Russian',
      lang: 'ru',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/ru/' },
          { text: 'Wiki', link: '/ru/wiki/about' },
          { text: 'Donate', link: '/donate' }
        ],
        sidebar: {
          '/ru/wiki/': getSidebar('/ru')
        }
      }
    }
  }
})
