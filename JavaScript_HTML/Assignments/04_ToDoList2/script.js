var task1 = {name: "putzen", isDone: false, responsible: "Loris"}
var task2 = {name: "schwimmen", isDone: false, responsible: "Loris"}

const tasks = [task1, task2];
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

function getHTMLTasks() {
    let html = "";
    tasks.forEach(element =>
        {
            html += "<li>" + element.name + " - " + element.responsible + "</li>"
        });
        document.getElementById("list").innerHTML = html;
}

