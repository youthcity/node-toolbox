const logger = require('./logger');
const download = require('./download');
const uploader = require('./uploader');

module.exports = {
  log: logger,
  download: download,
  uploader: uploader,
};