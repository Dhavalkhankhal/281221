//write a java scrpt function that reverse a number.
//example x=32243;
//expected output: 34223



// anonymousfunction


/*const rev = function(num){
    var st,spil,reve,joi
    st=String(num)
    spil=st.split("")
    reve=spil.reverse()
    joi=reve.join("")
    return joi
}
console.log(rev(2554465))*/

// arrowfunction


const rev =(num) => String(num).split("").reverse().join("")
    console.log(rev(2554465))


