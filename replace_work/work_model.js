/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user_works', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    view_times: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    praise_times: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    config: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_share: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    preview: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    publish_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    types: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    spendtime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pass: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    lesson_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sharetime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    update_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    order_level: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    isallow_fork: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    teaching_lesson_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    fork_times: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    collection_times: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    comment_times: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_old: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    fork_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    current_show_preview: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    language_type: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    work_url: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: ''
    },
    bcmc_urls: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: ''
    },
    sub_config: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orientation: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    root_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tbl_user_works',
    timestamps: false,
  });
};
