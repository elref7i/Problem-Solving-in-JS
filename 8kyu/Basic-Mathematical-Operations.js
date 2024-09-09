function basicOp(operation, value1, value2){
    //* sol 1
    /*    switch (operation) {
        case "+":
            return  value1 +value2;
            break;
        case "-":
            return  value1 - value2;
            break;
        case "*":
            return  value1 * value2;
            break;
        case "/":
            return  value1 / value2;
            break;
        } */
    //* sol 2

        return operation ==="+"?value1 +value2
        :operation ==="-" ? value1 - value2
        :operation ==="*"? value1 * value2
        : value1 / value2 ;
}
console.log(basicOp("+",9,5));
