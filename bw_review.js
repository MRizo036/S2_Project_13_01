"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Maria De Jesus Rizo
   Date:   3.13.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
// States that the init function will be run immediately when the page is loaded within a browser window.
window.onload = init;
//The line below creates a function with the name of init.
function init() {
      //Creates a variable with the name of stars. This varibale is given the value of the span#stars imgs.
      var stars = document.querySelectorAll("span#stars img");
      //The block below creates a for loop that will continue to run as long as the value of i is less than the length of the stars variable. 
      for (var i = 0; i < stars.length; i++) {
            //The line below makes the cursor a pointer.
            stars[i].style.cursor = "pointer";
            //The line below adds an event listener to the stars current value which listens for when the mouseenter event occurs. When this event occurs the lightStars function will run.
            stars[i].addEventListener("mouseenter", lightStars);
      }
      //The line below create an event listener which listens for the key up event to occur. in response, the updateCount function will be run.
      document.getElementById("comment").addEventListener("keyup", updateCount);
}
// The line below created a function with the name of lightStars
function lightStars(e) {
      //The line below creates a variable with the name of starNumber which is then assigned the value of e.target.alt.
      var starNumber = e.target.alt;
      //The line below creates a variable with the name of stars which is given the value of the span#stars imgs.
      var stars = document.querySelectorAll("span#stars img");
      //The block below creates a for loop that will continue to run as long as the value of i is less than the value of starNumber. The line within changes the image of the stars to the bw_star2.png.
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      //The block below creates a for loop that runs as long as the value of the i variable is less than 5. The line within changes the image of the stars to the bw_star.png image. 
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      //The line below states that the value of the element with the id of rating will be given the value of the starNumber concatenated with the string of star(s).
      document.getElementById("rating").value = starNumber + " star(s)";
      //The block below adds an event listener that listens for the mouseleave event. Once the event occurs, the anonymus function which removes the event listener will be triggered.
      e.target.addEventListener("mouseleave", function () {
            e.target.removeEventListener("mouseleave", turnOffStars);
      });

}
//The line below creates a function with the name of turnOffStars and being passed the parameter of e.
function turnOffStars(e) {
      //The line below creates a variable with the name of stars which is given the value of the span#stars imgs.
      var stars = document.querySelectorAll("span#stars img");
      //The clock below creates a for loop that will continue to run as long as the i variable value if less than the stars length. The line within changes the image of the stars to the bw_star.png image.
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }
      //The line below says that the html within the element with an id of rating will be an empty string.
      document.getElementById("rating").innerHTML = "";
}
//The line below creates a function with the name of updateCount
function updateCount() {
      var commentText = document.getElementById("comment").value;
      //The line creates the variable charCount which is assigned the value of the characters within the commentText box.
      var charCount = countCharacters(commentText);
      //The line creates a variable with the name of wordCountBox that is given the value of the element with an id of wordCount.
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000"
      //the if statements below states that for any charCount value above 1000, the text color and background color will change to the white and red. If it is not above 1000, the text color and background color will remain white and black.
      if (charCount > 1000) {
            wordCount.style.backgroundColor = "red";
            wordCountBox.style.color = "white";
      } else {
            wordCountBox.style.backgroundColor = "white";
            wordCountBox.style.color = "black";
      }
}

/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}