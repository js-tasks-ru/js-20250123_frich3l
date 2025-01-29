/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

const fruits = {
  apple: 2,
  orange: 4,
  banana: 3
};

export const pick = (obj, ...fields) => {
  
  const transformedArray = Object.entries(obj).map(name => name).filter(item => fields.includes(item[0]));
  
  return Object.fromEntries(transformedArray);
};



