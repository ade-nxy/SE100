//Exercise 5
/*
function getBetween() {
	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
	
    //Write your code below
    let qty = 0;
    for(let price of MSFTStockClosingPrices) {
        if (price < 257 && price > 254) {
            qty += 1;
            console.log(price)
        }
    }
    console.log("Number of closing prices between 254 and 257: ", qty)
}

getBetween();
*/

//Exercise 6
/*
const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];

function findBetween(array) {
    let qty = 0
    for (let price of array) {
        if (price < 257 && price > 254) {
            qty += 1;
        }
    }
    return qty
}


console.log("Closing price of MSFT between 254 to 257: ", findBetween(MSFTStockClosingPrices), " Days")
console.log("Closing price of MSFT between 254 and 257: ", findBetween(AAPLStockClosingPrices), " Days")
*/

//Exercise 7

const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

// Write your code below
/*
function sortPerformanceInAscOrder(array) {
    return array.sort()
}
*/
const sortPerformanceInAscOrder = (array) => array.sort()

// Do not modify this code:
console.log(sortPerformanceInAscOrder(StockDailyPerformance));