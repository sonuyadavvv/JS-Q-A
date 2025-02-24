//6.Prime Number Checker: Write a function that takes a number as
//input and returns true if it's a prime number,
//and false otherwise.

function primeNumberChecker(n)
{
    let count=0;
    for(let i=2; i<=n; i++)
    {
        if(n%i===0)
        {
            count++;
        }
    }
    if(count<=2)
    {
            return true;
    }
    else
    {
        return false;
    }
}

console.log(primeNumberChecker(20));
console.log(primeNumberChecker(19));
console.log(primeNumberChecker(21));
console.log(primeNumberChecker(2));
