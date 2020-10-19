// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const credentials = {
    id: '',
    secret: ''
}

// Set region
AWS.config.update({
    region: 'sa-east-1',
    accessKeyId: credentials.id,
    secretAccessKey: credentials.secret
});
// Create publish parameters

let num = Math.floor(Math.random() * (Math.floor(9999) - Math.ceil(1000) + 1) + Math.ceil(1000));
//salvar numero no banco de dados para comparar na hora da validação

let params = {
    Message: `Numero de validação é ${num}`, /* required */
    PhoneNumber: `${numerouser}`,
};

// Create promise and SNS service object
function sendSMS(params) {
    var publishTextPromise = new AWS.SNS().publish(params).promise();
    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(function (data) {
        console.log("MessageID is " + data.MessageId);
    }).catch(function (err) {
        console.error(err, err.stack);
    });
}

sendSMS(params);