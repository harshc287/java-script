userName = 'Harsh'
employee = "Rohan"
descriptiom= `Rohan Rohan Rohan         
                Rohan Rohan`

    console.log("shows the length of string:-",userName.length)
    console.log("shows the digit  of that index:-",employee[2])   //when out of index given shows Undefinrd
    console.log("Undefiend shows:-",employee.charAt(11))         //nothing shows when out of index given

    console.log("convert letters into capital:",userName.toUpperCase())      //to convert capital latters
    console.log("convert letters into small:",userName.toLowerCase())       //to convert small letter

    emptyStr = '                  '
    console.log("Showing the length of empty str:",emptyStr.length)             //space also counted
    console.log(emptyStr.trim().length)      //.trim() is a string method that removes whitespace from both the beginning and the end of a string.

      fruit = '     apple      '
    console.log(fruit.length);
    console.log(fruit.trim().length,);           //remove space from start and end
    console.log(fruit.trimStart().length);     //remove spaces from start
    console.log(fruit.trimEnd().length);     //remove spaces from end

    
    fName = 'Ajay'
    lName = 'Wankhede'
    fullName = fName + lName
    console.log(fullName)                   //output :- AjayWankhede
                                           
    console.log(fName.concat(' ',lName))  //output :- Ajay Wankhede    //gives the space using concat(' ')
    
    full_Name = `${fName} ${lName}`
    console.log(full_Name)              //output :- Ajay Wankhede    //gives the space using  `${}`

// Searching Strings
// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith(). 

   thought = 'Every Day is a new chance  to do something  good Day!!!'

    console.log(thought.indexOf('Day'))           //starts from start, left to right          //output 6
    console.log(thought.lastIndexOf('Day'))      //starts from last, right to left           //output 47
    console.log(thought.includes('chance'))     //check the string in indexes               //output true/false
    console.log(thought.startsWith('Every'))   //Checks if a string begins with the given text.
    console.log(thought.endsWith('!'))        //Checks if a string ends with the given text.

// Replacing Substrings
// .replace() and .replaceAll().

console.log(thought.replace("is","a"));
console.log(thought.replaceAll("Day ","a"));


// regular expression 
// regExp 
// .slice(), .substring(), .substr()

greet = 'Welcome Wisdom Sprouts'
console.log(greet.slice(0,7))          //print in between index are given index(start/end).It understands negative numbers (counting from the end).
console.log(greet.substring(22,0))    //It does not understand negatives.If you give it numbers in the wrong order, it will swap them for you.
console.log(greet.substr(15,3))       //start with given index start .substr(start, length) and print the length of index given

fruits = 'Apple Banana Mango'       //“Split this string every time you see a space.”So it cuts the string into parts wherever there’s a space " ".

console.log(fruits.split(' '))

