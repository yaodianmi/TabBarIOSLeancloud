'use strict';

import av from '../../node_modules/leancloud-storage/dist/node/av';


// 初始化
const appId = '7bQ0yQahIWdwXMimQIwdDhJC-gzGzoHsz';
const appKey = 'WtaO7hx9Abj51SlO2MK4y9B7';
const region = 'cn';
console.log(av);
//const av.init({ appId, appKey, region });

export default av;

/*// 基本存储
const TestClass = av.Object.extend('TestClass');
const testObj = new TestClass();
testObj.set({
  name: 'hjiang',
  phone: '123123123',
});

testObj.save().then(() => {
  console.log('success');
}).catch((err) => {
  console.log('failed');
  console.log(err);
});

// 存储文件
const base64 = 'd29ya2luZyBhdCBhdm9zY2xvdWQgaXMgZ3JlYXQh';
const file = new av.File('myfile.txt', { base64 });
file.metaData('format', 'txt file');
file.save().then(() => {
  console.log(file.get('url'));
}).catch((error) => {
  console.log(error);
});

// 查找文件
const query = new av.Query(TestClass);
query.equalTo('name', 'hjiang');
query.find().then((list) => {
  console.log(list);
});

// 用户登录
AV.User.login('ttt', '123456')
.then((res) => console.log(res))
.catch(err => console.log(err));*/
