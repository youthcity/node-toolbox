# NodeJS 读写 Excel

## Excel概念

>workbook 对象，指的是整份 Excel 文档。我们在使用 js-xlsx 读取 Excel 文档之后就会获得 workbook 对象。
>
>worksheet 对象，指的是 Excel 文档中的表。我们知道一份 Excel 文档中可以包含很多张表，而每张表对应的就是 worksheet 对象。
>
>cell 对象，指的就是 worksheet 中的单元格，一个单元格就是一个 cell 对象。

## NodeJS 读 Excel

### 安装

```bash
npm install xlsx // install xlsx
```

## DATA 转 Excel

```javascript
const XLSX = require('xlsx');
data = [ { "agentNo":"324234", "subName":"30, Jul 2013 09:24 AM" }, { "agentNo":"444443", "subName":"30, Jul 2013 09:24 AM" } ];

/* create workbook & set props*/
   const wb = { SheetNames: [], Sheets: {} };
   wb.Props = {
      Title: "Stats from app",
      Author: "John Doe"
   };

/*create sheet data & add to workbook*/
var ws = XLSX.utils.json_to_sheet(data);
var ws_name = "DataSheet 1";
XLSX.utils.book_append_sheet(wb, ws, ws_name);

/* create file 'in memory' */
var wbout = new Buffer(XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' }));

/* send it by web request - where app is express()*/
app.get('/api/jobs/download', (req, res) => {
   var filename = "myDataFile.xlsx";
   res.setHeader('Content-Disposition', 'attachment; filename=' + filename);
   res.type('application/octet-stream');
   res.send(wbout);
}
```

## node-xlsx 处理 excel

## 参考资料

- [Node读写Excel文件探究实践](https://aotu.io/notes/2016/04/07/node-excel/index.html)
- [js-xlsx](https://github.com/SheetJS/js-xlsx)
- [From json to sheet](https://github.com/SheetJS/js-xlsx/issues/610)
- [Node XLSX](https://github.com/mgcrea/node-xlsx)