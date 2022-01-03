// get the current url
const host = window.location.host

var totalTime: number = 0;

console.log(host);

chrome.storage.sync.get([host], function(result) {
    if (result === undefined)
    {
        console.log("Value is currently undefined")
        totalTime = 0;
    }
    else
    {
        totalTime = result[host];
        console.log('Value currently is ' + totalTime);
    }
});

setInterval(function () {
    totalTime += 10000;
    chrome.storage.sync.set({[host]: totalTime}, function() {
        console.log(host + ' is set to ' + totalTime);
    });
}, 10000);


export {}