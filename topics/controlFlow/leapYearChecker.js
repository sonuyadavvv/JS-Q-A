//4.Leap Year Checker: Write a function that takes a year as input and returns true if it's a leap year, and false otherwise.

function leapYearChecker(year)
{
  if(year%100===0)
  {
      if(year%400===0)
      {
          return `${year} is leap year`
      } 
        else
      {
        return `${year} is not leap year`
      }
    }
  
  else 
  {
    if(year%4===0)
      {
          return `${year} is leap year`
      } 
    else
      {
        return `${year} is not leap year`
      }
  }
}

console.log(leapYearChecker(2000));
console.log(leapYearChecker(2001));
console.log(leapYearChecker(2004));
console.log(leapYearChecker(1086));

//second way---->
function isleapYear(year)
{
  const feb29= new Date(year,1,29);//index start from 0
  //feb29 is object
  console.log(typeof feb29);
  //return feb29.getMonth()===1;
  if(feb29.getMonth()===1)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(isleapYear(1086));