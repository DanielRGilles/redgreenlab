const capitalizeAndFilter = (arr) => {
  const newArr = arr.filter(item => !item.startsWith('f'))
    .map(item => item.charAt(0).toUpperCase() + item.slice(1));
  return newArr;};  
module.exports = capitalizeAndFilter;









