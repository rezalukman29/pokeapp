export function urlTypes(string) {
    return '/assets/types/'+string+'.png'
  }
export function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

 export function percentage(number) {
    return number + '%'
}
export function setStat(item) {

  let statName;
  switch (item) {
    case item = 'hp':
      statName = 'HP';
      break;
    case item = 'attack':
      statName = 'ATK';
      break;
    case item = 'defense':
      statName = 'DEF';
      break;
    case item = 'special-attack':
      statName = 'SATK';
      break;
    case item = 'special-defense':
      statName = 'SDEF';
      break;
    case item = 'speed':
      statName = 'SPD';
      break;
  }

  return statName;

}

export function baseNumber(number) {
   return (Math.log(Math.abs(number) + 1) * 0.43429448190325176 | 0) + 1 === 3 ? number : '0' + number 
}

