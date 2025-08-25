//sum of digits
numsum = 7654321
sum= 0

function sumofdigits(n){
    Math.abs(n)
    while(n>0){
        digit = n%10
        sum = sum+digit
       
        n = Math.floor(n/10)
    }
    return sum
}
console.log("sum of digits = ", sumofdigits(numsum) )

//fizzBuzz

for(i=1; i<=20; i++){
     if(i%3==0 && i%5==0){
        console.log("FizzBuzz")}
    else if( i%3 ==0){
        console.log("fizz")
    }else if(i%5==0){
        console.log("buzz")
    }else{
        console.log(i)
}   
}

//check prime number  method1
function checkPrime(number){
    // if(number % 2 !==0 && number%number==0){
    //     return "numb is prime number"
    // }else{
    //     return "no is not prime"
    // }

    //method2
    if(number<=0 ) return false
     if(number==1 ) return true
      if(number==2 ) return true
       if(number%2 ==0 ) return false
       for(i=3; i<=Math.sqrt(number); i++){
        if(number%i ==0){
            return false
        }
       }return true
}
console.log(checkPrime(1))
console.log(checkPrime(1))
console.log(checkPrime(21))
console.log(checkPrime(19))
console.log(checkPrime(20))

//find sum of even odd from 1-100
let evenNumsum =0 
let oddNumsum = 0
    for(i=1; i<=100; i++){
        if(i % 2== 0){
           evenNumsum = oddNumsum+i
        }else{
            oddNumsum = evenNumsum+i
        }
    }
    console.log(evenNumsum)
    console.log(oddNumsum)

//armstrom no
let xyz = 153
let temp = xyz
 sum = 0;
while(temp > 0){
    let digit = temp % 10
   
    sum = sum + digit**3
    temp = Math.floor(temp/10)
    
}
if(xyz==sum){
    console.log("its armstrong")
}else{
    console.log("its not")
}