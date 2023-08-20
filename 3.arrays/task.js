function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
      }
    
      return arr1.every((element, index) => element === arr2[index]);
    }
    
    module.exports = {
      compareArrays
}

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
  
    if (filteredUsers.length === 0) {
      return 0; // Нет пользователей заданного пола, возвращаем 0
    }
    
    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    const averageAge = totalAge / filteredUsers.length;
    
    return averageAge;
  }
  
  module.exports = {
    getUsersNamesInAgeRange
}