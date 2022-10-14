function Zufallszahl()
{
    let result = 0;
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    console.log(num1 + num2);
    result = parseInt(Math.random() * (num2 - num1) + num1);
    
    
    console.log(result);
    document.getElementById("text").textContent = "Your number: " + result;
}