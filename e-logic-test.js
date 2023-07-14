function sensorNumbers(num) {
    for (let index = 1; index <= num; index++) {
        const chars = [];
        for (let i = 1; i <= (num+3); i++) {
            if (i > 1 && i < (num+3)) {
                if (i == (index+1) || i == (index+2)) {
                    chars.push('*');
                } else {
                    chars.push(i);
                }
            } else {
                chars.push(i);
            }
        }
        console.log(chars.join(""));
    }
}

sensorNumbers(5);

function selisih(prices = []) {
    let maxSelisih = 0;
    for (let index = 0; index < prices.length; index++) {
        for (let i = (index + 1); i < prices.length; i++) {
            const selisih = prices[index] - prices[i];
            if (selisih < maxSelisih) {
                maxSelisih = selisih;
            }
        }
    }

    return -maxSelisih;
}

const prices = [10, 7, 5, 8, 11, 9, 1];
console.log("Selish: ", selisih(prices));