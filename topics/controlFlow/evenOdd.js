//2.Even or Odd: Write a function that takes a number as input and returns "even" or "odd".

let n=8;

function evenOddChecker (number)
{
  if(number%2===0)
  {
    return 'even';
  }
  else
  {
    return 'odd';
  }
}

console.log(evenOddChecker(n));