module.exports = {
  title: 'mat2\'s tech blog',
  description: 'vuepressで作られた技術ブログ',
  dest: 'docs/',
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },
  head: [
    ['script', { src: 'https://kit.fontawesome.com/4303b21f4b.js', crossorigin: 'anonymous' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icon/favicon.png' }],
    ['meta', { name: 'google-site-verification', content: 'IlPoCiloaoSPffpYU1OaEpLY1YEnCgkjdM6KfuNCN6g' }],
  ],
  extendMarkdown: md => {
    md.use(require('markdown-it-fontawesome'))
  },
  // theme: 'meteorlxy',
  themeConfig: {
    domain: 'https://mat2.net',
    lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/ja-JP'), {
      posts: '投稿',
      searchHint: 'タイトルと見出しから検索'
    }),
    personalInfo: {
      nickname: 'mat2',
      description: 'エンジニアをしたい',
      email: 'ondriver246.1u[at]gmail.com',
      link: '/profile/',
      // location: '',
      organization: 'Tokyo Institute of Technology/Techflyer,inc.',
      avatar: 'https://pbs.twimg.com/profile_images/1092782177471741952/OnHQf9H2_400x400.jpg',
      header: 'https://pbs.twimg.com/profile_banners/1041141852743729152/1537067919/1500x500',
      sns: {
        github: {
          account: 'mat2hiro',
          link: 'https://github.com/mat2hiro',
        },
        twitter: {
          account: 'お腹',
          link: 'https://twitter.com/clC41UL',
        },
      },
    },
    header: {
      background: {
        url: '/img/common/header_bg.jpeg',
        useGeo: false,
      },
      showTitle: true,
    },
    lastUpdated: true,
    nav: [
      {
        text: 'Home',
        link: '/',
        exact: true,
      },
      {
        text: 'Posts',
        link: '/posts/',
        exact: false,
      },
      {
        text: 'Profile',
        link: '/profile/',
        exact: true,
      },
      {
        text: 'Links',
        link: '/links/',
        exact: true,
      },
    ],
    comments: false,
    /*links: [
      {
        name: 'リンク1',
        link: 'https://twitter.com',
      },
      {
        name: 'リンク2',
        link: 'https://github.com',
      },
    ],*/
  },
  // plugins
  plugins: {
    'sitemap': {
      hostname: 'https://mat2.net/'
    },
    'seo': {
      title: ($page, $site) => $page.title || $site.title,
      description: ($page, $site) => $page.frontmatter.description || $site.description,
      twitterCard: _ => 'summary_large_image',
      image: ($page, $site) => {
        const ret = $page.frontmatter['header-image'] || $site.themeConfig.header.background.url || null;
        if (ret) {
          return (ret.startsWith('http') ? '' : $site.themeConfig.domain) + ret
        } else {
          return null
        }
      },
    },
    'feed': {
      canonical_base: 'https://mat2.net/',
      feed_options: {
        author: {
          name: "mat2",
          //email: "ondriver246.1u[at]gmail.com",
          link: "https://mat2.net/profile/"
        },
      },
    },
    '@vuepress/google-analytics': {
      ga: 'UA-150079399-1',
    },
    // 'container': {
    //   type: 'ogp-card',
    //   before: url => `<OGPCard url=${url}>`,
    //   after: `</OGPCard>`
    // },
  }
}
