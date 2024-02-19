let addMessage = document.querySelector('.input'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = []

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
    
addButton.addEventListener('click', function(){

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false,
    };
    
    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages(){

    let displayMessage = ``;

    todoList.forEach(function(item, index){
        displayMessage += `

        <li>

            <input type = 'checkbox' id='item_${index}' ${item.checked ? 'checked':''}>
            <label for = 'item_${index}' class="${item.important ? 'important' : ''}">${item.todo}</label>
            <img src = "static/img/delete.png" alt = "delete" style = "height: 15px" class = "delete" data-index="${index}">

        </li>

        `;

        todo.innerHTML = displayMessage;
        
    })


}

todo.addEventListener('change', function(event){
    
    let valueLabel = todo.querySelector('[for=' + event.target.getAttribute('id') + ']').innerHTML;

    todoList.forEach(function(item){

        if(item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList))
        }
        else{
            console.log("mamammmm")
        }
    })

});

todo.addEventListener('click', function(event){

    // event.preventDefault();
    if(event.target.classList.contains('delete')){
        const index = event.target.getAttribute('data-index');
        todoList.splice(index, 1);
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(todoList))
        event.target.parentNode.remove(); 
        // return;
    }
    else{
        console.log("somethin ing th")
    }

});
todo.addEventListener('change', function(event){
    if(event.target.type === 'checkbox') {
        const label = event.target.nextElementSibling; // Get the label element next to the checkbox
        label.classList.toggle('completed', event.target.checked); // Toggle the completed class based on the checkbox state
    }
});