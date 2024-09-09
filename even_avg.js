function evenAvg(numbers){
    const evenNum = []
    for(const number of numbers){
        if(number % 2 === 0){
            evenNum.push(number)
        }
    }
    let sum = 0;
    let avg = 0;
    const length = evenNum.length;
    for( const even of evenNum){
        sum = sum + even;
      avg = sum / length;
    }
    return avg
}

const numberArray = [11,22,33,44,55,66,77,88,99];
const sumOfEven = evenAvg(numberArray);
console.log(sumOfEven);