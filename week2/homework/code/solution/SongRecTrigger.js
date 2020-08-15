var multipart = require("parse-multipart");
var request = require('request-promise');
  
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.'); 
 
    console.log(req)
    var boundary = multipart.getBoundary(req.headers['content-type']);
    
    var body = req.body;

    var parts = multipart.Parse(body, boundary);
    
    //analyze the image
    var result = await analyzeImage(parts[0].data);

    context.res = {
        body: {
            result
        }
    };
    console.log(result);
};
 
async function analyzeImage(byteArray){
    
    const subscriptionKey = 'YOUR SUBSCRIPTION KEY';
    const uriBase = 'YOUR ENDPOINT' + '/face/v1.0/detect';

    const params = {
        'returnFaceId': 'true',
        'returnFaceAttributes': 'emotion'
    };

    const options = {
        uri: uriBase,
        qs: params,
        body: byteArray,
        headers: {
            'Content-Type': "application/octet-stream",
            "Ocp-Apim-Subscription-Key": subscriptionKey
        }
    }
    let jsonResponse;
    
    await request.post(options, (error, response, body) => {
        if (error){
            console.log('Error: ' + error);
            return;
        }
 
        jsonResponse = JSON.parse(body);
 
    });
    return jsonResponse;  
}








