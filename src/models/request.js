'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define("Request", {
    eventName: { type: DataTypes.STRING, allowNull: false },
    eventTime: { type: DataTypes.DATE, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    serviceUnit: { type: DataTypes.STRING, allowNull: false },
    picName: { type: DataTypes.STRING, allowNull: false },
    picPhone: { type: DataTypes.STRING, allowNull: false },
    zoomLink: { type: DataTypes.STRING },
    status: { type: DataTypes.ENUM("Waiting", "Approved", "On Going", "Expired"), defaultValue: "Waiting" },
    rejectionReason: { type: DataTypes.STRING }
  });

  return Request;
};
