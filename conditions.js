age= 20
if(age>=18){
    console.log('yes you can vote')
}else{
     console.log('no you can vote')
}


marks = -50

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

for(j=0; j<=20 ; j++){
    if(j % 2 !=0){
        console.log(j)
}
}