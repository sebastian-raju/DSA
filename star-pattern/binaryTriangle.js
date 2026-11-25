// const n = 6;

// function formBinaryTriangle(n) {
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       j % 2 === 0 ? (row += `1 `) : (row += `0 `);
//     }
//     console.log(row);
//     result.push(row);
//   }

//   return result;
// }

// const result = formBinaryTriangle(n);
// console.log(result);

// toggle form

const n = 6;

function formBinaryTriangle(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    let row ='';
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
        row += `${toggle} `;
        toggle === 1 ? toggle = 0 : toggle = 1;
    }
    console.log(row);
    result.push(row);
  }

  return result;
}

const result = formBinaryTriangle(n);
console.log(result);
