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
     const bit = (random * 16) | 0;
     colour += (bit).toString(16);
  };
  return colour;
};
console.log(randomColour());



function randomColour1() {
  let colour1 = randomColour();
  document.getElementById("paletteBlockTextOne").innerHTML = `${colour1}`;
  document.getElementById("colourOne").style.backgroundColor = colour1;
}

function randomColour2() {
  let colour1 = randomColour();
  document.getElementById("paletteBlockTextTwo").innerHTML = `${colour1}`;
  document.getElementById("colourTwo").style.backgroundColor = colour1;
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