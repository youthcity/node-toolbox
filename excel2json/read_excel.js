const XLSX = require('xlsx');

const workbook = XLSX.readFile('./demo.xlsx');
const sheet_name = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheet_name];

const formatted_json = XLSX.utils.sheet_to_json(worksheet);

console.log(formatted_json);
// output
// [ { username: '小明', phone: '123456' },
//   { username: '小王', phone: '123456' },
//   { username: '小浪', phone: '123456' } ]