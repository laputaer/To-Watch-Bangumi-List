# To-Watch-Bangumi-List Page

> 使用 [Materialize](https://github.com/Dogfalo/materialize) + [Vue.js](https://vuejs.org/) (1.x, 用作数据绑定) 写的静态网页，用于展示个人的补番列表。

## 说明

为了方便数据添加，我用 Python 写了一个 Vue 代码的生成器

## 使用方法

#### 数据

编写一个 `mydata.txt` 作为列表数据源，用空格将每行数据内容分割开，如：

```
绯弹的亚利亚 钉宫大法好 http://bangumi.bilibili.com/anime/2993 封面地址
```

**其余可修改的内容请直接查看源码。**

#### 生成

使用生成器前，请确保你已经安装 Python 且添加到系统环境变量中。

Windows: 运行 `mk_my_data.bat` 即可以当前目录下的 `mydata.txt` 生成最终数据

Bash: 运行 `mk_my_data.sh`

如果 Python 未添加到系统环境变量或数据源不是 `./mydata.txt` 请手动运行：
`%python_path%/python mkdata.py %src_data_path%`

## 效果预览

直接浏览 [To-Watch-Bangumi-List 的 Github Pages](https://fython.github.io/To-Watch-Bangumi-List) 即可查看效果

![](./images/readme_preview.png)


## License 开源协议

本项目使用 [MIT License](./LICENSE) 作为开源协议。
