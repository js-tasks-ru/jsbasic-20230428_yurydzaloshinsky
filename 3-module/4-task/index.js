function showSalary(users, age) {
  let appropriateUsers = users.filter(item => item.age <= age);
  let appropriateUsersArray = appropriateUsers.map(item => `${item.name}, ${item.balance}`);
  return appropriateUsersArray.join('\n')
}
