## Parsing Multipart

The Azure Function needs to:

1. receive and parse an image from a webpage
2. call the Face API and analyze the image



We're going to be focusing on Part 1, which involves parsing multipart form data. In any HTML `<Form>` element that receives involves a file upload(which ours does), the data is encoded in the `multipart/form-data` method. The default http encoding method is `application/x-www-form-urlencoded`, which encodes text into name/value pairs and works for text inputs but is inefficient for file or binary inputs. `multipart/form-data` indicates that one or more files are being inputted. Parsing this type of data is a little more complicated than usual. To simplify the process, we're going to use a npm library called `parse-multipart`.  



To import Node packages, we use the `require`  function:

```js
var multipart = require("parse-multipart");
```

This imports the `parse-multipart`  package into our code, and we can now call any function in the package using `multipart.Function()`. 



Your function should look like this:

```js
var multipart = require("parse-multipart");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.'); 
};
 
```



Before we start parsing, go to the [parse-multipart](https://www.npmjs.com/package/parse-multipart) documentation and read it.  Look specifically at the example in the **Usage** section and what they are doing. We're going to do something similar.



Notice that `multipart.Parse(body, boundary)`  requires two parameters.  I've already gotten the boundary for you– just like the documentation example, our boundary is a string in the format `"----WebKitFormBoundary(random characters here)"`. 



In the `multipart.Parse()` call, you need to figure out what the body parameter should be.

Hint: It should be the request body. Think about the example Azure function. How did we access that?

```js

//here's your boundary:
var boundary = multipart.getBoundary(req.headers['content-type']);
  
// TODO: assign the body variable the correct value
var body = '<WHAT GOES HERE?>'

// parse the body
var parts = multipart.Parse(body, boundary);
```

