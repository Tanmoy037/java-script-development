console.log("Hello");

// IIFE

(function (chai){
    console.log("Take your tea");
})();

((tea) => {
    console.log(`Take your ${tea}`);
})("american tea")


// promise

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username: "Tanmoy", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }

    }, 1000);
}).then(user => {
    console.log(user.username);
    // Handle success scenario
}).catch(error => {
    console.error(error);
    // Handle error scenario
})


