const n = 5;

function formSpacedStars(n){
    const result = []

    for(let i=0; i<n; i++){
        let row = "";
        // adding empty spaces
        for(let j=0; j<(n-(i+1)); j++){
            row += "  ";
        }
        // adding stars
        for(let k=0; k<i+1; k++){
            row +='* '
        }
        console.log(row);
        result.push(row);
    }

    return result;
}


const result = formSpacedStars(n);
console.log(result);