//  Write a Javascript function that check weather a passed string is palindrom or not?
// A Pallindrome is  a word ,phrase , or sequence that reads a same backward as forward,
// e,g :- madam or nurses ,run 


 //anonymousfunction
/* var pd = function(str)
 {
     var a,b,c,d
     a=String(str)
     b=a.split("")
     c=b.reverse()
     d=c.join("")
     if(a==d)
     {
         console.log("str is pd")
     }
     else
     {
         console.log("str is not pd")
     }
// }
 console.log(pd("mom"))*/


//arrowfunction
     const pd = (str) =>{ 
     var a=String(str)
     var b=a.split("").reverse().join("")
     if(a==b)
     {
          console.log("str is pd")
     }
      else
     {
          console.log("str is not pd")
     }
 }
 console.log(pd("mom"))