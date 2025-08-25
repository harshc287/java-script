function greeting(){
    console.log("hello boys simple function")           //simple function
}
greeting()       //calling function

//function with return

function greetingreturn(){
    return 'function with return'          
}
boys = greetingreturn()  //calling fun
console.log(boys)

//arrow function
arrowgreat = ()=> console.log("arrow function")
arrowgreat()

const greetwithreturnarrow=()=> 'hello from return arrow '
arrow = greetwithreturnarrow()
console.log(arrow)

                
let result = 1                      //factorial
function factorial(n){
    for (i = n; i>=1; i--){
        console.log(i)
       result=  result * i 

    }
    return result
}
console.log("Factorial of 5", factorial(5))

                                // even odd check
function checkevenodd(n){
    if(n%2==0){
       return n + " is even no"
    }else{
        return n + " is odd no"
    }
    
}
console.log( checkevenodd(12))


                                //find Largest no
function checkLargest(n1,  n2, n3){
    if(n1>n2  && n1>n3){
        return n1 + ' largest'
    }else if(n2>n1  && n2>n3){
        return n2 +    ' largest'
}else{
    return n3 + 'is largest'
}
}
console.log(checkLargest(20, 45 , 67))


//area periemeter
function AreaperimeterRectangle(l,w){
    area = l*w
    peri = 2*(l+w)
    return "Area is "+ area + "and perimeteris " +peri
}
console.log(AreaperimeterRectangle(10 , 10))

//highest comon factor

function gcd(a,b){
    while(b!==0){
        let temp = b;
        b = a%b
        a = temp
        
    }
    return a;
}
console.log("GCD of 12 and 15 : ", gcd(12, 15))

num = 12345
let reverseNum = 0
function reverseNumber(n){
    n = Math.abs(n)
    while(n>0){
        digit= n%10
        console.log(digit)
        reverseNum = reverseNum*10 + digit    
        console.log("reverse in ite", reverseNum)
        n = Math.floor(n/10)
        console.log('n in iteration', n)

    }
    return reverseNum
}
console.log(reverseNumber(num))