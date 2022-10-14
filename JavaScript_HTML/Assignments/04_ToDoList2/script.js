var task1 = {name: "putzen", isDone: false, responsible: "Loris"}
var task2 = {name: "schwimmen", isDone: true, responsible: "Loris"}

const tasks = [];

document.getElementById("button").addEventListener("click", function()
{
    addTask();
    getHTMLTasks();
    console.log(tasks);
});

function addTask()
{
    let taskName = document.getElementById("inputName").value
    let taskResponsible = document.getElementById("inputResponsible").value
    var newTask = {name: taskName, isDone: false, responsible: taskResponsible}
    tasks.push(newTask);
}

function markTask(element)
{ 
    if(element.checked)
    {
        tasks[element.attributes["data-index"].value].isDone = true;
    }
    else
    {
        tasks[element.attributes["data-index"].value].isDone = false;
    }
}

function getHTMLTasks() {
    let html = "";
    let checked = "";
    let index = 0;
    tasks.forEach(element =>
        {
            checked = "";
            if(element.isDone)
            {
                checked = "checked"
            }
            html += "<li><input onClick='markTask(this)' data-index='" + index + "' class='checkbox' type='checkbox' " + checked + "/>"+ element.name + " - " + element.responsible + "</li>"
            index++
        });
        document.getElementById("list").innerHTML = html;
}

