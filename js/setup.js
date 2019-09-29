'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');

var getRandomInt = function (max) {
  max = Math.floor(max);

  return Math.floor(Math.random() * max);
};

var getRandomElement = function (el) {
  var i = getRandomInt(el.length);

  return el[i];
};

var wizards = [
  {
    name: getRandomElement(wizardNames) + ' ' + getRandomElement(wizardSurnames),
    coatColor: getRandomElement(wizardCoatColors),
    eyesColor: getRandomElement(wizardEyesColors)
  },
  {
    name: getRandomElement(wizardNames) + ' ' + getRandomElement(wizardSurnames),
    coatColor: getRandomElement(wizardCoatColors),
    eyesColor: getRandomElement(wizardEyesColors)
  },
  {
    name: getRandomElement(wizardNames) + ' ' + getRandomElement(wizardSurnames),
    coatColor: getRandomElement(wizardCoatColors),
    eyesColor: getRandomElement(wizardEyesColors)
  },
  {
    name: getRandomElement(wizardNames) + ' ' + getRandomElement(wizardSurnames),
    coatColor: getRandomElement(wizardCoatColors),
    eyesColor: getRandomElement(wizardEyesColors)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');
