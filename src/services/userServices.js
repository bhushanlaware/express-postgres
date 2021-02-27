const { Op } = require('sequelize');
const User = require("../db/models").User;

const getUsersCreatedIn = async (startTime, endTime) => {
    const files = await File.findAll({
        where: {
            createdAt: {
                [Op.and]: { [Op.gte]: startTime, [Op.lte]: endTime }
            }
        },
    });
    return files;
};
const getAllUsers = async () => {
    const files = await User.findAll();
    return files;
};
module.exports = {
    getUsersCreatedIn,
    getAllUsers,
}