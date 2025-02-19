//8.Triangle Type: Write a function that takes the lengths of three sides of
//a triangle as input and returns "equilateral", "isosceles", or "scalene".

function triangleType(s1,s2,s3)
{
    if(s1===s2 && s2===s3)
    {
        return 'equilateral';
    }
    else if(s1===s2 || s2===s3 || s3===s1)
    {
        return 'isosceles';
    }
    else
    {
        return 'scalene';
    }
}

console.log(triangleType(2,3,4));
console.log(triangleType(2,2,4));
console.log(triangleType(2,2,2));
console.log(triangleType(7,2,7));




