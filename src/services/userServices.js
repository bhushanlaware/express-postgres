const { Op } = require('sequelize');
const User = require("../db/models").User;

const getUsersCreatedIn = async (startTime, endTime) => {
    const users = await File.findAll({
        where: {
            createdAt: {
                [Op.and]: { [Op.gte]: startTime, [Op.lte]: endTime }
            }
        },
    });
    return users;
};
const createUser = async (user) => {
    const users = await User.create(user);
    return users;
};
const updateUser = async (user, id) => {
    const users = await User.update(user, { where: { id } });
    return users;
};
const deleteByUsername = async (username) => {
    const users = await User.destroy({ where: { username } });
    return users;
};
const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};
const getUserByUsername = async (username) => {
    const users = await User.findOne({ username });
    return users;
};
module.exports = {
    getUsersCreatedIn,
    deleteByUsername,
    createUser,
    updateUser,
    getAllUsers,
    getUserByUsername,
}