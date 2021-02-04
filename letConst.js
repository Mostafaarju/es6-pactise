// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

function add(numb1, numb2 = 0) {
    // if (numb2 == undefined) {
    //     numb2 = 0;
    // }
    // numb2 = numb2 || 0;
    return numb1 + numb2;
}
const total = add(15, 1);
console.log(total);