let tasks = []
 
function renderTasks(){
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = tasks
        .map((task, index) => {
          return `<li class="list-group-item m-2 ">${task} 
          <button class="btn btn-info ms-4" onclick="removeTask(${index})">Delete</button>
          </li>`;
        })
        .join("");
    
}

function addTask(){
    input = document.getElementById("taskInput");
    taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

tasks.push(taskText)
input.value= ""
renderTasks()
}

function removeTask(index){
    tasks.splice(index,1)
    renderTasks();
}

function clearList() {
      tasks = [];      
      renderTasks();   
    }

//marks calculator

let marks = []
function addMark(){
  input= document.querySelector('#markInput').value
  let mark = Number(input)

  if(!isNaN(mark)){
    marks.push(mark);

    updateMarksList();

    document.querySelector('#markInput').value = "";
    // alert("Marks Added:" + mark)
  }else {
    alert("Please enter a valid number!");
  }
}

function updateMarksList(){
  let list = document.querySelector('#marksDisplay')

  list.innerHTML= ""

  marks.map((m,index)=>{
    let li = document.createElement("li")
    li.textContent= `mark ${index + 1}: ${m}`
    list.appendChild(li)
  })
}

function calculate(){
  if(marks.length === 0){
    alert("No Marks Enterd Yet!")
    return
  }
    let numbers = marks.map(m => m)
    let total = numbers.reduce((a , b) => a + b ,0)
    let avg = (total/numbers.length).toFixed(2)

    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    document.querySelector('#results').innerHTML=`
    <p class="lead">Total Marks: ${total}</p>
    <p class="lead">Average Marks: ${avg}</p>
    <p class="lead">Highest Mark: ${highest}</p>
    <p class="lead">Lowest Mark: ${lowest}</p>`
}
// function resetMarks() {
//   marks = [];
// document.querySelector('#marksDisplay').innerHTML = "";
// document.querySelector('#resetMarks').innerHTML= "";
// document.querySelector('#markInput').value = "";
// alert("All marks cleared!");
// } 
function resetMarks() {
  marks = [];

  const marksDisplay = document.getElementById('marksDisplay');
  if (marksDisplay) marksDisplay.innerHTML = '';

  const results = document.getElementById('results');
  if (results) results.innerHTML = '';

  const input = document.getElementById('markInput'); 
  if (input) input.value = '';  
}

//search array
cars = ['Audi', 'BMW','Hondyi', 'mahindra', 'Tesla', 'Tata']
inputSearch= document.querySelector('#inputSearch')

function search(){
  inputWord = inputSearch.value
  result= cars.find((c)=>c.toLowerCase()== inputWord.toLowerCase())
  console.log(result)
  if(result){
    document.querySelector('#resultSearch').innerHTML= result
  }else{
    document.querySelector('#resultSearch').innerHTML= 'NotFound'
  }
}

//evenOdd
num1elmt = document.querySelector('#num1')
let numberArray = []
function addNumbers(){
  numberArray.push(Number(num1elmt.value))
  num1elmt.value = ''
}

function clearArray(){
  numberArray=[]

}
//even
function showEvenNumbers(){
  evenNumbers = numberArray.filter((n)=> n%2==0)
  document.querySelector('#evenNum').innerHTML = evenNumbers
}

//odd
function showOddNumbers(){
  oddNumbers = numberArray.filter((n)=>n%2!=0)
  document.querySelector('#oddNum').innerHTML = oddNumbers
}
function clearArray(){
  numberArray=[]

  const evenNum = document.getElementById('evenNum');
  if (evenNum) evenNum.innerHTML = '';
  
    const oddNum = document.getElementById('oddNum');
  if (oddNum) oddNum.innerHTML = '';
}

//shortnames alphabetically
let sortNames= []
function addName(){
inputNames= document.querySelector('#inputName')
let name = inputNames.value.trim()

if(name){
  sortNames.push(name)
  inputNames.value = ""
  displayNames()
}
}

function shortName(){
  sortNames.sort()
  displayNames()
}


function displayNames(){
  let output = document.querySelector('#shortedNames')

  let listHTML= '<ul class=" list-unstyled">'
  sortNames.forEach((name, index) =>{
    listHTML += `<li>
                ${index + 1}.${name}                
                </li>`
  });
  listHTML += "</ul>";
  output.innerHTML = listHTML;
}

function resetName(){
  const shortedNames = document.getElementById('shortedNames');
  if (shortedNames) shortedNames.innerHTML = '';
}
