const { Op } = require('sequelize');
const File = require("../db/models").File;

const getFilesCreatedIn = async (startTime, endTime) => {
    const files = await File.findAll({
        where: {
            createdAt: {
                [Op.and]: { [Op.gte]: startTime, [Op.lte]: endTime }
            }
        },
    });
    return files;
};
const getAllFiles = async (path) => {
    const files = await File.findAll({ where: { path } });
    return files;
};
const uploadFiles = async (files) => {
    const res = await File.bulkCreate(files);
    return res;
}
const renameFile = async (id, name) => {
    const res = await File.upadate({ name }, { where: { id } });
    return res;
}
const updateById = async (id, file) => {
    const res = await File.upadate({ ...file }, { where: { id } });
    return res;
}
const deleteFileById = async (id) => {
    const res = await File.destroy({ where: { id } });
    return res;
}
module.exports = {
    getFilesCreatedIn,
    getAllFiles,
    renameFile,
    uploadFiles,
    updateById,
    deleteFileById,
}