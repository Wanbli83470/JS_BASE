var number = 5;

// in-line comment

/* This is 
A
multiline
comment
*/

/* Data Types:
undefined, null, Boolean, String, Symbol, Number and Object
*/

var myName = "Thomas";
myName = 8;

let ourName = "ESTIVAL";

const pi = 3.14;

console.log(myName +" " +ourName + " " + pi);

var a;
var b = "b";

console.log(a + " " + b)

a = 7;

// Adding Numbers
var sum = 10 + 10;
console.log(sum);


// soustact Numbers
var difference = 10 - 10;
console.log(difference);

// division Numbers
var division = 10 / 2;
console.log(division);

// Increment numbers
var myNumber = 87;
console.log(myNumber)
myNumber ++;
console.log(myNumber)
myNumber--;
console.log(myNumber)
myNumber += 25
console.log(myNumber)


// Decimal
var Decimal = 5.6;
var product = 2 * 5.56
console.log(product)

// Gestion des guillemets
var myStr = "My name is \"Thomas\" mon chien est \"darky\""
console.log(myStr)

// Retour à la ligne
var myStr = "My name is \n \"Thomas\""
console.log(myStr)


// Concaténation
var myStr = "Premier morceau " + "Second morceau"
myStr += " \n Morceau 3 rajouté"
console.log(myStr)

var name = " Patrick"
var phrase = "Hello your name is " + name + " How are you ?"
console.log(phrase)
myStr += name

console.log(myStr)

// Lenght
var compteur = 0
var chaine = "7 lettres"

compteur = chaine.length
console.log(compteur)

// index
var letterOne = chaine[1];
console.log(letterOne);
var lastLetter = chaine[chaine.length - 1];
console.log(lastLetter);

function word(name, surname, age){
  var result = "";
  result += name + " " + surname + " " + age + " ans";
  
  return result;
}

var word_compile = word("Nathan", "Bouyou", 11)
console.log(word_compile)

console.log(word("Thomas", "ESTIVAL", 20))

// Tableau
var arraySimple = ["Jhon", 23]
console.log(arraySimple[1])

var arrayAdvance = [["table 1", 1],["table 2", 2]]
console.log(arrayAdvance[1]) //  On accède au tableau 1
console.log(arrayAdvance[1][1]) //  On accède à l'élément 2 du tableau 1

// Modif sur un idex précis
arraySimple[0] = "OK"
console.log(arraySimple[0])


















