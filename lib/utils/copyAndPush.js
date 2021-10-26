const copyAndPush = (arr, newIndex) => {
  const newArray = [...arr];
  newArray.push(newIndex);
  return newArray;
};
    
module.exports = copyAndPush;
