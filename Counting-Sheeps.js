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
    // *sol one
   /*  var c= 0;
    for ( var i =0;i<sheep.length;i++){
        if(Boolean(sheep[i])){
            c +=1;
        }
    }
    return c; 
    */
    // *sol Two
    /* return sheep.map(Boolean).filter((x)=>x===true).length; */
}

//^ Write anything
console.log(countSheeps(["ahmed","khaled",'',"refai","ali","","magde",null,0]));

