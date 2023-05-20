function getMinMax(str) {
  let arr = str.split(' ');
  let numbers = arr.filter(item => isFinite(item));
  let arrNum = numbers.sort((a, b) =>  a - b);
  return result = {
    min: Number(arrNum[0]),
    max: Number(arrNum[arrNum.length - 1])
  };
}
