const userServices = require('../services/userServices')
const requestStatus = require('../utils/httpStatusCodes');
const getUsersCreatedIn = async (req, res, next) => {
  try {
    const files = await userServices
      .getUsersCreatedIn(req.query.start_tis, req.query.end_tis)
    res.send(files);
  }
  catch (error) {
    console.error(error);
    res.status(requestStatus.UnprocessableEntity).send(error);
  }
}
const createUser = async (req, res, next) => {
  try {
    const result = await userServices.createUser(req.body.user);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(requestStatus.UnprocessableEntity).send(error);
  }
}
const updateUser = async (req, res, next) => {
  try {
    const result = await userServices.updateUser(req.body.user, req.params.id);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(requestStatus.UnprocessableEntity).send(error);
  }
}
const deleteByUsername = async (req, res, next) => {
  try {
    const result = await userServices.deleteByUsername(req.params.username);
    res.send({result});
  } catch (error) {
    console.error(error);
    res.status(requestStatus.UnprocessableEntity).send(error);
  }
}
const getAllUsers = async (req, res, next) => {
  try {
    const result = await userServices.getAllUsers(req.query.path);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(requestStatus.UnprocessableEntity).send(error);
  }
}
const getUserByUsername = async (req, res, next) => {
  try {
    const result = await userServices.getUserByUsername(req.params.username);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(requestStatus.UnprocessableEntity).send(error);
  }
}
module.exports = {
  getUsersCreatedIn,
  createUser,
  updateUser,
  getAllUsers,
  getUserByUsername,
  deleteByUsername,
}