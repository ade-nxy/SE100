function fetchData(data) {
    // Write your code here
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Data retrieved")
        }, 2000)
    })

}

function processData(data) {
    // Write your code here
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(data + " and processed")

        //or: const formattedString = data + " and processed" 
        //resolve data
        },2000)
    })
}

function displayData(data) {
    // Write your code here
    console.log(data)
}

// Chaining the functions
fetchData() //Data retrieved
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));