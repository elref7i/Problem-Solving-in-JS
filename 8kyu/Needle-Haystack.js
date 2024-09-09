function findNeedle(haystack) {
    //* sol 1
    /* for (let i= 0 ;i<haystack.length;i++){
        if(haystack[i]==="needle"){
            return `found the needle at position ${i}`
        }
    } */
    return   `found the needle at position ${haystack.indexOf("needle")}`;
}
console.log(findNeedle(["hay", "junk", "needle", "hay", "moreJunk", "needle", "randomJunk"]));
