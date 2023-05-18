const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'VNPT Invoice POS',
  tagline: 'Hóa đơn điện tử có mã CQT khởi tạo từ máy tính tiền',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hóa đơn điện tử VNPT',
        logo: {
          alt: 'VNPT Invoice',
          src: 'img/VNPT_Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Hóa đơn điện tử máy tính tiền',
          },
          {
            href: '#',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Hướng dẫn',
            items: [
              {
                label: 'HD VNPT Invoice TT78',
                href: 'https://zalo.me/0813681111',
              },
              {
                label: 'HD VNPT Invoice POS',
                to: '/docs/intro',
              },
              {
                label: 'HD VNPT Invoice Gateway',
                href: 'https://zalo.me/0813681111',
              },
            ],
          },
          {
            title: 'Liên hệ hỗ trợ',
            items: [
              {
                label: 'Hà Văn Chiêm',
                href: 'https://zalo.me/0813681111',
              },
            ],
          },
          {
            title: 'Đăng ký mua Hóa đơn điện tử',
            items: [
              {
                label: 'OneSME',
                href: 'https://onesme.vn/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BU DVSDN - Ban KHDN - VNPT Vinaphone`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});