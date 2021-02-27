const Subscription = require("../db/models").Subscription;
const Plan = require("../db/models").Plan;
const { addDays, differnceInDays } = require('../libs/common');


const createSubscription = async (subscription) => {
    const { planId, startDate } = subscription;
    const plan = await Plan.findOne({ where: { planId: planId } });
    const sub = await Subscription.create({
        ...subscription,
        validTill: addDays(plan.validDays, startDate),
        amount: -(plan.amount),
    }, { raw: true });
    return sub && sub.id ?
        { status: 'SUCCESS', amount: sub.amount } :
        { status: 'FAILIURE', amount: sub.amount };
};
const getSubscriptions = async (username, startDate = false) => {
    const whereCondition = startDate ? { username, startDate } : { username };
    const subs = await Subscription.findAll({ where: whereCondition, raw: true, nest: true });
    return startDate ?
        subs.map(x => (
            {
                planId: x.planId,
                daysLeft: differnceInDays(x.startDate, x.validTill),
            }
        )) :
        subs;
};
module.exports = {
    createSubscription,
    getSubscriptions,
}