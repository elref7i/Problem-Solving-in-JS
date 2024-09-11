function highAndLow(numbers){
    let numberSort =numbers.split(" ").map((x)=>Number(x)).sort();
    let  lowest =Math.min(...numberSort);
    let  highest =Math.max(...numberSort);
    // var lowest = String(numberSort[0]);
    // var highest = String(numberSort[numberSort.length-1]);
    
    return `${Math.max(...numberSort)} ${Math.min(...numberSort)}`;

    // return `${highest} ${lowest}`;
}
console.log(highAndLow("-1 1"));
