// MENTOR CAMERON HELPED WITH THIS CODE:

const req = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';


// higher order function with call back
const fetchBreedDescription = function (breedName, callback) {
  const queryUrl = url + breedName;

  if (!breedName) {
    console.log("you have to enter a breed.");
    return callback("you have to enter a breed.");
  }

  req(queryUrl, (error, response, body) => {

    const data = JSON.parse(body);

    // if (!data){
    //   return callback(error, null);
    // }

    if (error) {
      return callback(error, null);
    }

    const breed = data[0];
    if (breed) {
      const desc = breed.description;
      return callback(error, desc);
    } else {
      return callback("Breed not found");
    }
    // console.log(data);
    // console.log("type of data: ", typeof data)
    // console.log("type of body: ", typeof body)
    // return callback(error, desc);
  });
};


module.exports = {
  fetchBreedDescription
};