
function getAvgFromArray(arr){
    const length = inputA.length

    const sum = arr.reduce((a,b) => a + b, 0)

    return Math.ceil(sum/length)
}

const inputA = [1, 2, 3, 4, 5]

console.log(getAvgFromArray(inputA))