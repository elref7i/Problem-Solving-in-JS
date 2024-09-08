/*
!!!
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined 
!!! 
 */
function countSheeps(sheep) {
    // TODO
    // * use count with sol one and two only
    var c= 0;
    // * sol one

    sheep.map((x)=> {
        if (x===true)c++
    });
    return c;
    // *sol Two

   /*  
    for ( var i =0;i<sheep.length;i++){
        if(Boolean(sheep[i])){
            c +=1;
        }
    }
    return c; 
    */
    // *sol Three
    /* return sheep.map(Boolean).filter((x)=>x===true).length; */
}

//^ Write anything
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));
//* log use sol two or three
// console.log(countSheeps(["ahmed","khaled",'',"refai","ali","","magde",null,0]));

