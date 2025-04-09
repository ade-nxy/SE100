function getNumberPromise() {
    // Write your code here
    const myPromise = new Promise ((resolve) => {
        setTimeout(() => {
            console.log(10)
        }, 2000)
    })
}


// Test the function
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});