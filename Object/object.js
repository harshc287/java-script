student = {
    name:'Harsh Chouhan',
    age:'22',
    grade:'66'
}
console.log(student);

student.math = 25
console.log(student);

student.age=23
console.log(student);

delete student.age
console.log(student);

book = {
    title:'AI',
    author:'Harsh',
    details:{
        pages:'20',
        genre:'niceBook'
    }
}
console.log(book.details.pages);

product = {
    name:'Mobile',
    price:'10000',
    stock:'100'
}

for(x in product){
    console.log(x,product[x])
}

//methode 
