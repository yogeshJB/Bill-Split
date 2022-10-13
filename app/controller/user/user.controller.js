const db = require("../../models");
const UsersModel = db.Users;
const Op = db.Sequelize.Op;


exports.getList = async(req, res, next) => {
    try {
        let usersList = await UsersModel.findAll({
            attributes: ['name', 'id']
        })
        res.json({
            status: true,
            result: usersList
        })
    } catch (error) {
        // throw new Error(error.message || error)
        console.log(error)
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving users."
        });
    }
}
const getUsers = async (req, res, next) => {
    try {
        const name = req.query && req.query.name ? req.query.name  : '';
        var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
        let usersList = await UsersModel.findAll({ where: condition })
        res.json({
            status: true,
            result: usersList
        })
    } catch (error) {
        // throw new Error(error.message || error)
        console.log(error)
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving users."
        });
    }
}
exports.getUsers = getUsers;

exports.create = async (req, res, next) => {
    try {
        const {name, email, mobileno} = req.body;

        if (!name || !email || !mobileno) {
            res.status(400).send({
              message: "Content can not be empty!"
            });
            return;
          }
        
          // Create a User
          const tutorial = {
            name,
            email,
            mobileno,
          };
        
          // Save Tutorial in the database
        let result = await  UsersModel.create(tutorial)
        res.json({
            status: true,
            result
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving users."
        });
    
    }
}
