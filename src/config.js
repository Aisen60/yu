export const APP_META = [
  { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
  {
    name: 'viewport',
    content:
      'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black-translucent',
  },
  {
    name: 'keywords',
    content: 'aisen60, aisen60-blog',
  },
  {
    hid: 'description',
    name: 'description',
    content: 'aisen60的博客，分享技术，记录生活',
  },
  {
    name: 'author',
    content: 'aisen60',
  },
]

export const APP_LINK = [
  {
    rel: 'stylesheet',
    href:
      'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css',
  },
  {
    rel: 'stylesheet',
    href: '//at.alicdn.com/t/font_2113295_u3lqjmtzjnh.css',
  },
  {
    rel: 'stylesheet',
    href: '/css/typo.css',
  },
  {
    rel: 'stylesheet',
    href: '/css/markdown.css',
  },
]

export default {
  APP_META,
  APP_LINK,
}
