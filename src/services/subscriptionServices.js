const { Op } = require('sequelize');
const Subscription = require("../db/models").Subscription;

const createSubscription = async (subscription) => {
    const sub = await Subscription.create(subscription);
    return sub;
};
module.exports = {
    createSubscription,
}