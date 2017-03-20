new Vue({
  el: '#app',
  data: {
    title: '　补番 List',
    author: '烧饼',
    author_github_name: 'fython',
    copyright_author: 'Fung Go (fython)',
    menus: [
      { text: '作者微博', link: 'http://weibo.com/fython'},
      { text: 'Github 源码', link: 'https://github.com/fython/To-Watch-Bangumi-List' }
    ],

    items: [
      { title:'绯弹的亚利亚', intro:'虽然在以前初一初二的时候就已经看过天降之物和出包王女，我还是认为初三看的这部亚里亚才是我的入宅作。钉宫配的傲娇萝莉太萌啦~', link:'http://bangumi.bilibili.com/anime/2993', pic:'http://i0.hdslb.com/bfs/bangumi/52385016afa0a7fd0e47ae169d9933dde893f7ee.jpg_225x300.jpg' },
			{ title:'绯弹的亚利亚', intro:'虽然在以前初一初二的时候就已经看过天降之物和出包王女，我还是认为初三看的这部亚里亚才是我的入宅作。钉宫配的傲娇萝莉太萌啦~', link:'http://bangumi.bilibili.com/anime/2993', pic:'http://i0.hdslb.com/bfs/bangumi/52385016afa0a7fd0e47ae169d9933dde893f7ee.jpg_225x300.jpg' }
    ]
  },
  methods: {
  }
})
