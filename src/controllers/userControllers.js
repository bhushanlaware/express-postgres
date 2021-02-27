const userServices = require('../services/userServices')
const getUsersCreatedIn = async (req, res, next) => {
  try {
    const files = await userServices.getUsersCreatedIn(req.query.start_tis, req.query.end_tis)
    res.send(files);
  }
  catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
}
const getAllUsers = async (req, res, next) => {
  try {
    const result = await userServices.getAllUsers(req.query.path);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }

}
module.exports = {
 getUsersCreatedIn,
 getAllUsers,
}