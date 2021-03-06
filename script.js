const gameContainer = document.getElementById("game");
var divClicked = 0
var oldDiv = null;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// g(x) = x^2
// g(3) // 3^2 = 9
//Should know about function input and output only.
//Should know the values passed across the functions


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  var div = event.target
  div.style.backgroundColor = div.classList[0]
  divClicked++;
  if (divClicked == 1){
    oldDiv = div
  }
  console.log(divClicked)
  if (divClicked == 2){
      // console.log(oldDiv.className)
      // console.log(event.srcElement.className)
      // console.log(event.srcElement.className)
     
    if (event.srcElement.className !== oldDiv.className){
      setTimeout(function() {
        event.srcElement.style.backgroundColor = 'white' 
        oldDiv.style.backgroundColor = 'white'
        divClicked = 0;
        oldDiv = null;
      }, 1000);
    } else {
      divClicked = 0;
      oldDiv = null;
    }
    
    
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);



// var h2s = this.getElementsByTagName( 'h2' );
// h2s[0].style.backgroundColor = 'blue';
// };