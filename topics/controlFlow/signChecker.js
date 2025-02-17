//1.Sign Checker: Write a function that takes a number as input and returns "positive", "negative", or "zero" based on its sign.


let n=-5;
function signChecker(number)
{
  if(number<0)
  {
    return 'negative';
  }
  else if(number>0)
  {
    return 'positive';
  }
  else
  {
    return 'zero';
  }
};

console.log(signChecker(n));
