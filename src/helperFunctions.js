import { data } from './data.js';

export function getData(dataType) {
  return data.entries
    .filter(
      entry => entry.programType === dataType && entry.releaseYear >= 2010
    )
    .sort(function(a, b) {
      var titleA = a.title.toUpperCase();
      var titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    })
    .slice(0, 21);
}
