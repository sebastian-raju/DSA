let n = 5 

function formNumberTriangle2 (n){
    let result = [];
    for(let i= 1; i<=n; i++){
        let row = "";
        for(let j=1; j<=i; j++){
            row += `${i} `;
        }
        console.log(row);
        result.push(row);
    }
    return result
}

const result = formNumberTriangle2(n);
console.log(result);