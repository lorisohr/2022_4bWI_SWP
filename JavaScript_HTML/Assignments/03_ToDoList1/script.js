let tasks = ["putzen"];

document.getElementById("button").addEventListener("click", function()
{
    let taskToAdd = document.getElementById("input").value
    tasks.push(taskToAdd);
    console.log(tasks);
    let html = "";
    tasks.forEach(element =>
        {
            html += "<li>" + element + "</li>"
        });
        document.getElementById("list").innerHTML = html;
    console.log(tasks);
});

