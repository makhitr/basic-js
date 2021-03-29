const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
let n = 0;
let ears = "^^";
for (let i=0; i < backyard.length; i++) {
  for (let value of backyard[i]) {
    if (value == ears) {
        n ++;
     }
  }
}
  return n;
};

  