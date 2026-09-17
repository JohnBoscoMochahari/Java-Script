function countOddNumbers(numbers){
    let num = " ";
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            continue;
        }
        num++;
    }
    return num;
}

console.log(countOddNumbers([3,5,7,9]));