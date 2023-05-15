function checkSpam(str) {
//сделал два решения. так как был список слов попробывал сделать его массивом
//на MDN нашёл метод some()
//callback функцию:
//function hasSpam(spamWord) {
// return str.toLowerCase().includes(spamWord);
//}
//сделал стрелочной
const spam = ['1xbet', 'xxx'];
  return spam.some(spamWord => str.toLowerCase().includes(spamWord))
}


//  if (str.toLowerCase().includes('1xbet') || str.toLowerCase().includes('xxx')) {
//    return true;
//  } else {
//    return false;
//  }
//}
