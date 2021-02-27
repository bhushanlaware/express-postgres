const addDays = (days, startDate) => (days || days === 0) &&
  new Date(new Date(startDate).getTime() + (days * 24 * 60 * 60 * 1000));
  
const differnceInDays = (startDate,endDate) => {
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");
  return diffDays;
}
module.exports = {
  addDays,
  differnceInDays
}
