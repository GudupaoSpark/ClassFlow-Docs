// .vitepress/data/footerData.ts

import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  group: [
    {
        title: '关于',
        icon: 'bx:link', // `iconify`图标
        style: 'rgba(255, 87, 51, 1)',
        links: [
          { name: 'Gudupao', href: 'https://gudupao.top/' }
        ]
      },
    {
      title: '快速跳转',
      target: '_self', // `target`默认打开方式为 _blank , 为 _self 时不会显示外部链接图标
      icon: 'bx:link',
      style: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '首页', href: '/' },
        { name: 'Server', href: '/Server/' }
      ]
    }
  ]
}