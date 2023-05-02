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
  document.getElementById("paletteBlockTextOne").style.color = blackOrWhiteText(colour); // Changes palette blcok text to black or white depending on randomly generated BG colour.
  document.getElementById("titlebackground").style.borderColor = colour; // Add this line to update the border color.

  document.getElementById("color-picker1").value = colour; //Makes colour selector match BG colour when new random palette is generated.
  // document.getElementById("color-picker1").value = "#000000"; //Makes colour selector go black when new random palette is generated.
}     

function randomColour2() {
  let colour = randomColour();
  document.getElementById("paletteBlockTextTwo").innerHTML = `${colour}`;
  document.getElementById("colourTwo").style.backgroundColor = colour;

  document.getElementById("paletteBlockTextTwo").style.color = blackOrWhiteText(colour); // Changes palette blcok text to black or white depending on randomly generated BG colour.

  document.getElementById("color-picker2").value = colour; //Makes colour selector match BG colour when new random palette is generated.
  // document.getElementById("color-picker2").value = "#000000"; //Makes colour selector go black when new random palette is generated.
}

function randomColour3() {
  let colour = randomColour();
  document.getElementById("paletteBlockTextThree").innerHTML = `${colour}`;
  document.getElementById("colourThree").style.backgroundColor = colour;

  document.getElementById("paletteBlockTextThree").style.color = blackOrWhiteText(colour); // Changes palette blcok text to black or white depending on randomly generated BG colour.

  document.getElementById("color-picker3").value = colour; //Makes colour selector match BG colour when new random palette is generated.
  // document.getElementById("color-picker3").value = "#000000"; //Makes colour selector go black when new random palette is generated.
}

function randomColour4() {
  let colour = randomColour();
  document.getElementById("paletteBlockTextFour").innerHTML = `${colour}`;
  document.getElementById("colourFour").style.backgroundColor = colour;

  document.getElementById("paletteBlockTextFour").style.color = blackOrWhiteText(colour); // Changes palette blcok text to black or white depending on randomly generated BG colour.

  document.getElementById("color-picker4").value = colour; //Makes colour selector match BG colour when new random palette is generated.
  // document.getElementById("color-picker4").value = "#000000"; //Makes colour selector go black when new random palette is generated.
}

function randomColour5() {
  let colour = randomColour();
  document.getElementById("paletteBlockTextFive").innerHTML = `${colour}`;
  document.getElementById("colourFive").style.backgroundColor = colour;

  document.getElementById("paletteBlockTextFive").style.color = blackOrWhiteText(colour); // Changes palette blcok text to black or white depending on randomly generated BG colour.

  document.getElementById("color-picker5").value = colour; //Makes colour selector match BG colour when new random palette is generated.
  // document.getElementById("color-picker5").value = "#000000"; //Makes colour selector go black when new random palette is generated.
}

// Functions are called when page is loaded for inital random colours.
randomColour1()
randomColour2()
randomColour3()
randomColour4()
randomColour5()

// Listener event runs random colour functions when spacebar is pressed.
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    // console.log('Space pressed')
    randomColour1()
    randomColour2()
    randomColour3()
    randomColour4()
    randomColour5()
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


///Colour Selector Code
const colorPicker1 = document.getElementById("color-picker1");
colorPicker1.addEventListener("input", function() {
  document.getElementById("colourOne").style.backgroundColor = colorPicker1.value; //Changes palette background colour to picker value.
  document.getElementById("paletteBlockTextOne").innerHTML = colorPicker1.value; //Changes palette blocks text to picker value (picker value is a hex code string)
  document.getElementById("paletteBlockTextOne").style.color = blackOrWhiteText(colorPicker1.value); //Changes palette block text to black or white depending on colour picker 2's value.
});

const colorPicker2 = document.getElementById("color-picker2");
colorPicker2.addEventListener("input", function() {
  document.getElementById("colourTwo").style.backgroundColor = colorPicker2.value; //Changes palette background colour to picker value.
  document.getElementById("paletteBlockTextTwo").innerHTML = colorPicker2.value; //Changes palette blocks text to picker value (picker value is a hex code string)
  document.getElementById("paletteBlockTextTwo").style.color = blackOrWhiteText(colorPicker2.value); //Changes palette block text to black or white depending on colour picker 2's value.
});

const colorPicker3 = document.getElementById("color-picker3");
colorPicker3.addEventListener("input", function() {
  document.getElementById("colourThree").style.backgroundColor = colorPicker3.value; //Changes palette background colour to picker value.
  document.getElementById("paletteBlockTextThree").innerHTML = colorPicker3.value; //Changes palette blocks text to picker value (picker value is a hex code string)
  document.getElementById("paletteBlockTextThree").style.color = blackOrWhiteText(colorPicker3.value); //Changes palette block text to black or white depending on colour picker 2's value.
});

const colorPicker4 = document.getElementById("color-picker4");
colorPicker4.addEventListener("input", function() {
  document.getElementById("colourFour").style.backgroundColor = colorPicker4.value; //Changes palette background colour to picker value.
  document.getElementById("paletteBlockTextFour").innerHTML = colorPicker4.value; //Changes palette blocks text to picker value (picker value is a hex code string)
  document.getElementById("paletteBlockTextFour").style.color = blackOrWhiteText(colorPicker4.value); //Changes palette block text to black or white depending on colour picker 2's value.
});

const colorPicker5 = document.getElementById("color-picker5");
colorPicker5.addEventListener("input", function() {
  document.getElementById("colourFive").style.backgroundColor = colorPicker5.value; //Changes palette background colour to picker value.
  document.getElementById("paletteBlockTextFive").innerHTML = colorPicker5.value; //Changes palette blocks text to picker value (picker value is a hex code string)
  document.getElementById("paletteBlockTextFive").style.color = blackOrWhiteText(colorPicker5.value); //Changes palette block text to black or white depending on colour picker 2's value.
});