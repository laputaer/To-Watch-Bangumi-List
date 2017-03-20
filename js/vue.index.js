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
      { title:'绯弹的亚里亚', intro:'虽然在以前初一初二的时候就已经看过天降之物和出包王女，我还是认为初三看的这部亚里亚才是我的入宅作。钉宫配的傲娇萝莉太萌啦~', link:'http://bangumi.bilibili.com/anime/2993', pic:'http://lain.bgm.tv/pic/cover/l/ed/fc/10226_m4mvu.jpg' },
			{ title:'绯弹的亚里亚AA', intro:'亚里亚的外传动画，我就当作是第二季的替代品，变成百合番也无所谓能看到亚里亚就ok！然而亚里亚怎么变帅了？？', link:'http://bangumi.bilibili.com/anime/2764', pic:'http://lain.bgm.tv/pic/cover/l/1b/d3/120224_9Hpcq.jpg' },
			{ title:'悠哉日常大王', intro:'非常不错的日常百合番，描绘的是宫内莲华和小伙伴在乡间的生活，她们眼中平淡的日常对于我来说千金难求，那种悠哉悠哉的体验也只好在这部动画中感受了，音乐和作画都很棒，值得一看！', link:'http://bangumi.tv/subject/78405', pic:'http://lain.bgm.tv/pic/cover/l/47/fa/78405_dFAHw.jpg' },
			{ title:'悠哉日常大王Repeat', intro:'喵帕斯！感觉没有第一季做得好，笑点还是不错的。', link:'http://bangumi.tv/subject/101442', pic:'http://lain.bgm.tv/pic/cover/l/8b/6b/101442_oJJsL.jpg' },
			{ title:'魔法禁书目录第一季/第二季', intro:'', link:'http://bangumi.bilibili.com/anime/963', pic:'http://lain.bgm.tv/pic/cover/l/76/6d/1014_nqAH8.jpg' },
			{ title:'某科学的超电磁炮', intro:'', link:'http://bangumi.bilibili.com/anime/425', pic:'http://lain.bgm.tv/pic/cover/l/36/e7/2585_bXs9U.jpg' },
			{ title:'某科学的超电磁炮S', intro:'', link:'http://bangumi.bilibili.com/anime/427', pic:'http://lain.bgm.tv/pic/cover/l/99/8c/51928_6lEYy.jpg' },
			{ title:'龙与虎', intro:'', link:'http://bangumi.bilibili.com/anime/1672', pic:'http://lain.bgm.tv/pic/cover/l/a4/30/909_e5zhk.jpg' },
			{ title:'灼眼的夏娜', intro:'', link:'http://bangumi.bilibili.com/anime/1600', pic:'http://lain.bgm.tv/pic/cover/l/c4/10/490_kuz6S.jpg' }
    ]
  },
  methods: {
  }
})
