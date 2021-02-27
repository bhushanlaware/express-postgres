const subscriptionServices = require('../services/subscriptionServices')
const requestStatus = require('../utils/httpStatusCodes');
const createSubscription = async (req, res, next) => {
  try {
    const result = await subscriptionServices.createSubscription(req.body.subcription);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(requestStatus.UnprocessableEntity).send(error);
  }
}
module.exports = {
  createSubscription
}