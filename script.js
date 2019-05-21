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

// Ajout
arraySimple.push("test", "ajout")
console.log(arraySimple)


// Suppression
// Dernière élément
arraySimple.pop()
console.log(arraySimple)

// première élément
arraySimple.shift()
console.log(arraySimple)

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3]]

// Fonction avec paramètres

function reusableFunction(a=5, b=6){
  console.log("Hello, World voici le calcul de " + a + "+" + b)
  console.log("c'est égale à " + (a + b))
  
}
reusableFunction(7, 9)

var myGlobal = 20;

function fun1(){
  var myVarFunction = 5;
  console.log(myVarFunction);
  var myGlobal = 35;
  return myGlobal;
}

fun1()
console.log(myGlobal) // Renvoi 20
console.log(fun1()) // renvoi 35
// console.log(myVarFunction) ne fonctionne pas

var recupMyGlobal = fun1()
console.log(recupMyGlobal)

// Boolean

function welcomBoolean(){
  return true
}

var testTrue = welcomBoolean()
console.log(testTrue)

// Condition 1

function trueOrFalse(self){
  if (self) {
    return "yes the true"
  }
  return "No that was false"
}

console.log(trueOrFalse("un élément"));

console.log(trueOrFalse());

// Condition 2 :

// != différent de
// == égalité avec conversion 55 et "55" : OK
// === égalité parfaite
// > supérieur à
// < inférieur à
// >= plus grand ou égal
// <= plus petit ou égal

function testEqual(val){
  
  if (val === 50){
    return "equal"
  }
  return "Not Equal"
}

console.log(testEqual(50));

// Condition 3 : opérateur and et or

function equalAnd(val, str) {
  if (val == 25 && str=="yes"){
    return "condition rempli"
  }
  return "Condition non rempli"
}

// OR
console.log(equalAnd(25, "yes"))

function or(val) {
  if (val == 25 || val == 50){
    return "condition rempli val = " + val
  } 
  else {
    return "Condition non rempli"
  }
}

console.log(or(50))

function testSize(num){
  if (num > 5 && num < 10 ){
    return "plus grand que 5"
  }
  
  else if (num > 10 && num < 20 ){
    return "plus grand que 10"
  }
  
  else if (num > 20){
    return "plus grand que 20"
  }
  
  else {
    return "plus petit que 5"
  }
}

console.log(testSize(6))

// Choix d'un index avec switch

function Switch(val){
  var answer = "";
  
    switch(val){
      
      case 1:
        answer = "alpha(1)";
        break;

      case 2:
        answer = "Beta(2)";
        break;
        
      // Resultat par défaut  
      default:
        answer = "stuff"
        
    };
    
  return answer
}

console.log(Switch())

// JavaScript object
var myDog = {
  "Name" : "Darky",
  "age" : 10,
  "Maitre" : "Thomas",
  "ville" : ""
  
}

var numbers = {
  7 : "Chance"
}

// accès au éléments objets

var nom = myDog.Name
var age = myDog["age"]
console.log(age)

var chiffre = numbers[7]
console.log(chiffre)
