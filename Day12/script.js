let colors=["#fd8e5f", "#63eaf0", "#fb66f8", "#225ad0"]

let addBtn= document.getElementById("add");
let todo=document.querySelector('input');

if(!localStorage.getItem("todos")){
    localStorage.setItem("todos", JSON.stringify({

    }));
}else{
    let todos=JSON.parse(localStorage.getItem("todos"));
    Object.entries(todos).forEach(todo=>{
        createTodo(todo[0], todo[1]);
    })
}

function createTodo(todo, status){
    let todoItems=localStorage.getItem("todos");
    
    let todoEl=document.createElement('div');

    if(status == "done"){
        todoEl.style.filter="grayscale(100%)";
        todoEl.style.opacity="0.7";
        todoEl.style.boxShadow="none";
    }
    let line=document.createElement('div');
    line.classList.add("line");
    line.style.backgroundColor=colors[Math.floor(Math.random()*4)];

    let p=document.createElement('p');
    p.innerHTML=todo;

    let btnsDiv=document.createElement('div');
    btnsDiv.classList.add('btns');

    let btn1=document.createElement('button');
    btn1.innerHTML="<i class='fas fa-check'></i>"

    btn1.addEventListener('click', (e)=>{   
        let todoItems=JSON.parse(localStorage.getItem("todos"));
        let todo=btn1.parentNode.previousSibling.innerHTML;
        todoItems[todo]="done";
        localStorage.setItem("todos", JSON.stringify(todoItems));
        btn1.parentNode.parentNode.style.filter="grayscale(100%)";
        btn1.parentNode.parentNode.style.boxShadow="none";
    })

    let btn2=document.createElement('button');
    btn2.innerHTML="<i class='fas fa-trash'></i>"
    btn2.addEventListener('click', (e)=>{
        let todoItems=JSON.parse(localStorage.getItem("todos"));
        let todo=btn2.parentNode.previousSibling.innerHTML;
        delete todoItems[todo];
        localStorage.setItem("todos", JSON.stringify(todoItems));
        btn2.parentNode.parentNode.style.display="none";    
    })

    btnsDiv.appendChild(btn1);
    btnsDiv.appendChild(btn2);

    todoEl.appendChild(line);
    todoEl.appendChild(p);
    todoEl.appendChild(btnsDiv);

    document.querySelector(".list").appendChild(todoEl);
}

addBtn.addEventListener('click', (e)=>{
    storeTodo();
})

function storeTodo(){
    if(todo.value == "")return;
    let todoItems=JSON.parse(localStorage.getItem("todos"));
    todoItems[todo.value]="not-done";
    localStorage.setItem("todos", JSON.stringify(todoItems));
    createTodo(todo.value);
    todo.value="";
}
