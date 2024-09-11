function getCount(str) {
    return str.split("").filter((ele)=>ele ==="a"||ele==="e"||ele ==="i"||ele ==="o"||ele ==="u").length
}
console.log(getCount("refai"));
