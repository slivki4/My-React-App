function lowerCaseAndSort(arrOfStr){
  return arrOfStr
  .map(str => str.toLowerCase())
  .sort((str, nextStr) => {
    if(str < nextStr) {
      return -1;
    } else if(str > nextStr) {
      return 1;
    }
    return 0;
  });
};

export default lowerCaseAndSort;