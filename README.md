# 错题本系统
# 需求介绍
## 1. 登录注册
能注册账号并登录
## 2. 添加错题
手动打字添加：
* 题目 
* 题目的例图（可选项）
* 选项
* 答案
* 自己的理解或思路
* 标签
## 3. 删除错题（已掌握的错题添加到“已掌握”，不会真正的删除）
点击每道题的已掌握按钮，可以添加到已掌握的错题列表中，利于回顾
## 4. 修改错题信息（标签等）
修改各种信息（上面的列表项）
## 5. 搜索错题（搜索框）
通过关键词搜索题目
## 6. 查看错题（分类筛选）
在查看错题菜单中，默认不显示错题，显示科目，点击不同科目可以展示所有该科目的错题。<br>
可以进一步通过标签筛选出想要的题。
## 7. 收藏错题
在每道题的右下角可以点击收藏按钮将题目收入收藏夹

# 数据库设计
## 用户表(User)
* id
* username
* password

## 错题表（wrong_list）
* id
* title         题目 
* picture       题目的例图（可选项）
* choose_item   选项
* answer        答案
* thinking      自己的理解或思路
* tag           标签



# ======================================

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

