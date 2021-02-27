const fileServices = require('../services/fileServices')
const getFilesCreatedIn = async (req, res, next) => {
  try {
    const files = await fileServices.getFilesCreatedIn(req.query.start_tis, req.query.end_tis)
    res.send(files);
  }
  catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
}
const getAllFiles = async (req, res, next) => {
  try {
    const result = await fileServices.getAllFiles(req.query.path);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }

}
const uploadFiles = async (req, res, next) => {
  try {
    const result = await fileServices.uploadFiles(req.files && req.files.map(x => ({
      name: x.originalname,
      type: x.mimetype,
      path: req.query.path,
      fullPath: x.path.replace('public\\', ''),
      size: x.size,
    })));
    res.send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
}
const createFolder = async (req, res, next) => {
  try {
    const folder = req.body.folder;
    delete folder.id;
    const result = await fileServices.uploadFiles([folder]);
    res.send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
}
const renameFile = async (req, res, next) => {
  try {
    const result = await fileServices.renameFile(req.params.id, req.query.name);
    res.send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
}
const updateById = async (req, res, next) => {
  try {
    const result = await fileServices.updateById(req.params.id, req.body.file);
    res.send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
}
const deleteFileById = async (req, res, next) => {
  try {
    const result = await fileServices.deleteFileById(req.params.id);
    res.send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
}
module.exports = {
  getFilesCreatedIn,
  getAllFiles,
  renameFile,
  updateById,
  createFolder,
  uploadFiles,
  deleteFileById,
}