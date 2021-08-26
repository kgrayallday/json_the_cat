const req = require('request');
const url = 'https://api.thecattapi.com/v1/breeds/search?q=';

const args = process.argv.splice(2)
const search = url + args[0];

  if (args.length === 0){
    console.log("you have to enter a breed.");
    return;
  }

  //const breedSearch = function () {};
  
  // this will go inside breedSearch...
  req(search, function (error, response, body){
    //content = body.toString();

    const data = JSON.parse(body);
    const desc = data[0].description;

    if(response.statusCode === 200){
      console.log(desc);
      return desc;
    }
    
    if(!desc){
      console.log("breed not found");
    }

    if(error){
      console.log("error:" + error);
    }
  
    // console.log(data);
    // console.log("type of data: ", typeof data)
    // console.log("type of body: ", typeof body)

  });


