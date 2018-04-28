const path = require('path');
const qiniu = require("qiniu");
const shortid = require('shortid');
const intoStream = require('into-stream');

qiniu.conf.ACCESS_KEY = '';
qiniu.conf.SECRET_KEY = '';

const get_rand_name = (type) => {
  const filename = shortid.generate();
  return type ? `${filename}.${type}` : filename;
};

const get_token = (bucket, key) => {
  const config = {
    scope: bucket,
    saveKey: key,
    expires: 600, // 600 秒
  };

  const put_policy = new qiniu.rs.PutPolicy(config);
  return put_policy.uploadToken();
};


// 服务器上传配置
const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z2;
config.useCdnDomain = true;

const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();

const stream_uploader = (token, key, readableStream) => {
  return new Promise((resolve, reject) => {
    formUploader.putStream(token, key, readableStream, putExtra, (res_error, res_body, res_info) => {
      if (res_error) {
        reject(res_error);
      }
    
      if (res_info.statusCode == 200) {
        reslove(res_body);
      } else {
        reject({
          code: res_info.statusCode,
          body: res_body,
        });
      }
    });
  });
}

module.exports = {
  get_token,
  stream_uploader,
};