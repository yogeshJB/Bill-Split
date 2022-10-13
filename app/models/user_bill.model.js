module.exports = (sequelize, Sequelize) => {
    const UsersBill = sequelize.define("users_bill", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          user_id: {
            type: Sequelize.INTEGER,
            model: 'User',
            key: 'id',
        },
        bill_id: {
            type: Sequelize.INTEGER,
            model: 'Bill',
            key: 'id',
        },
        split_amount: {
            type: Sequelize.FLOAT(8),
            default: false
        },
        paid: {
            type: Sequelize.BOOLEAN,
            default: false
        }
    });

    return UsersBill;
};
