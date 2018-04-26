const Sequelize = require('sequelize');
const path = require('path');
const _ = require('lodash');
const download = require('download');

const config = require('./config');
const work_model = require('./work_model');

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

const handle_work = async (work) => {
  const { work_url } = work;
  let work_urls = [];

  if (_.isEmpty(work_url)) {
    console.log('Error       ', work_id);
  }

  if (_.includes(work_url, '[')) {
    work_urls = JSON.parse(work_url);
  } else {
    work_urls = [ work_url ];
  }

  await Promise.all(work_urls.map(async (x) => {
    console.log(x);
    x => download(x, 'dist');
  }))
    .then(( ) => {
      console.log('-=============');
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
