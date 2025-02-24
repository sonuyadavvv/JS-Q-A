//7.Pattern Printing: Write a program that prints a
//pattern of stars (e.g., a triangle, a square, etc.)
//using nested loops.

function squareOfStars()
{

    for(let i=1; i<=5 ;i++)
    {
        let sqStars=''
        for(let j=1; j<=5; j++)
        {
           sqStars+='*'
        }
        console.log(sqStars);
    }
}

squareOfStars();

function triangleOfStars()
{
    let triStars='';
    for(let i=1; i<=5; i++)
    {
        for(j=i; j<=i; j++)
        {
            triStars+='*';
        }
        console.log(triStars);
    }
}
triangleOfStars();
