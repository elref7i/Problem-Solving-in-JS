function invert(array){

    return array.map((x)=>array.length===0?[]:x>0?-x:-x)
}
console.log(invert([1, -2, 3, -4, 5]));
