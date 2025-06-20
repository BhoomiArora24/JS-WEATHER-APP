const inputbox = document.querySelector(".text-id");
const todolist = document.querySelector("# todo");

function addTask(){
    if(inputbox.value === ''){
        alert("Please enter a task");
    }
    else{
        const newTask = document.createElement("li");
        newTask.innerHTML = inputbox.value;
        todolist.appendChild(li);
    }
}