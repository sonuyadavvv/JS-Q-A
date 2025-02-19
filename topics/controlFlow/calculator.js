//6.Calculator: Write a simple calculator program that takes two numbers and an operator (+, -, *, /)
//as input and performs the corresponding operation.1 Use a switch statement.

function calculate(n1,n2,operator)
{
    switch(operator)
    {
        case '+':
            return n1+n2;
            break;
        case '-':
            return n1-n2;
            break;
        case '*':
            return n1*n2;
            break;
        case '/':
            return n1/n2;
            break;
    }
}


console.log(calculate(22,11,'+'));
console.log(calculate(22,11,'-'));
console.log(calculate(22,11,'*'));
console.log(calculate(22,11,'/'));



