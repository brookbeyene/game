var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');
var countries = require('../country.json');

var total = 0;
var myData = []

require('dotenv/config')
/* AWS Config Env. */
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// AWS
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "talent";


router.get('/', function(req, res, next) {
    res.render('users', {username: TABLE_NAME, 'myData': myData});
});

const pitstop1 = (req, res, next) =>{
  console.log("this is pit stop", req.body.countryName);
  if(countries.ref_country_codes.filter(result => result.country === req.body.countryName)){
    const result = countries.ref_country_codes.filter(result => {
      return result.country.includes(req.body.countryName)
    })
    console.log("Filtered list", result)
    next();
  }else{
    total= 0;
    next();
  }
}

router.post('/', pitstop1, function(req, res, next){
  const countryName = req.body.countryName;
  const countryCode = req.body.countryCode;
  const possible_score = (countryName.length) + (countryCode.length)

  total += possible_score;
  var dataset={
    "id": Date.now().toString(),
    "countryName": countryName,
      "countryCode": countryCode,
      "score": possible_score,
      "total": total,
  }
  const putCountries = async () => {
  console.log("Start")
  myData.push(dataset)

  const params = {
    TableName: TABLE_NAME,
    Item: dataset
  };
  console.log(params)
  const countries = await  dynamoClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
  // const countries = await dynamoClient.scan(params).promise();
  console.log("this is getting countries out of db", countries);
  return countries;
}

putCountries();


// getCountries();
  
  // res.render('users', {username: TABLE_NAME, countryName: countryName, countryCode: countryCode, possibleScore: possible_score, total: total});
  res.render('users', {username: TABLE_NAME, 'myData': myData});
  
})



module.exports = router;
