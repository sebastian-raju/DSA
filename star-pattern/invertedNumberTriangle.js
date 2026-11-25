// let n = 5;

// function invertedNumberTrianlge(n) {
//     let result = [];
//     for(let i=n ; i>0; i--){
//         let row = ""
//         for(j=1; j<=i; j++){
//             row += `${j} `;
//         }
//         console.log(row);
//         result.push(row);
//     }
//     return result;
// }

// const result = invertedNumberTrianlge(n);
// console.log(result);


let n = 5;

function invertedNumberTrianlge(n) {
    let result = [];
    for(let i=0 ; i<n; i++){
        let row = ""
        for(j=0; j<(n-i); j++){
            row += `${j+1} `;
        }
        console.log(row);
        result.push(row);
    }
    return result;
}

const result = invertedNumberTrianlge(n);
console.log(result);
