const n = 5;

function formBinaryTriangle2(n) {
  const result = [];
  let toggle = 1;
    for(let i=0; i<n; i++){
        let row = '';
        for(let j=0; j<=i; j++){
            row += `${toggle} `;
            toggle === 1 ? toggle = 0 : toggle = 1;
        }
        console.log(row);
        result.push(row);
    }
  return result;
}

const result = formBinaryTriangle2(n);
console.log(result);
