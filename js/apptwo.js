'use strict';
let hobbyArray = [];
// Define the available hobbies
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

  hobbyArray.push(this);
}

// Create hobbies using the constructor
const tufting = new Hobby("Tufting", "indoor", "required", "active", "creative", "high-expense", "alone", "low-usage", "planned", "long-term");
const beatboxing = new Hobby("Beatboxing", "indoor", "not-required", "active", "creative", "low-expense", "alone", "low-usage", "spontaneous", "short-term");
const taiChi = new Hobby("Tai Chi", "outdoor", "not-required", "active", "structured", "low-expense", "alone", "low-usage", "spontaneous", "short-term");
const sandboxArt = new Hobby("Sandbox Art", "indoor", "required", "non-active", "creative", "high-expense", "alone", "low-usage", "planned", "long-term");
const metalDetecting = new Hobby("Metal Detecting", "outdoor", "required", "active", "structured", "high-expense", "alone", "high-usage", "spontaneous", "long-term");
const muayThai = new Hobby("Muay Thai", "indoor", "not-required", "active", "structured", "low-expense", "group", "low-usage", "planned", "long-term");
const flyingDrones = new Hobby("Flying Drones", "outdoor", "required", "non-active", "structured", "high-expense", "alone", "high-usage", "planned", "short-term");
const spokenPoetry = new Hobby("Spoken Poetry", "indoor", "not-required", "non-active", "creative", "low-expense", "alone", "low-usage", "spontaneous", "short-term");
const legoBuilding = new Hobby("Lego Building", "indoor", "required", "non-active", "creative", "high-expense", "alone", "low-usage", "spontaneous", "long-term");
const leafPressing = new Hobby("Leaf Pressing", "outdoor", "required", "non-active", "creative", "low-expense", "alone", "low-usage", "spontaneous", "short-term");
const pickling = new Hobby("Pickling", "indoor", "required", "non-active", "structured", "low-expense", "alone", "low-usage", "planned", "short-term");
const juggling = new Hobby("Juggling", "outdoors", "required", "active", "structured", "low-expense", "alone", "low-usage", "spontaneous", "short-term");
const dungeonsAndDragons = new Hobby("D&D", "indoors", "required", "non-active", "creative", "low-expense", "group", "low-usage", "planned", "long-term");
const sculptureSoap = new Hobby("Sculpture (soap)", "indoor", "required", "non-active", "creative", "high-expense", "alone", "low-usage", "planned", "long-term");
const quilting = new Hobby("Quilting", "indoor", "required", "non-active", "creative", "high-expense", "alone", "low-usage", "planned", "long-term");
const canoeing = new Hobby("Canoeing", "outdoor", "required", "active", "structured", "high-expense", "alone", "low-usage", "planned", "long-term");
const volunteering = new Hobby("Volunteering", "indoor", "not-required", "non-active", "structured", "low-expense", "alone", "low-usage", "planned", "long-term");
const archery = new Hobby("Archery", "outdoor", "required", "active", "structured", "high-expense", "alone", "low-usage", "planned", "short-term");
const reading = new Hobby("Reading", "indoor", "not-required", "non-active", "structured", "low-expense", "alone", "low-usage", "spontaneous", "long-term");
const jewelryMaking = new Hobby("Jewelry Making", "indoor", "required", "non-active", "creative", "high-expense", "alone", "low-usage", "planned", "long-term");
const woodworking = new Hobby("Woodworking", "indoor", "required", "active", "creative", "high-expense", "alone", "low-usage", "planned", "long-term");
const gardening = new Hobby("Gardening", "outdoor", "required", "active", "structured", "high-expense", "alone", "low-usage", "planned", "long-term");
const videoGames = new Hobby("Video Games", "indoor", "required", "non-active", "structured", "high-expense", "alone", "high-usage", "spontaneous", "short-term");
const fishing = new Hobby("Fishing", "outdoor", "required", "active", "structured", "high-expense", "alone", "low-usage", "planned", "long-term");
const hiking = new Hobby("Hiking", "outdoor", "not-required", "active", "structured", "low-expense", "alone", "low-usage", "spontaneous", "long-term");
const yogaStretching = new Hobby("Yoga - Stretching", "indoor", "not-required", "active", "structured", "low-expense", "alone", "low-usage", "spontaneous", "long-term");
const watchingTV = new Hobby("Watching TV", "indoor", "required", "non-active", "structured", "high-expense", "alone", "high-usage", "spontaneous", "short-term");
const playingCards = new Hobby("Playing Cards", "indoor", "required", "non-active", "structured", "low-expense", "group", "low-usage", "spontaneous", "short-term");
const boardGames = new Hobby("Board Games", "indoor", "required", "non-active", "structured", "low-expense", "group", "low-usage", "spontaneous", "short-term");
const writingCalligraphy = new Hobby("Writing/Calligraphy", "indoor", "required", "non-active", "creative", "low-expense", "alone", "low-usage", "spontaneous", "short-term");
const running = new Hobby("Running", "outdoor", "not-required", "active", "structured", "low-expense", "alone", "low-usage", "planned", "short-term");
const teamSports = new Hobby("Team Sports", "outdoor", "required", "active", "structured", "low-expense", "group", "low-usage", "planned", "long-term");
const dancing = new Hobby("Dancing", "indoor", "not-required", "active", "creative", "low-expense", "alone", "low-usage", "spontaneous", "short-term");
const painting = new Hobby("Painting", "indoor", "required", "non-active", "creative", "high-expense", "alone", "low-usage", "planned", "long-term");
const cooking = new Hobby("Cooking", "indoor", "required", "non-active", "creative", "low-expense", "alone", "low-usage", "planned", "short-term");
const bicycling = new Hobby("Bicycling", "outdoor", "required", "active", "structured", "high-expense", "alone", "low-usage", "planned", "long-term");
const podcasts = new Hobby("Podcasts", "indoor", "required", "non-active", "structured", "low-expense", "alone", "high-usage", "spontaneous", "short-term");
const listeningToMusic = new Hobby("Listening to Music", "indoor", "required", "non-active", "structured", "low-expense", "alone", "high-usage", "spontaneous", "short-term");
const playingInstrument = new Hobby("Playing an instrument", "indoor", "required", "active", "creative", "high-expense", "alone", "low-usage", "spontaneous", "long-term");


let indoorOutdoorChoice = 'indoor';
let toolsMaterialsChoice = 'required';

let firstFilter = hobbyArray.filter(hobby => hobby.indoorOutdoor === indoorOutdoorChoice).filter(hobby => hobby.toolsMaterials === toolsMaterialsChoice);
console.log(firstFilter);

