function sumArray(array) {
    if (array === null) return 0;
    return array.sort((a,b)=> a-b).slice(1,-1).reduce((acc,cur) => acc+cur,0);
    
    /* var maxValue = Math.max(...array); 
    var minValue = Math.min(...array); 
    var sum = 0;
    var newArray = [];
    for (var i = 0 ; i <= array.length-1 ; i++){
        if(array[i] !== maxValue && array[i] !== minValue){
            sum += array[i];
            // newArray.push(array[i]);
        }
    }
    // return newArray;
    return sum; */

    /* var filterArray = array.filter((x) => x !== maxValue && x !== minValue);
    var newArray =filterArray.reduce((acc,cur) => acc +cur,0);
    return newArray; */

    
    
}
console.log(sumArray([5,5,10,20,30,40,50,50]));
