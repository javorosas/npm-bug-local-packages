const moment = require('moment');
module.exports = () => {
  console.log(moment().add(1, 'month').format('ll'));
}