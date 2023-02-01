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
console.log("---------------------")


















/* 50. La base de Javascript : Loops (Boucles) */


var number = 0;

while(number<3)
{
    console.log(number);
    number++;
}

// Il s'arrête à 2 car 3 n'est pas < qu'à 3
console.log("---------------------")



var number = 0;

do
{
    console.log(number);
    number++;
}
while(number<3)
// La même chose mais inversé
console.log("---------------------")


var number = 0;


do
{
    console.log(number);
    number++;
}
while(number>0 && number<3)
// ça sera entre 0 et 3
console.log("---------------------")


/* for(Partie1; Partie2; Partie3)
{
    Code A Executer
}
*/

for(var number = 0; number < 5; number++)
{
    console.log(number);
}
// Partie1 : j'initialise ma variable (0)
// Partie2 : je vérifie ma condition (number < 5) / Oui alors j'execute mon code
// Partie3 : Je rajoute +1

// Tant que le number est inférieur à 5 alors le code est imprimé
console.log("---------------------")



















/* 51. Les bases de Javascript : Fonctions */



/* function name(parameter1, parameter2, etc...)
{
    Code A Executer
    return result;
}
*/ 

function multiply(number1, number2,number3)
{
    return number1*number2*number3;
}

var a = 5;
var b = 6;

var result = multiply(a,b,a);

console.log(result);
console.log("---------------------")



















/* 52. Les bases de Javascript  : Scope */








function multiply(number1,number2,number3)
{
    var resultMultiply = number1*number2*number3; // On peut retirer la var mais en échange il faut aussi retirer le "*2" au return


    return resultMultiply*2;
}

var a = 5;
var b = 6;
var result = multiply(a,b,a);

console.log(result);






console.log("---------------------")



























/* 53. La base de Javascript : Arrays (Tableaux) */


// var name = [valeur1, valeur2, valeur3];



var fruits = ["Pomme", "Banane", "Orange", "Citron"];
             // 0         1         2         3

console.log(fruits.length);

// Indiquer "4"



console.log("---------------------")




var fruits = ["Pomme", "Banane", "Orange", "Citron"];
             // 0         1         2         3

console.log(fruits[0]);

// Indiquer "Pomme"



console.log("---------------------")




var fruits = ["Pomme", "Banane", "Orange", "Citron"];
             // 0         1         2         3

console.log(fruits);

// Indiquer tout (en ligne)


console.log("---------------------")



var fruits = ["Pomme", "Banane", "Orange", "Citron"];
             // 0         1         2         3

for(var i = 0; i < fruits.length; i++)
                      // 4
{
    console.log(fruits[i]);
}






console.log("---------------------")





var fruits = ["Pomme", "Banane", "Orange", "Citron"];

fruits.push("Kiwi");

console.log(fruits);




console.log("---------------------")



var fruits = ["Pomme", "Banane", "Orange", "Citron"];

console.log(fruits);
fruits.pop();
console.log(fruits);



console.log("---------------------")



var fruits = ["Pomme", "Banane", "Orange", "Citron"];


var agrumes = fruits.slice(2,4); //Le 2 inclu et on s'arrête au 4 (non inclus)

console.log(agrumes);








console.log("---------------------")




var myArray = [[0,1] , [5,7,8] , [12,18]];
              // 0        1         2
            //  0 1     0,1,2      0,1

console.log(myArray[1] [1]);







console.log("---------------------")
















/* 54. Les bases de Javascript : Objets */






/* var object =
{
    propertyName: propertyValue1,
    propertyName: propertyValue2,
    method1: function()
    {

    }
};
*/





var dog = 
{
    name: "Choupette",
    color: "white",
    age: 4
};


console.log(dog.name);

// Pour écrire le nom du chien dans le code



console.log("---------------------")


var dog = 
{
    name: "Choupette",
    color: "white",
    age: 4
};


console.log(dog["color"]);

// Une autre façon mais qui revient au même


console.log("---------------------")




var dog = 
{
    name: "Choupette",
    color: "white",
    age: 4
};

for(var property in dog)
{
    console.log(dog[property]);
}


console.log("---------------------")




var dog = new Object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5

for(var property in dog)
{
    console.log(dog[property]);
}

// La même chose, mais d'une autre façon






console.log("---------------------")





var dog = new Object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5
dog.aboie = function() {console.log("Wouaf Wouaf")}; // Méthode


dog.aboie(); // Sinon ça ne s'écrit pas "wouaf wouaf"




console.log("---------------------")




var dog = new Object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5
dog.aboie = function(number)
{
    while(number>0)
    {
        console.log("Wouaf")
        number--; // Pour éviter l'infinie 
    }
};


dog.aboie(4); 



console.log("---------------------")




var dog = new Object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5
dog.aboie = function(number)
{
    while(number>0)
    {
        console.log(number.toString() + " Wouaf");
        number--; 
    }
};

dog.aboie(4);





console.log("---------------------")







/* 55. Les bases de JavaScript : Fonctions Constructeurs */









function Dog(name, color, age)
{
    this.name = name;
    this.color = color;
    this.age = age;
}

var petitCaniche = new Dog("Choupette", "White", 4);

// var grosPitbull = new Dog("Rex", "black", 2);

console.log(petitCaniche);
// console.log (grosPitbull);



console.log("---------------------")






function Dog(name, color, age)
{
    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function()
    {
        console.log("Wouaf ", this.name);
    }
}

var petitCaniche = new Dog("Choupette", "White", 4);
var grosPitbull = new Dog("Rex", "black", 2);


petitCaniche.aboie();
grosPitbull.aboie();

