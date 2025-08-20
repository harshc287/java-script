//arthematic operations
let num1 = 12
let num2 = 12

console.log("Addition is :", num1 + num2)
console.log("subtraction is :", num1 - num2)
console.log("multiplication is :", num1 * num2)
console.log("division is :", num1 / num2)
console.log("modules is :", num1 % num2)

//comparision operators

console.log("Is num1 one is less than num2 :", num1 < num2)
console.log("Is num1 one is greater than num2 :", num1 > num2)
console.log("both are same or not :", num1 == num2)

//Logical Operator

let MathsScorre= parseFloat(prompt("enter math marks"));
let ScienceScore= parseFloat(prompt("enter science marks"));

let Eligible =(MathsScorre>=80) && (ScienceScore>= 80)
console.log("Approved", Eligible)

//assigment Operator
let x = 10;

console.log("initial value of x",x)

x+=5;
console.log("After adding 5", x)

x-=5;
console.log("After sub 5", x)

x*=5;
console.log("After multiply 5", x)

x/=5;
console.log("After division 5", x)

x%=5;
console.log("After modules 5", x)

//operator precedenc

 let expr1= 10 + 5 * 2
 let expr2= (10 + 5) * 2
 let expr3= 10 / 5 * 2
 let expr4= 10 / (5 + 2)

 console .log("10 + 5 * 2",expr1)
 console.log("(10 + 5) * 2", expr2)
  console.log("10 / 5 * 2", expr3)
   console.log("10 % (5 + 2)", expr4)

//combined example
let length = parseFloat(prompt("Enter Length"));
let Width = parseFloat(prompt("Enter Width"));

let area= length * Width
let Perimeter= 2*(length+Width)

console.log("area is :", area)
console.log("Perimeter is :", Perimeter)
console.log("is area is greater than perimetr", area>Perimeter)

let age = parseInt(prompt("Enter age :"))
let citizen = prompt("Are uhh citizen(true/false)?") === "true"

let canvote = (age>=18) && citizen
console.log("eligible to vote " , canvote)

let weight = parseFloat(prompt("Enter weight(kg): "));
let height = parseFloat(prompt("Enter height(ft): "));

let bmi= weight / (height * height)
console.log("BMI", bmi)

if (bmi< 18.5){
    console.log("categorey : underweight")
}else if(bmi>=18.5 && bmi<25){
    console.log("normal ")
}else if(bmi>=25 && bmi<30){
    console.log("overweight ")
}else{
    console.log("bhar fek diya shit")
}

//even odd

let NUM1=20
if (NUM1%2==0){
    console.log("no is even");
    
}else{
    console.log("no is odd");
    
}

//shopping discount
let userAmount = 150; 
let discountedAmount = calculateDiscountedAmount(userAmount);
function calculateDiscountedAmount(totalamount) {
  totalamount = parseFloat(totalamount);

  if (totalamount > 100) {
    totalamount -= totalamount * 0.1;
  }
  return totalamount;
}

console.log("discount", discountedAmount);




let totalamount= parseFloat(prompt("Enter no :"))
if (totalamount>100){
    totalamount -= totalamount*0.1
}
console.log("discount" ,totalamount)