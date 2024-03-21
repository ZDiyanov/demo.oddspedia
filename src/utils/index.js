/**
 * @description Is null
 * @param val
 * @returns {boolean}
 */
export const isNull = val => val === null;

/**
* @description Is array
* @param val
* @returns {boolean}
*/
export const isArr = val => Array.isArray(val);

/**
* @description Is object
* @param val
* @returns {boolean}
*/
export const isObj = val => typeof val === 'object' && !isArr(val) && !isNull(val);

/**
* @description Is number
* @param val
* @returns {boolean}
*/
export const isNum = val => typeof val === 'number' && !Number.isNaN(val);

/**
* @description Is string
* @param val
* @returns {boolean}
*/
export const isStr = val => typeof val === 'string';

/**
* @description Is non empty string
* @param val
* @returns {boolean|boolean}
*/
export const isNonEmptyStr = val => isStr(val) && val !== '';

/**
* @description Is non empty array
* @param val
* @returns {boolean|boolean}
*/
export const isNonEmptyArr = val => isArr(val) && val.length > 0;

/**
* @description Converts a snake_case string into a camelCase string
* @param snakeText
* @returns {string}
*/
export const snakeToCamel = (snakeText) => {
  const snakeParts = snakeText.split('_');

  if (snakeParts.length === 1) {
    return snakeText.charAt(0).toLowerCase() + snakeText.substr(1);
  }

  let camelText = '';
  snakeParts.forEach((part, index) => {
    let firstChar = part.charAt(0);
    firstChar = (index === 0) ? firstChar.toLowerCase() : firstChar.toUpperCase();
    camelText += (firstChar + part.substr(1));
  });
  return camelText;
};

/**
* @description Converts an object with snake_case keys to an object with camelCase keys
* @param snakeObj
* @returns {{}}
*/
export const mapSnakeToCamel = (snakeObj) => {
  if (isArr(snakeObj)) {
    return snakeObj.map(obj => {
      obj = isObj(obj) ? mapSnakeToCamel(obj) : obj;
      return obj;
    });
  }

  const camelObj = {};

  Object.keys(snakeObj).forEach(key => {
    const camelKey = snakeToCamel(key);
    camelObj[camelKey] = snakeObj[key];

    if (isObj(camelObj[camelKey])) {
      camelObj[camelKey] = mapSnakeToCamel(camelObj[camelKey]);
    } else if (isArr(camelObj[camelKey])) {
      camelObj[camelKey] = camelObj[camelKey].map(obj => {
        obj = isObj(obj) ? mapSnakeToCamel(obj) : obj;
        return obj;
      });
    }
  });
  return camelObj;
};
