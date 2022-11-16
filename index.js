var addDays = require("date-fns/addDays");
function getDate(days) {
  let d = addDays(new Date("08-22-2020"), days);
  return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
}
console.log(getDate(1));
module.exports = getDate;
