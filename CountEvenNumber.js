function countEvenNumbers(numbers) {
  let num = " ";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      continue;
    }
    num++;
  }

  return num;
}

console.log(countEvenNumbers([3, 8, 11, 14, 20]));