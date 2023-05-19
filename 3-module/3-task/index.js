function camelize(str) {
  let newArr = str.split('-');
  let camelizedArr = newArr.map((item, index) => index > 0 ? item[0].toUpperCase() + item.slice(1) : item);
  return camelizedArr.join('');
}
