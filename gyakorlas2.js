var igen = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
console.log("for ciklus ------------------------------------")
for(let i=0;i<igen.length;i++)
{
    console.log(igen[i]);
}
console.log("for in ciklus ------------------------------------")
for (var index in igen) 
    {
    console.log(igen[index]);
    }
console.log("for of ciklus ------------------------------------")
for (var nap of igen) 
    {
    console.log(nap);
    }
console.log("foreach index ciklus ------------------------------------")
igen.forEach(function(nap) 
    {
    console.log(nap);
    });
console.log("foreach index value ciklus ------------------------------------")
igen.forEach(function(value, index) 
    {
    console.log("Index: " + index + ", Érték: " + value);
    });
console.log("foreach value ciklus ------------------------------------")
igen.forEach(function(value) 
    {
    console.log(value);
    });
console.log("while ciklus ------------------------------------")
var i = 0;
while (i < igen.length) 
    {
    console.log(igen[i]);
    i++;
    }
console.log("do while ciklus ------------------------------------")
var i = 0;
do {
    console.log(igen[i]);
    i++;
    } 
while (i < igen.length);