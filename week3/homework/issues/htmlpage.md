## Creating an HTML Page

After watching the live demo, you should know the basics of how to create a simple website using the coding language HTML and some CSS if you want your webpage to look fancy. Now, your task is to create your own HTML page that inputs an image using a `<form>` and outputs the image's emotion data and the user's recommended song.

<br />

If you still need some help learning HTML and CSS, checkout these resources:

<br />

W3Schools (HTML): https://www.w3schools.com/html/default.asp

W3Schools (CSS): https://www.w3schools.com/css/default.asp

<br />

From the top, you should have a title. You can do this using a `<h3>` tag and a simple wrapper to center the text. Then you should have your main "container". A container is a div that includes everything within a certain area. It makes it easier to center and stylize everything. Next, you should have a `<form>` tag that takes in a image (make sure to reference an ID and `onsubmit = ""` so we can later link it with some JavaScript). Inside of the form, create a `<input>` tag that takes in an image. Then create an image output div so the user can see the image the uploadede. Afterwards, we also need to add a few output div(s) so we can display the image's emotion data and user's recommended song(s). We can do this by creating empty div(s) with some given ID. Oh also, a submit button would also be helpful...

<br />

Here are some hints and code snippets for getting started!

To create a form, use the form tag and a few labels:

```html
<form id="" onsubmit="" enctype=""/>
```

Then to create an image input, use the `type="file"` and `accept=""` modifiers:

```html
<input type="file" accept="" name="" id="" onchange=""/>
```

We need to create two more things. An image output that allows the user to see the image they chose and a few spare div(s) with unique id(s) we can use to display the image's emotion data and user's recommended song(s). Make sure to create a `<div>` called "hidden-emotion", we use it later on.

```html
<div id="hidden-emotion"> <img id="output">
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

<br />

After that, you're done with the frontend. It's time to use JavaScript!

