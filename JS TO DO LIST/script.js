const inputbox = document.querySelector(".text-id");
const todolist = document.querySelector("#todo");

function addTask(){

    
    if(inputbox.value === ''){
        alert("Please enter a task");
    }
    else{
        const newTask = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        newTask.style.listStyleType = "none";

        newTask.appendChild(checkBox);
        newTask.appendChild(document.createTextNode(" "));
        newTask.appendChild(document.createTextNode(inputbox.value));
        
        todolist.appendChild(newTask);
        inputbox.value=" ";

        checkBox.addEventListener("change", function(){
            if(checkBox.checked){
                newTask.style.textDecoration = "line-through";
            }
            else{
                newTask.style.textDecoration = "none";
            }
        })

        
    }
}