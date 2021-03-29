const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
//  throw new CustomError('Not implemented');
  // remove line with error and write your code heren

let k = Math.log(2) / HALF_LIFE_PERIOD;
  if (
    typeof(sampleActivity) == 'string' &&
    +sampleActivity > 0 &&  +sampleActivity <= 15) { 

    let age = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / k);
    
   return age; 
    }
    else return false; 
};
