function countAnimals(animals, count) {
    const animalArray = animals.split(',');
    const result = [];
  
    for (const animal of count) {
      const regex = new RegExp(animal, 'g');
      const matches = (animals.match(regex) || []).length;
      result.push(matches);
    }
  
    return result;
  }
  