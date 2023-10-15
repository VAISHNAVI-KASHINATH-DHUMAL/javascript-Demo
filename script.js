// Function that returns a Promise to simulate an asynchronous operation
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Example Data' };
            resolve(data);
        }, 1000); // Simulating a 1-second delay
    });
}

// Async function using await to handle the Promise
async function fetchDataAsync() {
    try {
        document.getElementById('dataResult').innerHTML = 'Fetching data...';
        const result = await fetchData();
        document.getElementById('dataResult').innerHTML = 'Data received: ' + JSON.stringify(result);
    } catch (error) {
        document.getElementById('dataResult').innerHTML = 'Error: ' + error.message;
    }
}

// Event listener for the button click
document.getElementById('fetchDataButton').addEventListener('click', fetchDataAsync);
