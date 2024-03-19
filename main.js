console.log("Hello");

// IIFE

(function (chai){
    console.log("Take your tea");
})();

((tea) => {
    console.log(`Take your ${tea}`);
})("american tea")
