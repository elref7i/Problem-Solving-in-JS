function squareOrSquareRoot(array) {
    // *sol 1
        /*  for (let i =0;i<array.length;i++){
            if(Number.isInteger(Math.sqrt(array[i]))){
                array[i]=Math.sqrt(array[i]);
            }else{
                array[i]=Math.pow(array[i],2)
            }
        }
        return array; */
        // * sol 2
        return array.map((ele)=>Number.isInteger(Math.sqrt(ele))?Math.sqrt(ele):Math.pow(ele,2))
    }
console.log(squareOrSquareRoot([4,3,9,7,2,1]));