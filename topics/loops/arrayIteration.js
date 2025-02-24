//8.Array Iteration: Write a function that takes an array
//as input and prints each element of the
//array using a for...of loop.

function iterateArray(myarray)
{
    for (let element of myarray)
    {
        console.log(element);
    }
}

let myarray=[1,2,3,4,5,6];

iterateArray(myarray);

