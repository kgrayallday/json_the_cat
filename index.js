const { fetchBreedDescription } = require('./breedFetcher.js');

const breedName = process.argv[2];

// calling the higher-order function + callback
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
