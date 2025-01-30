/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

export const omit = (obj, ...fields) => {
  const transformedArray = Object.entries(obj).map(item => item).filter(item => !fields.includes(item[0]));

  return Object.fromEntries(transformedArray);
};


