//4.Fibonacci Series: Write a program that
//prints the first n numbers of the Fibonacci series.
//0,1,1,2,3,5,8........


function fibonacciSeries(n)
{
    let t1=0;
    console.log(t1);
    let t2=1;
    console.log(t2);

    let fib=0;

    for(let i=1; i<=n-2; i++)
    {

        fib=t1+t2;
        console.log(fib);

        t1=t2;
        t2=fib;

    }
}

fibonacciSeries(5);
fibonacciSeries(10);
fibonacciSeries(3);



