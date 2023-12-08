'use strict';

//^ Variablen Deklaration
let stage = Number(document.querySelector('.status-stage').textContent);
let traveller = Number(document.querySelector('.status-traveller').textContent);
let ration = Number(document.querySelector('.status-ration').textContent);
let gold = Number(document.querySelector('.status-gold').textContent);
let country = document.querySelector('.status-country').textContent;
let message = document.querySelector('.message').textContent;
let maxRations = traveller * 7;
let foragedYet = false;
let foundRations = 0;
let foundGold = 0;
let losses = 0;

//^ Message posten Funktion
const postMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//^ Etappe posten Funktion
const postStage = function (stage) {
  document.querySelector('.status-stage').textContent = stage;
};

//^ Gefährten posten Funktion
const postTraveller = function (traveller) {
  document.querySelector('.status-traveller').textContent = traveller;
};

//^ Rationen posten Funktion
const postRation = function (ration) {
  document.querySelector('.status-ration').textContent = ration;
};

//^ Gold posten Funktion
const postGold = function (gold) {
  document.querySelector('.status-gold').textContent = gold;
};

//^ Land posten Funktion
const postCountry = function (country) {
  document.querySelector('.status-country').textContent = country;
};

const btnMove = document.querySelector('.btn--move');
const btnForage = document.querySelector('.btn--forage');
const btnMaraud = document.querySelector('.btn--maraud');
const btnBuyFood = document.querySelector('.btn--buyfood');
const btnPreach = document.querySelector('.btn--preach');
const btnReplay = document.querySelector('.btn--replay');

//^ Test Klassen
class Country {
  constructor(
    countryName,
    countryDescription,
    maraudMessage,
    preachMessage,
    buyFoodMessage
  ) {
    this.countryName = countryName;
    this.countryDescription = countryDescription;
    this.forageMessage = forageMessage;
    this.maraudMessage = maraudMessage;
    this.preachMessage = preachMessage;
    this.buyFoodMessage = buyFoodMessage;

    this.forageMessage = function (foundRations) {
      return `Hier in ${this.countryName} findest du ${foundRations} Rationen.`;
    };
    this.maraudMessage = function (foundRations, foundGold, losses) {
      return `Deine Gefährten und du plündern und morden sich durch ${this.countryName}.Du findest ${foundGold} Gold und ${foundRations} Rationen. ${losses} deiner Gefährten sterben bei Scharmützeln.`;
    };
  }
}

const deutschland = new Country(
  'Deutschland',
  'Während deine Schar durch Deutschland zieht, kommt ihr an vielen Dörfern und Höfen vorbei. Das Land ist bewaldet und es gibt genug Tiere zu jagen.',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.countryName}.`,
  `Essen kaufen in ${this.countryName}.`
);
const ungarn = new Country(
  'Ungarn',
  'Ungarn Beschreibung',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.countryName}.`,
  `Essen kaufen in ${this.countryName}.`
);
const bulgarien = new Country(
  'Bulgarien',
  'Bulgarien Beschreibung',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.name}.`,
  `Essen kaufen in ${this.name}.`
);
const latKaiserreich = new Country(
  'Lat. Kaiserreich',
  'Lat. Kaiserreich Beschreibung',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.name}.`,
  `Essen kaufen in ${this.name}.`
);
const nikaia = new Country(
  'Nikaia',
  'Nikaia Beschreibung',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.name}.`,
  `Essen kaufen in ${this.name}.`
);
const seldschuken = new Country(
  'Seldschuken',
  'Seldschuken Beschreibung',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.name}.`,
  `Essen kaufen in ${this.name}.`
);
const kleinarmenien = new Country(
  'Kleinarmenien',
  'Kleinarmenien Beschreibung',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.name}.`,
  `Essen kaufen in ${this.name}.`
);
const antiochia = new Country(
  'Antiochia',
  'Antiochia Beschreibung',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.name}.`,
  `Essen kaufen in ${this.name}.`
);
const ajubidenreich = new Country(
  'Ajubidenreich',
  'Ajubidenreich Beschreibung',
  `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste.`,
  `Predigen in ${this.name}.`,
  `Essen kaufen in ${this.name}.`
);

//TODO Klasse City
// class City {
//   constructor(cityStage, cityName) {
//     this.cityStage = cityStage;
//     this.cityName = cityName;
//   }
// }
//TODO Objekte der Klasse City
// const wien = new City(3, 'Wien');
// const belgrad = new City(5, 'Belgrad');
// const nis = new City(7, 'Nis');
// const sofia = new City(8, 'Sofia');
// const adrianopel = new City(10, 'Adrianopel');
// const konstantinopel = new City(12, 'Konstantinopel');
// const tripolis = new City(17, 'Tripolis');

//^ Würfel Funktion (min - max, min-default = 1) - vollständig
let rollDice = function (min = 1, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

//^ Nahrungssuche Funktion - vollständig
const forage = function (min, max, country) {
  foundRations = rollDice(min, max) * traveller;
  message = country.forageMessage(foundRations);
  if (foundRations + ration > maxRations) {
    message += ` Leider können du und deine Gefährten nur ${maxRations} tragen. Der Rest wird zurückgelassen.`;
    postMessage(message);
    ration = maxRations;
    //console.log('Version 1: ' + ration);
    postRation(ration);
  } else {
    ration += foundRations;
    //console.log('Version 2: ' + ration);
    postRation(ration);
  }
  foragedYet = true;

  console.log(foragedYet);
  btnForage.classList.add('hidden');
  return foundRations;
};

//^ Marodieren Funktion
const maraud = function (
  minRation,
  maxRation,
  minGold,
  maxGold,
  minLoss,
  maxLoss,
  country
) {
  foundRations = rollDice(minRation, maxRation) * traveller;
  foundGold = rollDice(minGold, maxGold);
  losses = rollDice(minLoss, maxLoss);
  message = country.maraudMessage(foundRations, foundGold, losses);
  if (foundRations + ration > maxRations) {
    message += ` Leider können du und deine Gefährten nur ${maxRations} tragen. Der Rest wird zurückgelassen.`;
    postMessage(message);
    ration = maxRations;
    //console.log('Version 1: ' + ration);
    postRation(ration);
  } else {
    ration += foundRations;
    //console.log('Version 2: ' + ration);
    postRation(ration);
  }
  foragedYet = true;

  console.log(foragedYet);
  btnForage.classList.add('hidden');
  return foundRations;
};

//^ Reisen Funktion
btnMove.addEventListener('click', function () {
  // Stage erhöhen
  stage += 1;
  foragedYet = false;
  btnForage.classList.remove('hidden');
  //^ In der Stadt
  // console.log(cityStage); // Wird korrekt angezeigt.
  // console.log(cityStage.includes(stage)); //! Warum immer false?
  // if (cityStage.includes(stage)) {
  //   console.log(`Hallo ${cityName}!`);
  // }
  postStage(stage);
  // Ration verringern um Anzahl Reisender
  ration = ration - traveller;
  postRation(ration);
  if (ration <= 0) {
    postMessage('Dir ist das Essen ausgegangen.');
    btnMove.classList.add('hidden');
    btnForage.classList.add('hidden');
    btnMaraud.classList.add('hidden');
    btnBuyFood.classList.add('hidden');
    btnPreach.classList.add('hidden');
    btnReplay.classList.remove('hidden');
  }
  if (traveller <= 0) {
    postMessage('Du hast keine Reisenden mehr übrig.');
    btnMove.classList.add('hidden');
    btnForage.classList.add('hidden');
    btnMaraud.classList.add('hidden');
    btnBuyFood.classList.add('hidden');
    btnPreach.classList.add('hidden');
    btnReplay.classList.remove('hidden');
  }
  switch (true) {
    case stage >= 1 && stage < 4:
      //! Ich muss hier Wertebereiche definieren, also 1-3
      country = 'Deutschland';
      postMessage(deutschland.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    case stage >= 4 && stage < 7:
      country = 'Ungarn';
      postMessage(ungarn.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    case stage >= 7 && stage < 10:
      country = 'Bulgarien';
      postMessage(bulgarien.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    case stage >= 10 && stage < 13:
      country = 'Lat. Kaiserreich';
      postMessage(latKaiserreich.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    case (stage = 13):
      country = 'Nikaia';
      postMessage(nikaia.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    case (stage = 14):
      country = 'Seldschuken';
      postMessage(seldschuken.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    case (stage = 15):
      country = 'Kleinarmenien';
      postMessage(kleinarmenien.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    case (stage = 16):
      country = 'Antiochia';
      postMessage(antiochia.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    case stage >= 17:
      country = 'Ajubidenreich';
      postMessage(ajubidenreich.countryDescription);
      console.log('Message: ' + message);
      postCountry(country);
      break;
    default:
      postMessage('Mist, falsch abgebogen!');
  }

  //^ Nochmal spielen - alles auf Anfang setzen
  btnReplay.addEventListener('click', function () {
    btnMove.classList.remove('hidden');
    btnForage.classList.remove('hidden');
    btnMaraud.classList.remove('hidden');
    btnBuyFood.classList.add('hidden');
    btnPreach.classList.add('hidden');
    btnReplay.classList.add('hidden');

    stage = document.querySelector('.status-stage').textContent = 1;
    traveller = document.querySelector('.status-traveller').textContent = 100;
    ration = document.querySelector('.status-ration').textContent = 700;
    gold = document.querySelector('.status-gold').textContent = 50;
    country = document.querySelector('.status-country').textContent =
      'Deutschland';
    message = document.querySelector('.message').innerHTML =
      '<p>Seit dem 7. Jahrhundert nach Christus ist Jerusalem in der Hand muslimischer Völker.</p>\n <p>Du bist fest entschlossen das heilige Land aus der Händen der Ungläubigen zu entreißen. Mit einer kleinen Schar machst du dich auf den beschwerlichen Weg von Regensburg nach Jerusalem.</p>\n <p>Doch auf der langen Reise lauern unzählige Gefahren, die nicht jeder überlebt.</p>';
    maxRations = traveller * 7;
    foragedYet = false;
    foundRations = 0;
    foundGold = 0;
    losses = 0;
  });
  //^ Sieg bei Erreichen von Stage 20 mit einem oder mehr Reisenden
  if (stage == 20 && traveller >= 1) {
    /**
     * TODO: Buttons entfernen oder löschen
     * TODO: Button "Nochmal spielen"
     * TODO: Siegertext
     */
    btnMove.classList.add('hidden');
    btnForage.classList.add('hidden');
    btnMaraud.classList.add('hidden');
    btnBuyFood.classList.add('hidden');
    btnPreach.classList.add('hidden');
    btnReplay.classList.remove('hidden');

    message = `Geschafft! Mit ${traveller} Personen, ${ration} Rationen und ${gold} Gold bist du im heiligen Land angekommen.`;
    postMessage(message);
  }
});

//^ Nahrungssuche Button klicken
btnForage.addEventListener('click', function () {
  switch (country) {
    case 'Deutschland':
      foundRations = forage(1, 5, deutschland);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
    case 'Ungarn':
      foundRations = forage(1, 5, ungarn);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
    case 'Bulgarien':
      foundRations = forage(1, 4, bulgarien);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
    case 'Lat. Kaiserreich':
      foundRations = forage(1, 3, latKaiserreich);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
    case 'Nikaia':
      foundRations = forage(1, 2, nikaia);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
    case 'Seldschuken':
      foundRations = forage(0, 1, seldschuken);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
    case 'Kleinarmenien':
      foundRations = forage(0, 1, kleinarmenien);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
    case 'Antiochia':
      foundRations = forage(0, 1, antiochia);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
    case 'Ajubidenreich':
      foundRations = forage(0, 1, ajubidenreich);
      console.log('Gefundene Rationen: ' + foundRations);
      break;
  }
});
//^ Marodieren Button klicken
btnMaraud.addEventListener('click', function () {
  switch (country) {
    case 'Deutschland':
      foundRations = maraud(1, 5, deutschland);
    case 'Ungarn':
      foundRations = rollDice(10, 20);
      foundGold = rollDice(10, 20);
      losses = rollDice(1, 5);
      message = `Beim Brandschatzen einiger Höfe fallen dir ${foundRations} Rationen und ${foundGold} Gold in die Hände. Beim Kampf mit den Einwohnern erleidest du ${losses} Verluste. `;
      forage(foundRations);
      postMessage(message);
      break;
    case 'Bulgarien':
      foundRations = rollDice(8, 18);
      message = `${country} gut bewachsen. Du findest ${foundRations} Rationen. `;
      forage(foundRations);
      postMessage(message);
      break;
    case 'Lat. Kaiserreich':
      foundRations = rollDice(1, 16);
      message = `${country} ist nur spärlich bewachsen. Du findest ${foundRations} Rationen. `;
      forage(foundRations);
      postMessage(message);
      break;
    case 'Nikaia':
      foundRations = rollDice(0, 10);
      message = `${country} ist ein karges Land. Du findest ${foundRations} Rationen. `;
      forage(foundRations);
      postMessage(message);
      break;
    case 'Seldschuken':
    case 'Kleinarmenien':
    case 'Antiochia':
    case 'Ajubidenreich':
      foundRations = rollDice(0, 5);
      message = `${country} besteht nur aus Wüste. Du findest ${foundRations} Rationen. `;
      forage(foundRations);
      postMessage(message);
      break;
  }
});

//TODO Predigen Button klicken
//TODO Essen kaufen Button klicken
//^ Hilfe Modal
const modal = document.querySelector('.help-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
