
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let arr = [];
  array.sort((a,b) => a.balance - b.balance)
  const maxBalance = array[array.length - 1].balance
  for (let person of array) {
    if (person.balance === maxBalance) {
      arr.push(person)
    }
  }
  return arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
