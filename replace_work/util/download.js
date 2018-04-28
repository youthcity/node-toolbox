const http = require('http');
const https = require('https');
const fs = require('fs');
const url = require('url');
const path = require('path');

let client = http;

const check_directory = (dir_path) => {
  if (!fs.existsSync(dir_path)) {
    fs.mkdirSync(dir_path);
  }
};

const download = async (target_url, dir_path, bcmc_dir_path, cb) => {
  const filename = url.parse(target_url).pathname.split('/').pop();
  const work_name = filename.split('.')[0];
  const dist = path.join(dir_path, filename);
  const bcmc_dist = path.join(bcmc_dir_path, `${work_name}.bcmc`);

  // check directory whether exists
  // if not exists, then create new directory
  check_directory(dir_path);
  check_directory(bcmc_dir_path);

  const file = fs.createWriteStream(dist);
  
  if (target_url.indexOf('https') === 0) {
    client = https;
  }

  const request = client.get(target_url, function(response) {
    response.pipe(file);
    file.on('finish', (a, b,c) => {
      console.log(`下载成功：`, target_url);
    });

    let body = '';
    response.on('data', (chunk) => {
      body += chunk;
    });
    response.on('end', () => {
      const bcm_obj = JSON.parse(body);
      const bcmc_obj = cb(bcm_obj);
      console.log(bcmc_obj);
      fs.writeFileSync(bcmc_dist, JSON.stringify(bcmc_obj));
    });


  })
  .on('error', (err) => {
    fs.unlink(dist);
    console.log('-----------------------');
    console.log('文件下载失败，已删除失败文件');
    console.log(target_url);
    console.log('-----------------------');
  });
};

module.exports = download;