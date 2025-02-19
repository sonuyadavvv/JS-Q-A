//2.Sum of Numbers: Write a function that takes a number n as input
//and returns the sum of numbers from 1 to n using a for loop.

function sumOfNumbers(n)
{
    let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}

console.log(sumOfNumbers(6));
console.log(sumOfNumbers(4));

