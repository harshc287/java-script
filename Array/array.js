arrayDemo = []                                      //empty array
console.log(typeof(arrayDemo))                       //it is object
                                                                       
fruits=['apple','mango','banana']
console.log(fruits, "length of arr",fruits.length)
console.log(fruits[fruits.length-1])

numArray = [1,2,3,4,5,6,7,8,9,10]


mixedArray = ['shrihari', 20 , 'pune', 'tcs']
mixedArray[3]

fruits.push('cherry')                               //add elements at last
console.log(fruits,"cherry added")

fruits.unshift('orange')
console.log(fruits ,"orange added at start")         //add elements at first index

fruits[3] = 'watermelon'                            //watermelon added at index 3
console.log(fruits, "watermelon added")

fruits[fruits.length] = "grapps"
console.log(fruits,"grapps added")

console.log(fruits.pop())                       //pop()Removes the last element of an array.Returns the removed element.
console.log(fruits.shift())                     // Removes the first element of an array.Returns the removed element.

console.log("slice", fruits.slice(1,4));            //slice(start, end) → copies part of an array into a new array, without changing the original.
fruits.splice(2,3,'pappya','pinaple','chiku','mosambi');    //splice(start, deleteCount, ...items) → changes the array by removing, replacing, or adding elements.
console.log(fruits);




len = fruits.length
for(i=0; i<fruits.length; i++)
    console.log(`i like to eat = ${fruits[i]}`)

lennumArray = numArray.length
for(z=0; z<lennumArray; z++)
    console.log("Square of :",numArray[z]," = " ,numArray[z]**2)

for(x=0; x<lennumArray; x++){
    if(numArray[x]%2==0){
        console.log('Even no: ', numArray[x])
    }
}



oddArray = []
evenArray= []
for(y=0; y<lennumArray; y++){
    if(numArray[y]%2==0){
        evenArray.push(numArray[y])
    }else(oddArray.push(numArray[y]))
}
console.log("Even no: ",evenArray)
console.log("odd no: ", oddArray)


//sum of array elements
let arraySum= 0
for(j=0; j<numArray.length; j++){
    arraySum += numArray[j]
}
console.log("Sum Of Array :",arraySum)


//largest no in array
let maxArray = numArray[0]
for(j=0; j<numArray.length; j++){
     if (numArray[j] > maxArray) {
    maxArray = numArray[j];
  }
}
console.log("Largest no is : ",maxArray)


//method 2
 let arr = [21 ,23,45,34 ,66,99]
let largest = Math.max(...arr);
console.log("Largest no is : ",largest); 


//reverse
reverseArr = []
for (i=arr.length-1; i>=0; i--){
    reverseArr.push(arr[i]);
}
console.log("Reverse no is: ",reverseArr);


//second largest
firstLarge = 0
secondLarge = 0
for (i=0; i<arr.length; i++){          //firstlargest
    if (arr[i] > firstLarge  ){
        firstLarge = arr[i] 
    }
    for(j=0; j<arr.length; j++){
        if (arr[j] > secondLarge && arr[j] < firstLarge) //check both condition for second large
        secondLarge = arr[j]
    }
    }

    console.log("first Largest no is : ",firstLarge)
    console.log("Second Largest no is : ",secondLarge)


    //Merge two arrays without duplicates
function mergeArr(arr1, arr2){
    let result= []
    for(i=0; i<arr1.length; i++){
        if (!result.includes(arr1[i]))
        result.push(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++){
        if(!result.includes(arr2[j])){
            result.push(arr2[j])
        }
    }
    return result;
}                       //merge arry and remove duplicates 
console.log("ArrayMerge: ",mergeArr([1, 2, 3, 3, 4, 5], [3, 4, 5, 6, 7])); 



//Remove all duplicate elements in an array
let arr4 = [1, 2, 2, 3, 4, 4, 5];   //  original array with duplicates
let result = [];                  // empty array to collect unique values

for (let i = 0; i < arr4.length; i++) {    //outer loop: iterate every element in arr
   let current = arr4[i];                  //store current value we're checking
   let exists = false;                     //assume it's not in result yet

   for (let j = 0; j < result.length; j++) {  //inner loop: check result for same value
      if (result[j] === current) {            //strict equality check
         exists = true;                       //mark as found
         break;                               //stop inner loop early (optimization)
      }
   }

   if (exists === false) {    //if not found in result
      result.push(current);   //add current value to result
   }
}
console.log("Duplicates Removed :" ,result);

//second method
arr5 = [1,2,3,3,4,4,5,5,6,7,8]
let result1 = [];
for (let i = 0; i < arr5.length; i++) {
  let current1 = arr5[i];
  if (!result1.includes(current1)) {
    result1.push(current1);
  }
}
console.log("Duplicates Removed 2nd method:", result1);


//Find the intersection of two arrays
arr6 = [2, 1, 3, 4, 5, 8]
arr7 = [2, 3, 6, 4, 7]

result=[]

for(i=0; i<arr6.length; i++){
    let currentVlue = arr6[i]                   //stores current valve arr6 in currentvalue

    if(arr7.includes(currentVlue)){             //cheks wheather currentvalue is not in arr7//Check if that element exists in arr2
        if(!result.includes(currentVlue)){      //cheks wheather currentvalue is not in result(because we want unique intersection values)
            result.push(currentVlue)            //now push the all arry element include arr6 arr7 to the result

        }
    }
}
console.log("Intersection:", result);




    