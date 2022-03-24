// // // // // // // // //Solve the problem with Javascript  to find the maximum between two numbers.
var number1 = 102;
var number2 = 202;
if (number1 > number2)
{
    console.log("First Number is Bigger");
}
else
{
    console.log("Sceond Number Is bigger");
}



// // // // // // // //Solve the problem with Javascript  to find a maximum between three numbers.
var number1 = 102;
var number2 = 202;
var number3 = 156;
if(number1 && number2<number3)
{
    console.log("Number 3 is bigger number");
}
else if(number1 && number3<number2)
{
    console.log("Number 2 is bigger number");
}
else
{
    console.log("Number 1 Is Bigger Number");
}

// // // // // // // //Another Way

var number1 = 102;
var number2 = 202;
var number3 = 156;
var bigger;
if(number1>number2 && number3){
   bigger=number1;
}
else if(number2>number1 && number3)
{
   bigger=number2;
}
else
{
   bigger=number3;
}
console.log("The Bigger Number is :",bigger);


// // // // // // //Solve the problem with Javascript  to check whether a number is negative, positive or zero.
var number = 0;

if(number>0){
    console.log("Number Is Positive");
}
else if(number<0)
{
    console.log("Number is Negative");
}
else{
    console.log("number is ZERO");
}




// // // // // //Solve the problem with Javascript  to check whether a number is divisible by 40 or not.
var number = 80;
if(number % 40 == 0){
    console.log("number is divisible by 40");
}
else{
    console.log("number is not divisible by 40");
}



// // // // //Solve the problem with Javascript  to check whether a number is even or odd.

var number = 125;
if(number % 2 == 0)
{
    console.log("Number Is EVEN");
}
else{
    console.log("Number Is ODD");
}


// // // //Solve the problem with Javascript  to check whether a character is in the alphabet or not.

var char = '$';
if( (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
    console.log("character is the alphabet");
}
else{
    console.log("character is NOT a alphabet");
}


// // //Solve the problem with Javascript  to check weather the temperature is hot, cold or normal
var temperature = 'hot';
if(temperature == 'hot'){
    console.log("weather's temperature is hot");
}
else if(temperature == 'cold'){
    console.log("weather's temperature is cold");
}
else
{
    console.log("weather's temperature is Normal");
}



// // Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
// // Find out if the average grade:
// // If Percentage >= 90% then print “Grade A”
// // Percentage >= 80% : Grade B
// // Percentage >= 70% : Grade C
// // Percentage >= 60% : Grade D
// // Percentage >= 40% : Grade E
// // Percentage < 40% : Grade F

var math = 89;
var english = 78;
var physics = 76;
var total = 0;
var Percentage = 0;

total = math + english + physics;
Percentage = total/3;
console.log(total);
console.log(Percentage);

if(Percentage >= 90){
    console.log("Grade A");
}
else if(Percentage >= 80){
    console.log("Grade B");
}
else if(Percentage >= 70){
    console.log("Grade C");
}
else if(Percentage >= 60){
    console.log("Grade D");
}
else if(Percentage >= 40){
    console.log("Grade E");
}
else{
    console.log("Grade F")
}

