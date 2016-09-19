# Work5Leancloud
With TabBarIOS/DrawerLayoutAndroid and Leancloud for work.

## 目标
1. 会用leancloud来存储程序数据和管理用户
2. 会使用leancloud数据存储服务作为React Native程序的后端

## 参考资料
1. LeanCloud数据存储Javascript[文档](https://leancloud.cn/docs/leanstorage_guide-js.html)
2. 程序菜单：
[TabBarIOS](https://facebook.github.io/react-native/docs/tabbarios.html) / [DrawerLayoutAndroid](https://facebook.github.io/react-native/docs/drawerlayoutandroid.html)
3. [Toast](https://github.com/magicismight/react-native-root-toast)

## 实践项目
使用leancloud数据存储服务改进[豆瓣程序](https://github.com/yaodianmi/DoubanBookRnRedux)
### 要求：
- 使用TabBarIOS或DrawerLayoutAndroid创建菜单，菜单有三个项目：搜索、收藏夹、关于
- 关于页面显示程序介绍，比如程序作者
- 收藏夹页面显示用户收藏的豆瓣图书的列表
- 图书详情页面有收藏按钮，点击收藏即可将当前图书加入收藏列表，并用Toast方式显示收藏成功
- 加入收藏和查看收藏夹都需要用户先登录，未登录用户进行收藏相关操作时先跳转到登录界面，用户登录后再进行之前的操作
- 使用leancloud数据存储内置的用户功能管理用户登录
- 使用leancloud来存储用户的收藏夹数据
