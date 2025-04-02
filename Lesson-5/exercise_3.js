/* Fetch notes:
example: 
fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast').then((response) => {return response.json() }).then((data) => {console.log(data)})
*/

/*Exercise 6
fetch('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=X5MOC1G64HX2FELX')
.then((response) => {return response.json()}) //returns another promise
.then((data) => {console.log(data)})
*/

/*Exercise 7 Only extract yr 2020
fetch('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=X5MOC1G64HX2FELX')
.then((response) => {return response.json()}) //returns another promise
.then((data) => {
    console.log(data)

    const earnings = data["annualEarnings"]
    for (let i=0; i<earnings.length; i++) {
        const currentEarning = earnings[i]
        //Object earnings array:
        //fiscalDateEnding: "2020-06-30",
        //reportedEPS: "5.75"

        if(currentEarning["fiscalDateEnding"].includes("2020")) {
            console.log(currentEarning["reportedEPS"])
            return
        }
    }
})
*/

/*Exercise 8
*/
const payload = {
    ticker: 'APPL',
    name: 'Apple Inc',
    price: 171.48
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(payload)
}).then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))