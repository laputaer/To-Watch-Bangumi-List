#!/usr/bin/env python3
# encoding: UTF8

import sys

ITEM_TEMPLATE = '{{ title:\'{title}\', intro:\'{intro}\', link:\'{link}\', pic:\'{pic}\' }}'

def convert(path):
    try:
        f = open(path, mode = 'r', encoding = 'UTF8')
    except FileNotFoundError:
        print('读取文件失败，文件可能不存在。\n')
        return None
    except UnicodeDecodeError:
        print('使用 Unicode 编码读取失败，尝试使用 gbk 编码\n')
        f = open(paht, mode = 'r', encoding = 'gbk')
    lines = f.readlines()

    template = open('./js/vue.index.js.sample', mode = 'r', encoding = 'UTF8').read()
    data = ''
    count = 0
    for line in lines:
        item = line.split(" ")
        if len(item) != 4:
            print('该行内容无效：' + line + '\n')
        else:
            data += '\t\t\t' + ITEM_TEMPLATE.format(title = item [0], intro = item [1], link = item [2], pic = item [3].rstrip('\n')) + ',\n'
            count += 1
            print('第' + str(count) + '项转换成功：' + item [0])
    data = data.strip().rstrip(',')
    return template.replace('{items}', data)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('To Watch Bangumi List 网页数据生成工具 0.1\n')
        print('运行参数示范：python {0} MyList.txt\n'.format(sys.argv[0]))
        print('数据格式为多行由空格分割的内容，例如：\"绯弹的亚利亚 入宅作 番剧地址 图片地址\"')
    elif len(sys.argv) > 2:
        print('请不要输入过多的参数。正确范例：python {0} MyList.txt\n'.format(sys.argv[0]))
    else:
        result = convert(sys.argv[1])
        if result != None:
            print('生成数据已经导出到 ./js/vue.index.js，打开 ./index.htm 即可查看效果。')
            fout = open('./js/vue.index.js', mode = 'w', encoding='UTF8')
            fout.write(result)
            fout.close()
