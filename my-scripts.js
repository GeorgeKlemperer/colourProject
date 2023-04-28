const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("date").innerHTML = days[date.getDay()]+" "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();




//This code adds a keydown listener event for when the spacebar is pressed (key code 32) and the target of the event is the document body. If both conditions are true the function returns false, which prevents the default action of the space bar key, which is to scroll down the page. In other words, this code disables scrolling of the webpage when the space bar is pressed. This is to stop a bug when the viewer window is narrow that scrolls the page when randomising the colours.
window.onkeydown = function(e) { 
  return !(e.keyCode == 32 && e.target == document.body);
}; 

// This code will generate a random hexidecimal colour code and print it to the console.
const randomColour = () => {
  let colour = '#';
  for (let i = 0; i < 6; i++){
     const random = Math.random();
     const bit = Math.floor(random * 16);
     colour += (bit).toString(16);
  };
  return colour;
};
console.log(randomColour());

function randomColour1() {
  let colour = randomColour();
  document.getElementById("paletteBlockTextOne").innerHTML = `${colour}`;
  document.getElementById("colourOne").style.backgroundColor = colour;

  // console.log(blackOrWhiteText(colour, white, black))
  document.getElementById("paletteBlockTextOne").style.color = blackOrWhiteText(colour);
  document.getElementById("titlebackground").style.borderColor = colour; // Add this line to update the border color
}     

function randomColour2() {
  let colour = randomColour();
  document.getElementById("paletteBlockTextTwo").innerHTML = `${colour}`;
  document.getElementById("colourTwo").style.backgroundColor = colour;

  document.getElementById("paletteBlockTextTwo").style.color = blackOrWhiteText(colour);
}

// Functions are called when page is loaded for inital random colours.
randomColour1()
randomColour2()

// Listener event runs random colour functions when spacebar is pressed.
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    // console.log('Space pressed')
    randomColour1()
    randomColour2()
  }
})

// This code takes a background colour and returns whether the text on it should be black or white. This formula takes into account the fact that the human eye is more sensitive to green light than to red or blue light. The result is compared to a threshold of 150, and if it is greater than 150, the function returns the black color. Otherwise, it returns the white color.
function blackOrWhiteText(bgColour) {
  var colour = (bgColour.charAt(0) === '#') ? bgColour.substring(1, 7) : bgColour; // Here functioon checks if bgColour starts with a hashtag or not. If true then extracts hex code from next 6 characters.
  var r = parseInt(colour.substring(0, 2), 16); // hex to R
  var g = parseInt(colour.substring(2, 4), 16); // hex to G
  var b = parseInt(colour.substring(4, 6), 16); // hex to B
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 150) ?  "#000000" : "#FFFFFF"; // If perceived brightness is greater than 150 then expression evaluates as true and black ("#000000") is returned. Otherwise expression evaluates to false and white ("#FFFFFF") is returned.
}