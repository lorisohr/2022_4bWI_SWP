
for(let i = 0; i <= 10; i ++)
{
    let random = Math.random() * 10;
    let randomInt = Math.round(random);

    switch(randomInt)
    {
        case 10:
            console.log("Die Zahl ist 10");
            break;
        case 5:
            console.log("Die Zahl ist 5");
            break;
        case 2:
            console.log("Die Zahl ist 2");
            break;
        case 4:
            console.log("Die Zahl ist 4");
            break;
        default:
            console.log("Keine der 4 Zahlen")
            break;
    }
}