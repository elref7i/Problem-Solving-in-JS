function positiveSum(arr){
    // * sol 1
    // var sum = 0;
    // for (var i =0 ; i <=arr.length-1 ;i++){
    //     if(arr[i] > 0 ){
    //         sum += arr[i];
    //     }
    // }
    // return sum;
    // * sol 2
    return arr.filter((x) => x > 0)
    .reduce((acc,cur) => acc + cur , 0);
}
console.log(positiveSum([1,-3,5,9]));
