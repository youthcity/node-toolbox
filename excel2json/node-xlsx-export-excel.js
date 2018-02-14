const fs = require('fs');
const xlsx = require('node-xlsx');

const data = [
  ['username', 'phone'],
  ['小明', 123456],
  ['小王', 123456],
  ['小才', 123456],
  ['小浪', 123456],
  ['小吴', 123456],
];

const buffer = xlsx.build([{ name: 'mysheet', data: data }]);

fs.writeFile('mytest-using-node-xlsx.xlsx', buffer.toString(), 'utf8', (err) => {
  if (err) {
    console.log('存在问题');
  }
  console.log('生成成功');
});