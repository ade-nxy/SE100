//const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]

// Write your code below: Using reducer function to sum up elements of the array

//TotalTSLAClosing = TSLAClosingPrices.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
//console.log(TotalTSLAClosing);
//console.log(TotalTSLAClosing / TSLAClosingPrices.length)

let propertyOwned = 0
let assessableIncome = 20000
let annualValue = 15000
let age = 55

if (propertyOwned <= 1) {
	if (assessableIncome <= 34000) {
		if (annualValue <= 13000) {
			if (age >= 65) {
				payout = 300
			} else if (age >= 55) {
				payout = 250
			} else {
				payout = 0
			}
		} else if (annualValue <= 21000) {
	     if (age >= 55) {
					payout = 200
			 } else {
					payout = 0
				}
    } else {
			payout = 0
		}
	} else {
		payout = 0
	}
} else {
  payout = 0
};

function showpayout() {
    console.log("Your payout is ", payout);
}
