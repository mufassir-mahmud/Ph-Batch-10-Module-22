function noDuplicate(numbers){
   const unique = []
    for( const number of numbers){
        if(unique.includes(number) == false){
            unique.push(number)
        }
    }
    return unique
}
const arrayOfNum = [11,22,33,44,22,55,11,66,44]
const uniqueNum = noDuplicate(arrayOfNum);
console.log(uniqueNum);