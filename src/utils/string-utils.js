const lowerCaseStr = str => str.toLowerCase();
const stortAlphabeticaly = (str, nextStr) => {
  if(str < nextStr) {
    return -1;
  } else if(str > nextStr) {
    return 1;
  }
  return 0;
};

function lowerCaseAndSort(arrOfStr){
  return arrOfStr
  .map(lowerCaseStr)
  .sort(stortAlphabeticaly);
};

export default lowerCaseAndSort;