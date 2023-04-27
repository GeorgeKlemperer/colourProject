const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("date").innerHTML = days[date.getDay()]+" "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();