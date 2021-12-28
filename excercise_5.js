// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

var upper = function (str)
{
    arr=str.split(" ")
    console.log(arr.length)
    for(i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    str2 = arr.join(" ");
    console.log(str2)
    
    // console.log(str.split(''))
    // console.log(str)
}
console.log(upper('the quick brown fox'))