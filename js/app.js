'use strict';


// let hobbyArray = [];
let imageOneArray = [];
// let imageTwoArray = [];


// let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
// let imgTwo = document.getElementById('img-two');


// function Hobby(name, setting, tools, activity, creativty, expense, who, electronics, plan, term) {
//   this.name = name;
//   this.setting = setting;
//   this.tools = tools;
//   this.activity = activity;
//   this.creativty = creativty;
//   this.expense = expense;
//   this.who = who;
//   this.electronics = electronics;
//   this.plan = plan;
//   this.term = term;
// }

function ImageQueOne(name, imageExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${imageExtension}`;
}

function renderImages() {
  imgOne.src = imageOneArray[0].image;

}

// function ImageQueTwo(name, imageExtension = 'jpg') {
//   this.name = name;
//   this.image = `img/${name}.${imageExtension}`;
// }

let indoor = new ImageQueOne('indoor');
let notRequired = new ImageQueOne('not-required');
let active = new ImageQueOne('active');
let structured = new ImageQueOne('structured');
let lowExpense = new ImageQueOne('low-expense');
let alone = new ImageQueOne('alone');
let lowUsage = new ImageQueOne('low-usage');
let planned = new ImageQueOne('planned');
let shortTerm = new ImageQueOne('short-term');

imageOneArray.push(indoor, notRequired, active, structured, lowExpense, alone, lowUsage, planned, shortTerm);


renderImages();
