let Monat = 31;
let Starttag = 1;
let stoploop = false;
let daycounter = 1;
let Korrektur = Monat + Starttag - 1;
let OffError = 1/7;

console.log("| MO | DI | MI | DO | FR | SA | SO |");
for(let i = 1; i < Monat + Starttag; i++)
{
    if(i >= Starttag + 1)
    {
        if(daycounter < 10)
        {
            if(i % 6 == 0 || i % 7 == 0)
            {
                process.stdout.write("| " + "WE" + " ");
            }
            else
            {
            process.stdout.write("|  " + daycounter.toString() + " ");
            }
        }
        else
        {
            if((i % (6 - (Math.ceil(OffError - 1))) == 0 && (i + 1) % 7 == 0) || i % 7 == 0 || i == 13)
            {
                process.stdout.write("| " + "WE" + " ");
            }
            else
            {
            process.stdout.write("| " + daycounter.toString() + " ");
            }
        }
        daycounter++;
        if(i % 7 == 0)
        {
            console.log("|");
        }
    }
    else
    {
        process.stdout.write("|    ")
    }
    OffError += 1/7;
}

if(Korrektur % 7 != 0)
{
    for(let i = 0; i < 7; i++)
    {
        if(Korrektur % 7 != 0)
        {
            process.stdout.write("|    ")
            Korrektur++;
        }
        else
        {
            if(Korrektur % 7 == 0)
            {
                process.stdout.write("|")
                break;
            }
        }
    }
}
