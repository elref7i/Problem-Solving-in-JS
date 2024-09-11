function find_average(array){
    let sum = 0;
    var c= 0;
    if (array.length){
        for (let i =0 ;i<array.length;i++){
            sum += array[i];
            c ++;
        }
        return sum / c ;
    }
    return 0;

    
}
console.log(find_average([3,3]));
