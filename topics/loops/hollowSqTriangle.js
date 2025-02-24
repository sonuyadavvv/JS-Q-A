//7b.write a function which print hollow square and hollow triangle of stars.


function hollowSquare()
{

    let n=5;

    for(let i=1; i<=n; i++)
    {
        let stars='';

        if(i===1 || i===n)
        {
            for(let j=1; j<=n; j++)
            {
                stars+='*';
            }
        }
        else
        {
            for(let k=1; k<=n; k++)
            {
                if(k===1 || k===n)
                {
                    stars+='*';
                }
                else
                {
                    stars+=' ';
                }
            }
        }
        console.log(stars);
    }
}

hollowSquare();




function hollowTriangle()
{
    let n=5;

    for(let i=1; i<=n; i++)
    {
        let stars='';
        if(i===n)
        {
            for(let m=1; m<=n; m++)
            {
                stars+='* ';
            }
        }
        else
        {

            for( let k=1; k<=n-i; k++)
            {
                stars+=' ';
            }
            for(let j=1; j<=i; j++)
            {
                if(j===1)
                {
                    stars+='*'
                }
                else
                {
                    stars+=' ';
                }
            }
            for(let l=2; l<=i; l++)
            {
                if(l===i)
                {
                    stars+='*';
                }
                else
                {
                    stars+=' ';
                }
            }
        }
        console.log(stars);
    }
}

hollowTriangle();
