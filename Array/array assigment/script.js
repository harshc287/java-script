let tasks = []
 
function renderTasks(){
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = tasks
        .map((task, index) => {
          return `<li class="list-group-item m-3 ">${task} 
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
    <p>Total Marks: ${total}</p>
    <p>Average Marks: ${avg}</p>
    <p>Highest Mark: ${highest}</p>
    <p>Lowest Mark: ${lowest}</p>`
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