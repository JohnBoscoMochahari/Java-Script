function calculateTotal(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

function getStatus(total, target = 100) {
    let status;

    if (total >= target) {
        status = "Target Reached";
    } else {
        status = "Target Not Reached";
    }

    return status;
}

const total = calculateTotal([20, 35, 50]);
console.log(total);             
console.log(getStatus(total));  
// console.log(getStatus(60));     
// console.log(getStatus(60, 50))