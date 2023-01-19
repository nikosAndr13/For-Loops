
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]


export function getClientsWithWrongBalance(array) {
  let arr = [];
  for (let person of array) {
    let totalDeps = 0;
    let totalWithDraws = 0;
    if (person.deposits !== undefined) {
      for (let i = 0; i < person.deposits.length; i++) {
        totalDeps += person.deposits[i]
      }
    }
    if (person.withdrawals !== undefined) {
      for (let j = 0; j < person.withdrawals.length; j++) {
        totalWithDraws += person.withdrawals[j]
      }
    }
    ((totalDeps - totalWithDraws) !== person.balance) ? arr.push(person) : undefined
  }
  return arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
