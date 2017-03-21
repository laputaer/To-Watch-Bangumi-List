<!-- 顶部卡片内容，请在 template 变量中修改要显示的 HTML 内容 -->
Vue.component('header-card-content', {
  template: '<p>Modified on Mar 20, 2017</p><p>欢迎在 <b>Github issues</b> 和我一起讨论有关话题~ 也可以关注我的新浪微博</p>'
  + '<p>（PS：该列表并没有具体的排序，想起来就加上去，当然排在前面的大都是真爱。）</p>'
})

new Vue({
  el: '#app',
  data: {
    <!-- 网页信息 -->
    title: '　补番 List',
    author: '烧饼',
    author_github_name: 'fython',
    copyright_author: 'Fung Go (fython)',

    <!-- 顶部背景 -->
    header_image: 'images/hidan_no_aria_background.jpg',

    <!-- 底部/移动端 Navigation Drawer 链接 -->
    menus: [
      { text: '作者微博', link: 'http://weibo.com/fython'},
      { text: 'Github 源码', link: 'https://github.com/fython/To-Watch-Bangumi-List' }
    ],

    <!-- 列表信息，建议使用 ../mkdata.py 脚本导入数据，详情请阅读 ../README.md -->
    items: [
      { title:'绯弹的亚里亚', intro:'虽然在以前初一初二的时候就已经看过天降之物和出包王女，我还是认为初三看的这部亚里亚才是我的入宅作。钉宫配的傲娇萝莉太萌啦~', link:'http://bangumi.bilibili.com/anime/2993', pic:'http://lain.bgm.tv/pic/cover/l/ed/fc/10226_m4mvu.jpg', finished:true },
			{ title:'绯弹的亚里亚AA', intro:'亚里亚的外传动画，我就当作是第二季的替代品，变成百合番也无所谓能看到亚里亚就ok！然而亚里亚怎么变帅了？？', link:'http://bangumi.bilibili.com/anime/2764', pic:'http://lain.bgm.tv/pic/cover/l/1b/d3/120224_9Hpcq.jpg', finished:true },
			{ title:'悠哉日常大王', intro:'非常不错的日常百合番，描绘的是宫内莲华和小伙伴在乡间的生活，她们眼中平淡的日常对于我来说千金难求，那种悠哉悠哉的体验也只好在这部动画中感受了，音乐和作画都很棒，值得一看！', link:'http://bangumi.tv/subject/78405', pic:'http://lain.bgm.tv/pic/cover/l/47/fa/78405_dFAHw.jpg', finished:true },
			{ title:'悠哉日常大王Repeat', intro:'喵帕斯！感觉没有第一季做得好，笑点还是不错的。', link:'http://bangumi.tv/subject/101442', pic:'http://lain.bgm.tv/pic/cover/l/8b/6b/101442_oJJsL.jpg', finished:true },
			{ title:'魔法禁书目录第一季/第二季', intro:'', link:'http://bangumi.bilibili.com/anime/963', pic:'http://lain.bgm.tv/pic/cover/l/76/6d/1014_nqAH8.jpg', finished:true },
			{ title:'某科学的超电磁炮', intro:'', link:'http://bangumi.bilibili.com/anime/425', pic:'http://lain.bgm.tv/pic/cover/l/36/e7/2585_bXs9U.jpg', finished:true },
			{ title:'某科学的超电磁炮S', intro:'', link:'http://bangumi.bilibili.com/anime/427', pic:'http://lain.bgm.tv/pic/cover/l/99/8c/51928_6lEYy.jpg', finished:true },
			{ title:'龙与虎', intro:'', link:'http://bangumi.bilibili.com/anime/1672', pic:'http://lain.bgm.tv/pic/cover/l/a4/30/909_e5zhk.jpg', finished:true },
			{ title:'灼眼的夏娜', intro:'', link:'http://bangumi.bilibili.com/anime/1600', pic:'http://lain.bgm.tv/pic/cover/l/c4/10/490_kuz6S.jpg', finished:true },
			{ title:'天降之物', intro:'', link:'http://bangumi.bilibili.com/anime/971', pic:'http://lain.bgm.tv/pic/cover/l/75/e3/2617_7c8Cr.jpg', finished:true },
			{ title:'约会大作战', intro:'', link:'http://bangumi.tv/subject/49131', pic:'http://lain.bgm.tv/pic/cover/l/99/08/49131_CIPjC.jpg', finished:true },
			{ title:'魔法科高校的劣等生', intro:'', link:'http://bangumi.tv/subject/84872', pic:'http://lain.bgm.tv/pic/cover/l/66/95/84872_22Kz1.jpg', finished:true },
			{ title:'元气囝仔', intro:'', link:'http://www.iqiyi.com/a_19rrgif715.html', pic:'http://lain.bgm.tv/pic/cover/l/95/70/83868_u7Y2P.jpg', finished:true },
			{ title:'一拳超人', intro:'', link:'http://list.youku.com/show/id_z0b39c5b6569311e5b2ad.html', pic:'http://lain.bgm.tv/pic/cover/l/8c/a2/127563_nl66u.jpg', finished:true }
    ]
  },
  methods: {
  }
})
