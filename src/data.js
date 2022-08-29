export const mainFilters = {
  displayCharactersList, displayBooksList, displaySpellsList,
<<<<<<< Updated upstream
  filterCharactersByHouses, charactersFromAtoZ, charactersFromZtoA,
  sortBy
=======
  filterCharactersByHouses, sortBy, calcPercentage
>>>>>>> Stashed changes
};

function charactersFromAtoZ(charactersNames) {
  return charactersNames.sort();
}

function charactersFromZtoA(charactersNames) {
  return charactersNames.sort().reverse();
}

function sortBy(arrObjects, sortByParam) {
  if (sortByParam == 'asc') {
    arrObjects = charactersFromAtoZ(arrObjects);
  }
  else if (sortByParam == 'desc') {
    arrObjects = charactersFromZtoA(arrObjects);
  }
  return arrObjects
}

function displayCharactersList(names) {
  let characters = names.map((characters) => characters.name);
  return characters;
}

function displayBooksList(books) {
  return books.map((book) => book.title)
}

function displaySpellsList(spells) {
  return spells.map((spell) => spell.name)
}

function filterCharactersByHouses(characters, houseToFilterBy) {
  const filteredCharacters = characters.filter((character) => {
    if (character.house === houseToFilterBy && character.house !== null) {
      return true;
    }
  })
  return filteredCharacters.map((character) => character.name)
}

<<<<<<< Updated upstream
=======
function sortBy(arrObjects, sortByParam) {
  if (sortByParam == 'asc') {
    arrObjects = charactersFromAtoZ(arrObjects);
  }
  else if (sortByParam == 'desc') {
    arrObjects = charactersFromZtoA(arrObjects);
  }
  return arrObjects
}

function calcPercentage(lengthFilteredCharacters, lengthAllCharacters) {
  return Math.round((lengthFilteredCharacters * 100) / lengthAllCharacters);
}
>>>>>>> Stashed changes
