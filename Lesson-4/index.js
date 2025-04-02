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
    
    // Write your code below

    let sum = 0;

    for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
        sum += MSFTStockClosingPrices[i].Monday;
        sum += MSFTStockClosingPrices[i].Tuesday;
        sum += MSFTStockClosingPrices[i].Wednesday;
        sum += MSFTStockClosingPrices[i].Thursday;
        sum += MSFTStockClosingPrices[i].Friday;
    }

    console.log("The total sum of closing prices of MSFT is ",sum.toFixed(2))