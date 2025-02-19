//9.Day of the Week: Write a function that takes a number (1-7) as
//input and returns the corresponding day of the week
//(e.g., 7 = "Sunday", 1 = "Monday", etc.). Use a switch statement.

function dayOfWeek (number)
{
    let day;

    switch(number)
        {
            case 1:
                day='Monday';
                break;
            case 2:
                day='Tuesday';
                break;
            case 3:
                day='Wednesday';
                break;

            case 4:
                day= 'Thursday';
                break;
            case 5:
                day= 'Friday';
                break;
            case 6:
                day= 'Saturday';
                break;
            case 7:
                day= 'Sunday';
                break;
       }
    return day;
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(2));
console.log(dayOfWeek(5));
console.log(dayOfWeek(7));



