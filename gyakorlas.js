let elem1 = document.getElementById("elem1")
elem1.style.backgroundColor = "yellow"
elem1.innerHTML = "Első elem"

let item2 = document.getElementsByClassName("item2")[0];
item2.style.color = "red"
item2.innerHTML = "Második elem"

let hatter = document.getElementsByTagName("body")[0];
hatter.style.backgroundColor = "purple"

let item3 = document.getElementsByClassName("item3")[0];
item3.innerHTML = "Harmadik elem"

let item4 = document.getElementById("elem4");
item4.innerHTML=`<img src="download.png" width="300" height="200">`