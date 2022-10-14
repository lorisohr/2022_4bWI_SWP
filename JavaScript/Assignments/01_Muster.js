let char = 'X'


for(let i = 1; i <= 16; i++)
{
    process.stdout.write(char);
    if(i % 4 == 0)
    {
        console.log("")
        if(char == "X")
        {
            char = "O"
        }
        else
        {
            char = "X"
        }
    }
}
console.log("");

let result = 0;
for(let i = 0; i <= 100; i++)
{
    if(i%2==0)
    {
        result += i
    }
}
console.log(result);
console.log("");

for(let i = 0; i < 8; i++)
{
    if(i < 3)
    {
        console.log("X");
    }
    else
    {
        process.stdout.write("X")
    }
}