//Part A - Function print odd numbers in an array
//Anonymous:
var oddNum = function(arr) {
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

//IIFE:
(function(arr){
    var odd = [];
    for(i=0; i<arr.length; i++)
    {
        if(arr[i]%2 !== 0)
        {
            odd.push(arr[i]);
        }
    }
    console.log(odd);
})([1,2,3,7,19,6,20,51,50]);

//Part B - Convert all strings into capital letters in an array
//Anonnymous:

var capsLetter = function(str) {

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
        return str.join(" ");
    }
};

console.log(capsLetter("hello my name is paviesh"));

//IIFE:
(function(str) {
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
})("hello my name is paviesh");

//Part C - sum of all numbers in an array:
//Anonymous:
var total = function(arr) {
    var sum = 0;
    for(i=0; i<arr.length; i++)
    {
        sum += arr[i];
    }
    console.log(sum);
}
total([1,2,3,4,5,6]);

//IIFE:
(function(arr){
    var sum = 0;
    for(i=0; i<arr.length; i++)
    {
        sum += arr[i];
    }
    console.log(sum);
})([1,2,3,4,5,6]);

//Part D - return all prime numbers in an array:
//Anonymous:
var prime = function (arr) {
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
var output = prime([1,2,5,15,19,23,25,26,27,31]);
console.log(output);

//IIFE:
(function(arr) {
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
    console.log(primeNum);
    return(primeNum);
})([1,2,5,15,19,23,25,26,27,31]);

// Part E- return all the palindromes in an arrray:
//Anonnymoys:
var palindrome = function(arr) {

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
}
console.log(palindrome([5,6,7,13,11,15,22,23,24,33,26]));

//IIFE:
(function(arr) {
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
    console.log(result);
    return result;
})([5,6,7,13,11,15,22,23,24,33,26]);

//Part F - return median of two sorted arrays of the same size:
//Anonymous:
var median = function(nums1, nums2) {
    let s1= nums1.length
    let s2= nums2.length
    let index = s1+s2
    if(s1 === 0)
    {
        if(s2%2 == 1)
        {
            return nums2[Math.floor(index/2)];
        }
        else
        {
            return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2;
        }
    }

    for(let i=0 ; i<index/2+1;i++)
    {
        nums1.push(nums2[i]);
    }
    nums1.sort((a,b)=>a-b);

    if(index%2==1)
    {
        return nums1[Math.floor(index/2)];
    }
    else
    {
        return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2;
    }
 };
 console.log(median([1,5,8,6],[2,9,4,3]));

//IIFE:
(function(nums1, nums2) {
    let s1= nums1.length
    let s2= nums2.length
    let index = s1+s2
    if(s1 === 0)
    {
        if(s2%2 == 1)
        {
            console.log(nums2[Math.floor(index/2)]);
            return nums2[Math.floor(index/2)];
        }
        else
        {
            console.log((nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2);
            return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2;
        }
    }

    for(let i=0 ; i<index/2+1;i++)
    {
        nums1.push(nums2[i])
    }
    nums1.sort((a,b)=>a-b)

    if(index%2==1)
    {
        console.log(nums1[Math.floor(index/2)]);
        return nums1[Math.floor(index/2)];
    }
    else
    {
        console.log((nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2);
        return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2;
    }
})([1,5,8,6],[2,9,4,3]);

//Part G - Remove Duplicates from an array:
//Anonymous:
var remove = function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log(remove([1,2,3,4,5,5,3,1]));

//IIFE:
(function(arr) {
    console.log(arr.filter((item, index) => arr.indexOf(item) === index));
    return arr.filter((item, index) => arr.indexOf(item) === index);
})([1,2,3,4,5,5,3,1]);

//Part H - Rotate an array by K times:
//Anonymous:
var rotation = function(arr,k) {
    const n = arr.length;
    var temp = [];
    k = k%n;
    for(i=0; i<n; i++)
    {
        if(i<k)
        {
            temp.push(Number(arr[n+i-k] + " "));
        }
        else
        {
            temp.push(Number(arr[i-k] + " "));
        }
    }
    return temp;
}
console.log(rotation([1,2,3,4,5], 2));

//IIFE:
(function(arr,k) {
    const n = arr.length;
    var temp = [];
    k = k%n;
    for(i=0; i<n; i++)
    {
        if(i<k)
        {
            temp.push(Number(arr[n+i-k] + " "));
        }
        else
        {
            temp.push(Number(arr[i-k] + " "));
        }
    }
    console.log(temp);
    return temp;
})([1,2,3,4,5], 2);
