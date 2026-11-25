let n = 5;

function formNumberTriangle (n) {
 let result = [];
 for(let i=1; i<=n; i++){
    let row = "";
    for(let j=1; j<=i; j++){
        row += `${j} `;
    }
    console.log(row);
    result.push(row);
 }
 return result;
}

const result = formNumberTriangle(n);
console.log(result);