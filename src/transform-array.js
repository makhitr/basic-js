const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 

  if (Array.isArray(arr) != 'true') {
    throw new Error;
  } else {
    // if (arr.length == 0) return result;    
    let result = [];
   
     for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--double-next') {
          result.push(arr[i+1]);
      } else if (arr[i] == '--double-prev') {
          result.push(arr[i-1]);
      } else if (arr[i] == '--discard-next') {
         continue 
      } else if (arr[i] == '--discard-prev') {
          result.pop  
      } else {
          result.push(arr[i]);
      }
     }
        return(result);
}

};
