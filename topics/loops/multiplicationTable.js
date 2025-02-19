//5.Multiplication Table (nested loops):
//Write a program that prints the multiplication table (up to 10)
//for all numbers from 1 to n. Use nested for loops.

function multiplicationTable(n)
{
    for(let i=1; i<=n; i++)
    {
        console.log(`Table of:${i}`);
        for(let j=1;j<=10; j++)
        {
            console.log(i*j);
        }
    }
}

multiplicationTable(5);
