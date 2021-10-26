const capitalizeAndFilter = (arr) => {
  const newArr = [];
  for(const item of arr) { if(!item.startsWith('f')) { newArr.push(item.charAt(0).toUpperCase() + item.slice(1));}}
   
  return newArr;}; 
  
module.exports = capitalizeAndFilter;








// arr.filter(item => item.startsWith(!'f' || !'F'));
//   return arr;
