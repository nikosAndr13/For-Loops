
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]

export function separateNamesWithAFromRest(array) {
  const hasA = [];
  const notA = [];

  for (let i = 0; i < array.length; i++) {
    let name = array[i].toLowerCase();
    let foundA = false;
    for (let j = 0; j < name.length; j++) {
      if (name[j] === 'a') {
        foundA = true;
        break;
      }
    }
    if (foundA) {
      hasA.push(array[i])
    } else {
      notA.push(array[i])
    }
  }
  return [hasA, notA];
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
