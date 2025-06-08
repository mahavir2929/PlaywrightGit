// utils/dataGenerator.js
//  Removes the "0." at the start and keeps only 6 characters from the random part.
//"0.lz3khdq".slice(2, 8) // "lz3khd"
function randomEmail() {// 
    return `user_${Math.random().toString(36).slice(2, 8)}@test.com`;
  }
  
  function randomPassword() {
    return `P@ss${Math.random().toString(36)}`;
  }
  
  function randomName() {
    return `User${Math.floor(Math.random() * 1000)}`;
  }
  
  function randomInterests() {
    const interests = [
      'DevOps', 'Machine Learning', 'Testing', 'Web Dev', 'Selenium',
      'Data Structures', 'WDIO', 'Cypress Testing', 'testing',
      'lakshmi', 'Bhuvesh Test', 'IBM'
    ];
    return interests.sort(() => 0.5 - Math.random()).slice(0, 2);
    //return interests.sort()
  }
  
  function randomGender() {
    return Math.random() > 0.5 ? 'Male' : 'Female';
  }
  
  function  randomStateIndex(totalOptions) {
    return Math.floor(Math.random() * totalOptions);
  }
  
  module.exports = {
    randomEmail,
    randomPassword,
    randomName,
    randomInterests,
    randomGender,
    randomStateIndex
  };
  