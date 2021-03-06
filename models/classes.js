'use strict';
module.exports = (sequelize, DataTypes) => {
  const classes = sequelize.define('classes', {
    className: DataTypes.STRING,
    lecturerId: DataTypes.INTEGER,
    studentNumber: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    description: DataTypes.STRING,
    room: DataTypes.STRING,
    moduleId: DataTypes.INTEGER,
    roles: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        post: "ONLY_LECTURER",
        comment: "*"
      }
    }
  }, {});
  classes.associate = function (models) {
    classes.belongsTo(models.modules, { foreignKey: "moduleId" })
    classes.belongsTo(models.users, { foreignKey: 'lecturerId', as: 'lecturer' })
    classes.hasMany(models.students_classes, { foreignKey: 'classId' })
    classes.hasMany(models.posts, { foreignKey: "classId" })
  };
  return classes;
};