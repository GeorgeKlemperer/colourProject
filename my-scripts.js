const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("date").innerHTML = days[date.getDay()]+" "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

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


// event = keyup or keydown
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    // console.log('Space pressed')
    
  }
})


const randomColour1 = () => {
  let colour1 = '#';
  for (let i = 0; i < 6; i++){
     const random = Math.random();
     const bit = (random * 16) | 0;
     colour1 += (bit).toString(16);
  };
  return colour1
};

document.getElementById("paletteBlockTextOne").innerHTML = `${randomColour1()}`;
document.getElementById("colourOne").style.backgroundColor = randomColour1();