inputElement = document.querySelector('#InputString')
resultElement = document.querySelector('#result')

function capitalise(){
    inputText = inputElement.value
    resultElement.textContent = inputText.toUpperCase()
}

function convertSmallCase(){
    inputText = inputElement.value
    resultElement.textContent= inputText.toLowerCase()
}

function CountVolves() {
           
    let text = inputElement.value;        
 // Count vowels
    let count = 0;
    let vowels = "aeiouAEIOU";
    let foundVowels = [];
            
// Loop through each character
     for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
            foundVowels.push(text[i]);
            }
        }      
 // Display result
        resultElement.innerHTML  = count       
        }

function extractWord() {
  // Get the text entered by the user from the input box
  // .trim() removes any extra spaces from the start and end
  let sentence = inputElement.value.trim();

  // This will hold the first word we build
  let firstWord = "";

  // Loop through each character in the sentence one by one
  for (let i = 0; i < sentence.length; i++) {
    // If we find a space, that means the first word has ended
    if (sentence[i] === " ") {
      break; // stop the loop right here
    }

    // Otherwise, add the character to firstWord
    firstWord += sentence[i];
  }

  // Show the result in the "resultElement" box
  resultElement.innerHTML = "First word: " + firstWord;
}

function checkConsonants() {
  // 1. Get the user input text and clean spaces at start/end
  let sentence = inputElement.value.trim();

  // 2. Define vowels so we can exclude them
  let vowels = "aeiouAEIOU";

  // 3. Counter to keep track of consonants
  let count = 0;

  // 4. Store the consonants we find
  let consonantsFound = [];

  // 5. Loop through each character in the input
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    // Check if the character is a letter (a-z or A-Z)
    if (/[a-zA-Z]/.test(char)) {
      // If it's NOT a vowel → it's a consonant
      if (!vowels.includes(char)) {
        count++;
        consonantsFound.push(char);
      }
    }
  }

  // 6. Display the result in your result box
  resultElement.innerHTML = 
    "Total consonants: " + count + "<br>Consonants: " + consonantsFound.join(", ");
}

function checkPalindrome(){
    let Text = inputElement.value.trim(); //get what user typed and removed spaces bt trim()
    let small= Text.toLowerCase();          //Make it lowercase 
    let reversed= "";

    for (i = small.length-1; i>=0; i--){
        reversed += small[i]
    }
    if(small===reversed && small.length>0){
        resultElement.textContent= `"${Text}" is a Palindrome ✅`;
  } else {
    resultElement.textContent = `"${Text}" is NOT a Palindrome ❌`;
  }
}

function spacesCount(){
    let space = inputElement.value.trim()
    let count=0
    
    for (i=0; i<=space.length ; i++){
        if(space[i]===" "){
            count ++
        }
    }
    resultElement.textContent = "Number of spaces: " +count;
}


function countLines(){
    let text = inputElement.value
    let count = 0
    for (i=0; i<text.length ; i++){
        if(text[i]==="\n"){
            count++
        }
    }      
resultElement.textContent = "Number of lines: " +count;
}

function replaceSpace(){
    let text= inputElement.value
    let result = ""
    for (i=0; i<text.length; i++){
        result += text[i]===" " ? "_":text[i]
        
    }
    resultElement.innerHTML = "After replacing spaces: " + result;
}

function reverseChar(){
    text = inputElement.value
    reversed = ""
    for(i=text.length-1 ; i>=0; i--){
        reversed += text[i]; // keep adding each char in reverse order
  }
  resultElement.innerHTML = "Reversed: " + reversed;
    }
