function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (Number.isFinite(salaries[key]) === true) {
      sum += salaries[key];
    }
  }
    return sum;
}
