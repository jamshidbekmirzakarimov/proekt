// Get elements
const elFormInput = document.querySelector(".js-form-input");
const elProgressBar = document.querySelector(".js-progress-bar");
const elResultOne = document.querySelector(".js-result-one");
const elResultTwo = document.querySelector(".js-result-two");

// Database
const todos = [];
const dones = [];

function progress(){
    let percent = dones.length * 100 / (dones.length + todos.length);
    elProgressBar.style.width = percent + "%";
}

function checkTodo(index){
    dones.push(todos[index]);
    todos.splice(index, 1);
    drawPage();
    progress();
}

function deleteTodo(index){
    dones.splice(index, 1);
    drawPage();
    progress();
}

function drawPage(){
    let resultOne = "";

    for(let i = 0; i < todos.length; i++){
        resultOne += "<div class='alert alert-primary d-flex justify-content-between align-items-center'>"+ todos[i] +" <button class='btn btn-primary' type='button' onclick='checkTodo("+ i +")'>&check;</button></div>";
    }

    elResultOne.innerHTML = resultOne;

    let resultTwo = "";

    for(let i = 0; i < dones.length; i++){
        resultTwo += "<div class='alert alert-secondary d-flex justify-content-between align-items-center'>"+ dones[i] +" <button class='btn btn-danger' type='button' onclick='deleteTodo("+ i +")'>&times;</button></div>";
    }

    elResultTwo.innerHTML = resultTwo;
}

function addTodo(){
    const inputValue = elFormInput.value.trim();

    todos.push(inputValue);

    elFormInput.value = "";
    drawPage();
    progress();
}

