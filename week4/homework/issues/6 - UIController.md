## Create the UIController Module

You should already have declared a `UIController`  module like so:

```js
// UI Module
const UIController = (function() {


})();
```



<br />



There isn't a whole lot this module has to do since our app literally only has to display one song.

What we do need to add is a reference to the id of html elements that we will need to alter or listen to during runtime. The two elements are the **Find Song** button(it has the id `song-button`) and the `#song-detail`  html div that displays the actual song recommendation. 

Notice that variables `submit`  and `divSongDetail`  only store the html **id**, not a reference to the actual object.

```js
//object to hold references to html selectors
const DOMElements = {
  submit: '#song-button',
  divSongDetail: '#song-detail'
}
```



<br />



`DOMElements`  is the only "private" variable we need, so we can write the `return`  object now:

Two objects here:

1. `inputField`-  this is an object with actual references to the html objects using `document.querySelector`  and the id variables that we declared in `DOMElements`
2. `createTrackDetail`-  this method creates a html div where the image, title, and artist of the recommended song is displayed



Task: add a line of code at the end of  `createTrackDetail`  that inserts the string `html`  into `detailDiv`.

Use the function `insertAdjacentHTML()`[(documentation here)](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) 

Note: you could also do this with `Element.innerHTML`  but in the case that we need to display more than one song, `insertAdjacentHTML()`   allows that.



```js
//public methods
return {

  //the inputField is an object containing references to the html fields 
   inputField: {
      songButton: document.querySelector(DOMElements.submit),
      songDetail: document.querySelector(DOMElements.divSongDetail)
  },

  // need method to create the song detail
  createTrackDetail(img, title, artist) {
      const detailDiv = document.querySelector(DOMElements.divSongDetail)

      // any time user clicks a new song, we need to clear out the song detail div
      detailDiv.innerHTML = '';

      const html = 
      `
      <div class="songdisplay">
          <img src="${img}" alt="">     
          <br />           
          ${title}- ${artist}

      </div> 
      `;

    
    	//use the insertAdjacentHTML function here to stick the html string into detailDiv
      <CODE HERE>
  }

}
```



<br />



And that's it for the UIController!