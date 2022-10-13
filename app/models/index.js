const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./users.modes")(sequelize, Sequelize);
db.Bill = require('./bill.model')(sequelize, Sequelize);
db.UserBill = require('./user_bill.model')(sequelize, Sequelize);
db.NetTable = require('./net.model')(sequelize, Sequelize);

module.exports = db;