//9.Object Iteration: Write a function that takes an object as input
//and prints each key-value pair using a for...in loop.

function iterateObject(myobject)
{
    for(let element in myobject)
    {
        console.log(element+':'+myobject[element]);
    }
}

let sonu='sonu yadav';

let myobject={
name:sonu ,
age:22,
college:'marwadi'
}

iterateObject(myobject);
