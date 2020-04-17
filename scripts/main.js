'use strict';

const todoСontrol = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

const todoData = [];

const showText = function(){
    todoData.textContent = localStorage.myText;
}

todoСontrol.addEventListener('submit', function(){
    localStorage.myText = headerInput.value; 
    showText(); 
});

const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item){
    const li = document.createElement('li');
    li.classList.add('todo-item');  

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';   

            if(item.completed){
                todoCompleted.append(li)
            } else {
                todoList.append(li);
            }
        
        const btnTodoComplete = li.querySelector('.todo-complete')
       
        btnTodoComplete.addEventListener('click', function(){
            item.completed = !item.completed;
        render();
        });
        const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function(){
            li.remove(item);
        });

    });
};

todoСontrol.addEventListener('submit', function(event){
    if(headerInput.value === ''){
        todoControl.disabled = true;
    }else {
    event.preventDefault();

    const newTodo = {
        
        value: headerInput.value,
        completed : false
        
    };

    todoData.push(newTodo);
    headerInput.value = '';

    render();
    }
});
showText();
render();

// showText = function(){
//     todoList.textContent = localStorage.getItem('memory');
// };

// todoСontrol.addEventListener('submit', function(){
//     localStorage.setItem('memory', headerInput.value);
//     showText();
// });