function doubleChar(str) {
    // *sol 1
   /*  let strSplit = str.split("");
    let iArray = [];
    for(let i=0;i<strSplit.length;i++){
        strSplit[i]= strSplit[i].repeat(2)
    }
    return strSplit.join(""); */

    // *sol 2

    return str.split("").map((x)=> x.repeat(2)).join("");

}
console.log(doubleChar("refai"));

