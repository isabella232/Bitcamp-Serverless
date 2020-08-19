## Adding CSS to your HTML Page

After watching the live demo, you should know the basics of how to create a simple website using the coding language HTML and some CSS if you want your webpage to look fancy. Now, your task is to create your own HTML page that inputs an image using a `<form>` and outputs the image's emotion data and the user's recommended song.



If you still need some help learning HTML and CSS, checkout these resources:

W3Schools (HTML): https://www.w3schools.com/html/default.asp

W3Schools (CSS): https://www.w3schools.com/css/default.asp



From the top, you should have a title. You can do this using a `<h3>` tag and a simple wrapper to center the text. Then you should have your main "container". A container is a div that includes everything within a certain area. It makes it easier to center and stylize everything. Next, you should have a `<form>` tag that takes in a image (make sure to reference an ID and `onsubmit = ""` so we can later link it with some JavaScript). Inside of the form, create a `<input>` tag that takes in an image. Afterwards, we also need to add a few output div(s) so we can display the image's emotion data and user's recommended song(s). We can do this by creating empty div(s) with some given ID. Oh also, a submit button would also be helpful...



Here are some hints and code snippets for getting started!



To start off your HTML page, add:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
   </head>
</html>
```

To create a form, use the form tag and a few labels:

```html
<form id="" onsubmit="" enctype=""/>
```

Then to create an image input, use the `type="file"` and `accept=""` modifiers:

```html
<input type="file" accept="" name="" id="" onchange=""/>
```

We need to create two more things. An image output that allows the user to see the image they chose and a few spare div(s) with unique id(s) we can use to display the image's emotion data and user's recommended song(s).

```html
<div id="uniqueName0"> <div id="uniqueName1"> <button id="" type ="submit">
```

Lastly, make sure to reference jQuery and any other libraries we used (JS bootstrap):

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <!-- <script src="js/bootstrap.min.js"></script> -->
    <script src="config.js" type="text/javascript"></script>
    <script src="song.js" type="text/javascript"></script>
    <script src="face.js" type="text/javascript"></script>
```

After that, you're done with the frontend. It's time to use JavaScript!

