'use strict';

let resultArea = document.getElementById('results');
let hobbyForm = document.getElementById('hobbyForm');


function AppState() {
  this.allHobbies = [];
}

AppState.prototype.loadItems = function () {
  let hobbyJSON = localStorage.getItem('stringifedHobbys');
  if (hobbyJSON) {
    this.allHobbies = JSON.parse(hobbyJSON);
    this.displayHobbies();
  } else {
    this.instantiateProducts();
  }
};

AppState.prototype.displayHobbies = function () {
  resultArea.innerHTML = '';

  if (this.allHobbies.length > 0) {
    let hobbiesList = document.createElement('ul');
    hobbiesList.classList.add('hobby-list');

    this.allHobbies.forEach(function (hobby) {
      let hobbyItem = document.createElement('li');
      hobbyItem.textContent = hobby;
      hobbiesList.appendChild(hobbyItem);
    });

    resultArea.appendChild(hobbiesList);
  } else {
    resultArea.textContent = 'No hobbies found.';
  }
};

let appState = new AppState();
appState.loadItems();

// hobbyForm.addEventListener('submit', function (event) {
//   event.preventDefault();
//   // Move to the results page
//   window.location.href = 'results.html';
// });
