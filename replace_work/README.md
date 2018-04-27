# REPALCE WORK

## 如何使用原生nodeJS下载文件

### 如何判断一个文件夹是否存在

```javascript
var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
```

### 参考资料

- [How to download a file with Node.js (without using third-party libraries)?](https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries)
- [Using Node.js to download files](https://www.hacksparrow.com/using-node-js-to-download-files.html)
