var addTask = document.querySelector(".add");
const submit = document.querySelector(".submit");
var pendingTaskList = document.querySelector('.pending-tasks-list');

var completedTaskList = document.querySelector('.completed-tasks-list');

var deleteBtn = document.querySelector('.deleteBtn');
var done = document.querySelectorAll('.doneBtn');


var todoLocal = { 
    item:localStorage.getItem('todoLocal'),
};

var doneLocal = {
    item:localStorage.getItem('doneLocal'),
};


function loadData() {
    console.log("Data Loaded");
    pendingTaskList.innerHTML = todoLocal.item;
    completedTaskList.innerHTML = doneLocal.item;
}
loadData();

submit.addEventListener('click', (event) => {
    if (addTask.value !== "") {
        let newTask = `
        <li><div class="doneBtn"><i class="fa fa-check-circle-o" aria-hidden="true"></i></div><div class="addedTasks">${addTask.value}</div><div class="deleteBtn"><i class="fa fa-trash-o" style="font-size:36px"></i></div></li>
        `
        pendingTaskList.innerHTML += newTask;
        addTask.value = null;

        localStorage.setItem('todoLocal', pendingTaskList.innerHTML);
        localStorage.setItem('doneLocal', completedTaskList.innerHTML);
    }
    // doneBtn=document.querySelectorAll(".doneBtn");
    todoLocal.item = localStorage.getItem('todoLocal');
    doneLocal.item = localStorage.getItem('doneLocal');
    loadData();
})

pendingTaskList.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.classList.contains('fa-check-circle-o')) {
        console.log(event.target.parentElement.parentElement.childNodes[1]);
        let moveTask = `<li><div class="completed">${event.target.parentElement.parentElement.childNodes[1].innerHTML}</div><div class="deleteBtn"><i class="fa fa-trash-o" style="font-size:36px"></i></div></li>`;
        completedTaskList.innerHTML += moveTask;
        event.target.parentElement.parentElement.remove();
        localStorage.setItem('doneLocal', completedTaskList.innerHTML);
        // console.log(pendingTaskList);
        // console.log(completedTaskList);
        localStorage.setItem('todoLocal', pendingTaskList.innerHTML);
        
    }

    if (event.target.classList.contains('fa-trash-o')) {
        event.target.parentElement.parentElement.remove();
        
        console.log(pendingTaskList);
        console.log(completedTaskList);
        localStorage.setItem('doneLocal', completedTaskList.innerHTML);
        
        localStorage.setItem('todoLocal', pendingTaskList.innerHTML);
    }
})


completedTaskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-trash-o')) {
        event.target.parentElement.parentElement.remove();
        
        console.log(pendingTaskList);
        console.log(completedTaskList);
        localStorage.setItem('doneLocal', completedTaskList.innerHTML);
        
        localStorage.setItem('todoLocal', pendingTaskList.innerHTML);
    }
})


