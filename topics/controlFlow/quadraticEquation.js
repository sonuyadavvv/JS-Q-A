//10.Quadratic Equation Solver: Write a function that takes the
//coefficients (a, b, c) of a quadratic equation (ax^2 + bx + c = 0)
//as input and returns the roots (real or complex).
//(This one is more mathematically involved).

function quadEqSolver(a,b,c)
{
    let D=((b*b)-(4*a*c));
    if(D>=0)
{
    const sqRootD=Math.sqrt(D);


    let r1=(-b+(sqRootD))/(2*a);
    let r2=(-b-(sqRootD))/(2*a);
    return `First root :${r1.toFixed(2)}
Second root:${r2.toFixed(2)}`
}
    else
{
    D=-1*D;
    const sqRootD=(Math.sqrt(D)).toFixed(2);

    let r1=`${(-b/(2*a))}+${(sqRootD/(2*a))}i`
    let r2=`${(-b/(2*a))}-${(sqRootD/(2*a))}i`
    return `First root :${r1}
Second root:${r2}`
}


}

console.log(quadEqSolver(1,-7,10));
console.log(quadEqSolver(1,-6,13));
console.log(quadEqSolver(1,-7,2));
console.log(quadEqSolver(4,-2,5));

