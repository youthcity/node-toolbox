const Sequelize = require('sequelize');
const path = require('path');
const _ = require('lodash');
const qiniu = require('qiniu');

const util = require('./util');
const config = require('./config');
const work_model = require('./work_model');

qiniu.conf.ACCESS_KEY = 'I35FAChy9k6QCpTJAXqjSXgw62Hwd-3JqNzBSHde';
qiniu.conf.SECRET_KEY = 'fYWCfrFBPYpTgYZpFKDJnlsAxvNP7uXJ_GY-jzrh';

const bucket = 'youthcity';

const DOWNLOAD_DIR = path.join(__dirname, 'download/');
const BCMC_DIR = path.join(__dirname, 'bcmc_dist/');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      idle: 30000
  },
  define: {
    timestamps: false
  }
});

const PAGE = 1;
const LIMIT = 15;

const Work = sequelize.import(path.join(__dirname, './work_model'));

const compiling_bcm = (bcm_obj) => {
  return bcm_obj;
};

const handle_work = async (work) => {
  const { work_url, id } = work;
  let work_urls = [];

  if (_.isEmpty(work_url)) {
    console.log('Error', work_id);
  }

  if (_.includes(work_url, '[')) {
    work_urls = JSON.parse(work_url);
  } else {
    work_urls = [ work_url ];
  }

  await Promise.all(work_urls.map(async (x) => {
    console.log(x);
    await util.download(x, DOWNLOAD_DIR, BCMC_DIR, compiling_bcm);
  }))
    .then(() => {
      util.log.success(`下载成功`, `作品ID: ${id},`);
    });
};


const main = async (page, limit) => {
  const works = await Work.findAll({
    offset: (page -1) * limit,
    limit: 2,
  });

  const work = works[0];
  await handle_work(work);
};

main(PAGE, LIMIT);
