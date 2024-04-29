//Arrow functions
//Functions A - that prints odd numbers:
var oddNum =  (arr) => {
    var odd = [];
    for(i=0; i<arr.length; i++)
    {
        if(arr[i]%2 !== 0)
        {
            odd.push(arr[i]);
        }
    }
    console.log(odd);
}

var array = [1,2,3,7,19,6,20,51,50];
oddNum(array);

//Function B - Convert all strings into capital letters in an array:
var capsLetter = (str) => {
    if(str === " " || str === null)
    {
        return false;
    }
    else
    {
        str = str.toLowerCase().split(" ");
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        str = str.join(" ");
        console.log(str);
        return str;
    }
}
capsLetter("hello my name is paviesh");

// Function C - sum of all numbers in an array:
var total = (arr) => {
    var sum = 0;
    for(i=0; i<arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}
console.log(total([1,2,3,4,5,6]));

//Function D - return all prime numbers in an array:
var prime = (arr) => {
    var primeNum = [];
    for(i=0; i<arr.length; i++)
    {
        if(arr[i] >= 2)
        { 
            var count = 0;
            for(j=2; j<=arr[i]; j++)
            {
                if(arr[i]%j === 0)
                {
                    count++;
                }
            }
            if(count === 1)
            {
                primeNum.push(arr[i]);
            }
        }
    }
    return(primeNum);
}
console.log(prime([1,2,5,15,19,23,25,26,27,31]));

//Function E - return all the palindromes in an arrray:
var palindrome = (arr) => {
    var result = [];
    for(i=0;i<arr.length; i++)
    {
        var a = arr[i];
        var str = a.toString();
        str = str.split("");
        str = str.reverse();
        str = str.join("");
        if(a === Number(str))
        {
            result.push(a);   
        }
    
    } 
    return result;
};
console.log(palindrome([5,6,7,13,11,15,22,23,24,33,26]));