//3.Largest of Two: Write a function that takes two numbers as input and returns the larger of the two.

function compare(number1,number2)
{
  if(number1<number2)
  {
    return number2;
  }
  else
  {
    return number1;
  }
}

console.log(compare(5,6));
console.log(compare(-5,-6));