function countPositivesSumNegatives(input) {
    let sum=0;
    let count=0;
  
    for (let i =0 ;i<input.length;i++){
        if(input.length === 0){
            return null;
        }
        if(input[i] >=0){
            count ++;
        }
        else{
            sum +=input[i];
        }
    }
    return [count,sum];

}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
