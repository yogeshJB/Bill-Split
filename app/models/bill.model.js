module.exports = (sequelize, Sequelize) => {
    const Bill = sequelize.define("bill", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        amount: {
            type: Sequelize.FLOAT(8)
        },
        description: {
            type: Sequelize.STRING
        },
        paid_by_user_id: {
            type: Sequelize.INTEGER,
            model: 'User',
            key: 'id',
        }
    });

    return Bill;
};

