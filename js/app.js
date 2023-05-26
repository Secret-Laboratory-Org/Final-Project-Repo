'use strict';

let userInputArray = [];
const hobbyArray = [];

function Hobby(name, indoorOutdoor, toolsMaterials, activeNonActive, structuredCreative, expense, aloneGroup, electronicsUsage, plannedSpontaneous, activityDuration) {
  this.name = name;
  this.indoorOutdoor = indoorOutdoor;
  this.toolsMaterials = toolsMaterials;
  this.activeNonActive = activeNonActive;
  this.structuredCreative = structuredCreative;
  this.expense = expense;
  this.aloneGroup = aloneGroup;
  this.electronicsUsage = electronicsUsage;
  this.plannedSpontaneous = plannedSpontaneous;
  this.activityDuration = activityDuration;
}

function readDataFile(filename) {
  fetch(filename)
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const hobbyArray = [];

      for (const line of lines) {
        const params = line.split(',');

        if (params.length === 10) {
          const name = params[0].trim();
          const indoorOutdoor = params[1].trim();
          const toolsMaterials = params[2].trim();
          const activeNonActive = params[3].trim();
          const structuredCreative = params[4].trim();
          const expense = params[5].trim();
          const aloneGroup = params[6].trim();
          const electronicsUsage = params[7].trim();
          const plannedSpontaneous = params[8].trim();
          const activityDuration = params[9].trim();

          const hobby = new Hobby(
            name,
            indoorOutdoor,
            toolsMaterials,
            activeNonActive,
            structuredCreative,
            expense,
            aloneGroup,
            electronicsUsage,
            plannedSpontaneous,
            activityDuration
          );

          hobbyArray.push(hobby);
        }
      }

      // Do something with the hobbyArray containing the created instances
      console.log(hobbyArray);
    })
    .catch(err => {
      console.error(`Error reading file: ${err}`);
    });
}

// Usage: Provide the filename or URL of the data file to read
readDataFile('data.txt');

let myForm = document.getElementById('hobbyForm'); // window to html

function UserInput(name, indoorOutdoor, toolsMaterials, activeNonActive, structuredCreative, expense, aloneGroup, electronicsUsage, plannedSpontaneous, activityDuration) {

  this.name = name;
  this.indoorOutdoor = indoorOutdoor;
  this.toolsMaterials = toolsMaterials;
  this.activeNonActive = activeNonActive;
  this.structuredCreative = structuredCreative;
  this.expense = expense;
  this.aloneGroup = aloneGroup;
  this.electronicsUsage = electronicsUsage;
  this.plannedSpontaneous = plannedSpontaneous;
  this.activityDuration = activityDuration;
}

function handleSubmit(event) {
  event.preventDefault();

  let name = 'Your Hobby';
  let indoorOutdoor = event.target.indoorOutdoor.value;
  let toolsMaterials = event.target.toolsMaterials.value;
  let activeNonActive = event.target.activeNonActive.value;
  let structuredCreative = event.target.structuredCreative.value;
  let expense = event.target.expense.value;
  let aloneGroup = event.target.aloneGroup.value;
  let electronicsUsage = event.target.electronicsUsage.value;
  let plannedSpontaneous = event.target.plannedSpontaneous.value;
  let shortLongTerm = event.target.shortLongTerm.value;

  let userHobby = new UserInput(name, indoorOutdoor, toolsMaterials, activeNonActive, structuredCreative, expense, aloneGroup, electronicsUsage, plannedSpontaneous, shortLongTerm);

  hobbyComparision(userHobby);

  userInputArray.push(userHobby);

  myForm.reset();

  window.location.href = 'results.html';

}

myForm.addEventListener('submit', handleSubmit);

let hobbyMatches = [];

function hobbyComparision(userHobby) {

  // Iterate over the hobby objects
  for (let i = 0; i < hobbyArray.length; i++) {
    const hobbyObject = hobbyArray[i];

    let matchingKeysCount = 0;

    // Compare key-value pairs with userInputArray
    const hobbyKeys = Object.keys(hobbyObject);


    for (let key of hobbyKeys) {
      if (userHobby[key] === hobbyObject[key]) {
        matchingKeysCount++;
      }
    }

    if (matchingKeysCount >= 6) {
      hobbyMatches.push(hobbyObject.name);
    }
    console.log('hobbyMatches', hobbyMatches);

    let stringifedHobbys = JSON.stringify(hobbyMatches);
    console.log('stringifed objects ===>', stringifedHobbys);
    localStorage.setItem('stringifedHobbys', stringifedHobbys);

  }
}

let stringifiedHobbyArray = JSON.stringify(hobbyArray);

// Save the stringified hobbyArray to localStorage
localStorage.setItem('hobbyArray', stringifiedHobbyArray);
