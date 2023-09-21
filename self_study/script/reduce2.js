
// function getAvgFromArray(arr){
//     const length = inputA.length

//     const sum = arr.reduce((a,b) => a + b, 0)

//     return Math.ceil(sum/length)
// }

// const inputA = [1, 2, 3, 4, 5]

// console.log(getAvgFromArray(inputA))


function find_average(array) {
    const length = array.length;
    const sum = array.reduce((a, b) =>{
        return a + b;
    }, 0)
    return (sum/length).toFixed(2)
}

console.log(find_average([43.4, 83.6, 56, 59.47, 70.2, 65, 89, 59]));