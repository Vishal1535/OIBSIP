// script.js

const taskInput = document.getElementById('taskInput');

const taskList = document.getElementById('taskList');

const taskCount = document.getElementById('taskCount');

let tasks = [];

function addTask(){

  const taskValue = taskInput.value.trim();

  if(taskValue === ''){

    alert('Please enter a task');

    return;
  }

  const task = {

    id:Date.now(),

    text:taskValue,

    completed:false
  };

  tasks.push(task);

  taskInput.value = '';

  renderTasks();
}

function renderTasks(filteredTasks = tasks){

  taskList.innerHTML = '';

  filteredTasks.forEach((task)=>{

    const li = document.createElement('li');

    li.classList.add('task');

    if(task.completed){

      li.classList.add('completed');
    }

    li.innerHTML = `

      <div class="task-left">

        <input 
          type="checkbox"
          ${task.completed ? 'checked' : ''}
          onchange="toggleTask(${task.id})"
        >

        <span>${task.text}</span>

      </div>

      <div class="task-buttons">

        <button 
          class="complete-btn"
          onclick="toggleTask(${task.id})"
        >
          Done
        </button>

        <button 
          class="delete-btn"
          onclick="deleteTask(${task.id})"
        >
          Delete
        </button>

      </div>

    `;

    taskList.appendChild(li);

  });

  updateTaskCount();
}

function toggleTask(id){

  tasks = tasks.map((task)=>{

    if(task.id === id){

      return{

        ...task,

        completed:!task.completed
      };
    }

    return task;
  });

  renderTasks();
}

function deleteTask(id){

  tasks = tasks.filter((task)=> task.id !== id);

  renderTasks();
}

function clearAllTasks(){

  tasks = [];

  renderTasks();
}

function updateTaskCount(){

  taskCount.innerText = `Total Tasks : ${tasks.length}`;
}

function filterTasks(type){

  if(type === 'completed'){

    const completedTasks = tasks.filter((task)=> task.completed);

    renderTasks(completedTasks);
  }

  else if(type === 'pending'){

    const pendingTasks = tasks.filter((task)=> !task.completed);

    renderTasks(pendingTasks);
  }

  else{

    renderTasks();
  }
}