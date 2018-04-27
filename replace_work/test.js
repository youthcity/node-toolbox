const path = require('path');
const qiniu = require("qiniu");
const shortid = require('shortid');

qiniu.conf.ACCESS_KEY = '';
qiniu.conf.SECRET_KEY = '';

const get_rand_name = (type) => {
  const filename = shortid.generate();
  return type ? `${filename}.${type}` : filename;
};

//构建上传策略函数
function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy({
    scope: bucket,
    saveKey: key,
    expires: 600, // 600 秒
  });
  return putPolicy.uploadToken();
}

//要上传的空间
// const bucket = 'youthcity';
//上传到七牛后保存的文件名
// const key = get_rand_name('bcmc');

// const token = uptoken(bucket, key);

//构造上传函数
function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log(ret.hash, ret.key, ret.persistentId);       
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}

// 服务器端直传
const config = new qiniu.conf.Config();

config.zone = qiniu.zone.Zone_z2;
// 是否使用https域名
// config.useHttpsDomain = true;
// 上传是否使用cdn加速
config.useCdnDomain = true;

const localFile = path.join(__dirname, './bcmc_dist/', '1c8bd67b-39e0-40ac-8651-e404fdf94141.bcmc');
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();

const bucket = 'youthcity';
const prefix = 'kitten/'
const key = prefix + get_rand_name('bcmc');
const token = uptoken(bucket, key);
const bucket_url = 'http://opbc041f6.bkt.clouddn.com';
console.log(localFile);

formUploader.putFile(token, key, localFile, putExtra, function(respErr,
  respBody, respInfo) {
  if (respErr) {
    throw respErr;
  }

  if (respInfo.statusCode == 200) {
    console.log(respBody);
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
});

// 数据流上传（表单方式）
