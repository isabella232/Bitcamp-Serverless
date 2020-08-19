## Sending Image through Post Request (Azure Function)

At this stage, we have a working HTML page that takes in an image. The next step is to call the Azure Function that sends the image through a Post Request to the Face API where it can be analyzed. To do this, we need to parse the image (which we have done already) and send it through Azure Functions.



We are going to be adding on to the already created `analyzeImage(byteArray) {}` and use a post request to send the image to the Face API.



Create a new variable that fetches the Face API Endpoint and the URLSearchParams you set earlier, make sure you convert it to a string (`toString()`):

```javascript
let resp = await fetch(Endpoint + '?${###}') //Add string parameter in ###
```

Add a method and body to our variable. Our method would be "POST" since we are sending data rather than receiving it. For our body, set it to `byteArray` which is the argument we pass through in `analyzeImage()`.



We also need to add headers, these are quite complicated to figure out... so just add these lines of code:

```javascript
headers: {
            'Content-Type': "application/octet-stream",
            "Ocp-Apim-Subscription-Key": subscriptionKey
        }
```

Lastly, we need to turn the response into JSON format to later be processed and displayed on our HTML page. To do this we are going to use the `.json()` function:

```javascript
let data = await //Add response + json function here
```

Also, make sure the function `analyseImage(byteArray) {}` returns the JSON response by returning the variable `data`.
