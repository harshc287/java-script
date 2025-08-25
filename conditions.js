age= 20
if(age>=18){
    console.log('yes you can vote')
}else{
     console.log('no you can vote')
}

//grade percentage
marks = 50

if(marks>=0 && marks <=100){
if(marks < 35){
    console.log("grade d")
}else if(marks >=35 && marks <=65){
    console.log("grade c")
}
else if(marks >65 && marks <=85){
    console.log("grade b")
}else{
     console.log("grade a")
}
}else{
    console.log("invalid")
}

//calculator
n1=10
n2=20

op='-'  //subtract  //multi  //div //modules  
result=0
switch(op){
    case '+':
        result=n1+n2

        break

    case '-':
        result=n1-n2
}

console.log(n1, op, n2 , ' = ' , result)


//table
n1=13
for(i = 1; i<=10; i++){
    console.log(n1 , '*' ,i, '=' , n1*i)
}

//find even odd

for(j=0; j<=20 ; j++){
    if(j % 2 ==0){
        console.log(j)
}
}
//odd
for(j=0; j<=20 ; j++){
    if(j % 2 !=0){
        console.log(j)
}
}

//while loop

a = 1
while(a<=10){
    console.log(n1 * a, '13*a')  //n1 defined to for 
    a++
}

//do while
b=1
do{
    console.log(n1*b , 'n1 * b in do while')
    b++
}while(b<=10)


x=  3
while(x<=30){
    console.log(x ,' x in while ')
    x+=3
}

for(x=3; x<=30; x+=3 )
    console.log(x , 'in for loop')

//number check positive or negative
let num= 4
console.log("Enter A number", num);

if( num >0 ){
    console.log("The No. is Positive")
}else{
    console.log("The No. is Negative");
    
}

//table

for (i = 1; i<=10; i++){
    console.log(" 4 * i =" ,i*num)
}

//even number

for (i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}

//sum of digits

numsum= 12345
sum= 0

function sumofdigits(n){
   Math.abs(n)
   while(n>0){
    digit= n % 10 
    sum = sum+digit
    n = Math.floor(n/10)
    }
    return sum
}
console.log( "sum of digits = :", sumofdigits(numsum))

//fizz buzz
for(i = 1; i<=20; i++){
    if(i % 3==0 && i % 5== 0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz") 
    }else{
        console.log(i)
    }
}
