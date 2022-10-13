module.exports = (sequelize, Sequelize) => {
    const NetTable = sequelize.define("net_table", {
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
        net: {
            type: Sequelize.FLOAT(8)
        },
        pay_to_id: {
            type: Sequelize.INTEGER,
            model: 'User',
            key: 'id',
        },
      
        bill_id: {
            type: Sequelize.INTEGER,
            model: 'Bill',
            key: 'id',
        },
        paid: {
            type: Sequelize.BOOLEAN,
            default: false
        }
    });

    return NetTable;
};

