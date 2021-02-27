const { Op } = require('sequelize');
const Subscription = require("../db/models").Subscription;
const Plan = require("../db/models").Plan;
const addDays = require('../libs/common');


const createSubscription = async (subscription) => {
    const { planId, startDate, username } = subscription;
    const plan = await Plan.fineOne({ where: { planId: planId } });
    const sub = await Subscription.create({ 
        ...subscription,
         validTill: addDays(plan.validDays, startDate),
         });
    return sub;
};
module.exports = {
    createSubscription,
}