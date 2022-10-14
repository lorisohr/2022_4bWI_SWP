function OnButtonClick(obj)
{
    var id = obj.id;
    console.log(id);
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let result = 0;
    if(id == "add")
    {
        result = num1 + num2;
    }
    else if(id == "subtract")
    {
        result = num1 - num2;
    }
    else if(id == "multiply")
    {
        result = num1 * num2;
    }
    else
    {
        result = num1 / num2;
    }
    console.log(result);
    document.getElementById("resulttext").textContent = result; 
}
