//3/.Factorial: Write a function that takes a number as input and
//returns its factorial using a while loop.

function factorial(n)
{
    let fact=1;
    let i=n;
    while( i>=1)
    {
        fact=fact*i;
        i--;
    }
    return fact;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(10));

