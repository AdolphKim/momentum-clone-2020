const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");
let todos = [];
function delTodo(event){
    li = event.target.parentElement;
    span = li.querySelector("span");
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(span.id));
    saveTodo();
}
function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
}
function paintTodo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodoObj.text;
    span.id = newTodoObj.id;
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    todos.push(newTodoObj);
    saveTodo(newTodoObj);


    button.addEventListener("click",delTodo);
}
function submitTodo(event){
    event.preventDefault();
    const newTodoObj = {
        text : todoInput.value,
        id : Date.now()
    };
    paintTodo(newTodoObj);
    todoInput.value = "";
}

const todoSaved = JSON.parse(localStorage.getItem("todos"));
if(todoSaved){
    todoSaved.forEach(item => {
        paintTodo(item);
    });
}

todoForm.addEventListener("submit",submitTodo);
