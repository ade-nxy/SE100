//Exercise 3
//in: array
//of: object
/*
const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]

let sum = 0;

for(let week of MSFTStockClosingPrices) {
    for(let day in week) {
        sum += week[day];
    }
}

console.log(sum)
*/

//Exercise 4
//use while loop to find total sum

const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]

let i = 0;
let sum = 0;
while (i < MSFTStockClosingPrices.length) {
    sum += MSFTStockClosingPrices[i].Monday
    sum += MSFTStockClosingPrices[i].Tuesday
    sum += MSFTStockClosingPrices[i].Wednesday
    sum += MSFTStockClosingPrices[i].Thursday
    sum += MSFTStockClosingPrices[i].Friday

    i ++;
}

console.log(sum.toFixed(2))