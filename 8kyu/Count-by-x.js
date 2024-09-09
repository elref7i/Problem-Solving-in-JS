function countBy(x,n){
    let z= [];
    for(let i =1;i<n+1;i++){
        z.push(x*i);
    }
    return z;
}
console.log(countBy(2,5));

