arr = [];
function addToArray() {
    const input = document.querySelector('.inp');
    const name = input.value;
    const dateInputElement = document.querySelector('.date');
    const dueDate = dateInputElement.value;
    arr.push({
        // name:name,
        // dueDate:dueDate,
        name,
        dueDate
    });
    console.log(arr);

    renderTodo();
    
    input.value  = '';
}
function renderTodo(){

    let htmlAdder = '';

    for(let i=0;i<arr.length;i++){
        const todoObject = arr[i];
    
        // console.log(todoObject);
    
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name,dueDate} = todoObject;

        const html = `<p>${name} ${dueDate} 
        <button onclick = "arr.splice(${i},1); renderTodo(arr)" >Delete </button> </p>`
        htmlAdder+=html;
    }

    document.querySelector('.paraContainer').innerHTML = htmlAdder;
}