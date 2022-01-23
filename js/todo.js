const todoInput = document.querySelector("#todo input");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todo")

const todo_key = "todos";

let arrTodo = [];

function goTodoSubmit(event) {
    event.preventDefault();
    const todoV = todoInput.value;
    todoInput.value = "";
    const newTodoV = {
        text: todoV,
        id: Date.now(),
    };
    arrTodo.push(newTodoV);
    goTodoList(newTodoV)
    saveTodo()
}


function saveTodo() {
    localStorage.setItem(todo_key, JSON.stringify(arrTodo));
}

function goTodoList(newList) {
    const li = document.createElement("li");
    li.id=newList.id;
    const span = document.createElement("span");
    span.innerText = newList.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", delTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function delTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    arrTodo = arrTodo.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}


todoForm.addEventListener("submit", goTodoSubmit);

const loadTodo = localStorage.getItem(todo_key);

if (loadTodo !== null) {
    const parsedTodo = JSON.parse(loadTodo);
    arrTodo = parsedTodo;
    parsedTodo.forEach(goTodoList);
}