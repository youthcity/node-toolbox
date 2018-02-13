const XLSX = require('xlsx');
const newwb = XLSX.utils.book_new();

const json_data = [{
  username: '小天', phone: 123456,
}, {
  username: '小王', phone: 123456,
}, {
  username: '小浪', phone: 123456,
}, {
  username: '小迪', phone: 123456,
}];

const header = {
  header:["username","phone"]
};

var js2ws = XLSX.utils.json_to_sheet(json_data, header);

XLSX.utils.book_append_sheet(newwb, js2ws, "JSON");

XLSX.writeFile(ws, 'json_2_excel_2.xlsx');