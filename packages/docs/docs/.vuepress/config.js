const { fs, path, globby } = require('@vuepress/shared-utils')
function genComponentsDir(name) {
	const dir = fs.readdirSync(path.resolve(__dirname, '..', name));
	return dir.sort().filter(name => name !== 'README.md');
}

module.exports = {
  title: '前端路上',
  description: 'www.90s.co',
  base: '/blog/',
  themeConfig: {
    nav: [
      // { text: '首页', link: '/' },
      { text: '项目', link: '/project/' },
      { text: '笔记', link: '/note/' },
      { text: '文字', link: '/article/' },
      { text: 'Github', link: 'https://github.com/dogodo-cc/90s' },
    ],
    sidebar: {
      '/note/': [
				{
					title: '前端笔记',
					collapsable: true,
					children: genComponentsDir('note'),
				},
      ],
      '/article/': [
				{
					title: '文章收藏',
					collapsable: true,
					children: genComponentsDir('article'),
				},
      ],
      '/project/': [
				{
					title: '项目记录',
					collapsable: true,
					children: genComponentsDir('project'),
				},
			],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../'
      }
    }
  }
}