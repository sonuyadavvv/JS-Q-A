//7a.write a function which print a triangle by stars.

function triangle1()
{

    for(let i=1;i<=5;i++)
    {
        let stars='';
        for(let k=1; k<=5-i; k++)
        {
            stars+=' ';
        }

        for(let j=1; j<=i; j++)
        {
            stars+='*'
        }
        console.log(stars);
    }
}

triangle1();


function triangle2()
{
    for(let i=1; i<=5; i++)
    {
        let stars='';
        for(let k=1; k<=5-i; k++)
        {
            stars+=' ';
        }
        for(let j=1; j<=i; j++)
        {
            stars+='*';
        }
        for(let l=2; l<=i; l++)
        {
            stars+='*';
        }
        console.log(stars);
    }
}

triangle2();

//second way---->


function triangle3()
{
    let m=1;
    let n=10;
    for(let i=1; i<=n; i++)
    {
        let stars='';
        for(let k=1; k<=n-i; k++)
        {
            stars+=' ';
        }
        for(let j=1; j<=m; j++)
        {
            stars+='*';
        }
        console.log(stars);
        m=m+2;
    }
}

triangle3();
