import * as utils from '../network/utils'
import { searchData } from '../network'
/**
 * Make request and get data
 * @function countries
 * @param {object} params - object of parameters:
 * @param {string} params.countryCode 
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an string
 */

//url='https://api.amaas.com/v1.0/fundamental/countries?country_code='+countryCode
export function countries({ code }, callback) {
  const params = {
    AMaaSClass: 'fundamentalCountries',
    query: {countryCode: [code]}
  }
  let promise = searchData(params).then(result => {
      result=JSON.stringify(result); 
    if (typeof callback === 'function') {
      callback(null, result)
    }
    console.log(result)
    return result
   }).catch((err) => {
     console.log(err.message);
  });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}