/* 46. Les opérateurs */




var a = 12;
var b = 5;
var result = a+b;

console.log(result);

console.log("---------------------")




var x = 12;
var y = 5;
var result = x%y; // Y = 5 on ne peut pas en mettre un 3e, seulement un 2e .... 5+5 = 10 / 12-10 = 2

// Résultat = 2 

console.log(result);

console.log("---------------------")


var x = 12;
var y = 5;
x++

/* ++ = +1
   -- = -1
*/

console.log(x); // 13

console.log("---------------------")

var x = 12;
var y = 5;
var result = ++x;

console.log(result); // 13 



console.log("---------------------")


var x = 12;
var y = 5;
x += y; // pareil que x + y = 17

console.log(x);

console.log("---------------------")

var string1 = "Hello";
var string2 = "John";

console.log(string1+ " " +string2);

console.log("---------------------")

var string1 = "Hello";
var string2 = "John";

console.log(string1);
console.log("---------------------")
console.log(string2);
console.log("---------------------")


















/* 48. Les bases de Javascript : Booleans and Comparisons (Booléens et Comparaisons) */


var x = 5;

var myBoolean = (x===5); // true
/* var myBoolean = (x!==5); (Différent de 5) */ // false

/* var myBoolean = (x==="5") (string); (strictement égale) */ // false
/* var myBoolean = (x=="5") (string); (comparé 5 nombre avec le 5 string) */ // true

var myBoolean = (x>12); // false
var myBoolean = (x>=12); // false

var myBoolean = (x<=5); // true
var myBoolean = (x<5); // false

console.log(myBoolean);


var x = 5;
var y = 12;

var myBoolean = (x>3 && y <15); // true

console.log(myBoolean)


var x = 5;
var y = 12;

var myBoolean = (x>3 && y <10); // false

console.log(myBoolean)




var x = 5;
var y = 12;

var myBoolean = (x>3 || y <10); // true


console.log(myBoolean)
console.log("---------------------")
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("---------------------")
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("---------------------")
console.log(!true);
console.log(!false);
console.log("---------------------")


















/* 49. Les  bases de Javascript : Conditions*/

var speed = 70;

if(speed < 80)
{
    console.log("Tu roules a la bonne vitesse");
}

else if (speed < 100) // Si je mets 90, ça sera ici
{
    console.log("Il faut que tu ralentisses un petit peu");
}

else // Si je mets 110 ça sera ici
{
    console.log("Tu roules beaucoup trop vite, c'est dangereux !");
}

console.log("---------------------")



var speed = 70;

if(speed < 80)
{
    if(speed < 50) // Si je mets 40 ça sera ici
    {
        console.log("Acceleres un petit peu");
    }
    else // Si je mets 51 ça sera ici
    {
        console.log("Tu roules a la bonne vitesse");
    }
}

else if (speed < 100) // Si je mets 90, ça sera ici
{
    console.log("Il faut que tu ralentisses un petit peu");
}

else // Si je mets 110 ça sera ici
{
    console.log("Tu roules beaucoup trop vite, c'est dangereux !");
}

console.log("---------------------")

var favoriteColor = "blue"; // "red" / "green" / "yellow" (je ne connais pas ta couleur !)


switch(favoriteColor)
{
    case "blue":
        console.log("Wouah ! le bleu c'est trop beau");
        break;

    case "red":
        console.log("J'aimerais bien une voiture rouge");
        break;

    case "green":
        console.log("J'aimerais que mon camion soit vert");
        break;

    default:
        console.log("Je ne connais pas ta couleur !")
}

console.log("---------------------")

var favoriteColor = "pink";


switch(favoriteColor)
{
    case "pink": // si c'est pink ou le blue ça fait ce code là (car ils sont liés)
    case "blue":
        console.log("Wouah ! le bleu et le rose c'est trop beau");
        break;

    case "red":
        console.log("J'aimerais bien une voiture rouge");
        break;

    case "green":
        console.log("J'aimerais que mon camion soit vert");
        break;

    default:
        console.log("Je ne connais pas ta couleur !")
}



















/* 50. La base de Javascript : Loops (Boucles) */



