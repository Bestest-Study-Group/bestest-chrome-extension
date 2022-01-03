
/*
const tabLogger = async (activeInfo: chrome.tabs.TabActiveInfo) => {
    if (activeInfo?.tabId) {
        let tab = await chrome.tabs.get(activeInfo.tabId)
        console.log(tab)
        if (tab.active && tab.status === 'complete' && tab.url) {
            console.log(tab.url)
        }
    }
}
*/

/*
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
*/

/*
chrome.tabs.onActivated.addListener(tabLogger)

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(tab);
 });
 */

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

// only runs on service worker window, doesn't work on new tab page (which is intended)
if (typeof window === 'undefined')
{
    setInterval(async function () {
        let currentTab = await getCurrentTab();
        
        if (currentTab !== undefined && currentTab.url !== undefined && currentTab.url !== null)
        {
            // @ts-ignore: Object is possibly 'null'.
            let domain = currentTab.url.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
            
            // Given url = "http://www.google.com/", domain == "www.google.com" 
            //console.log(domain)
    
            chrome.storage.sync.get([domain], function(result) {
                if (result === undefined || JSON.stringify(result) === "{}")
                {
                    chrome.storage.sync.set({[domain]: 10000}, function() {
                        console.log(domain + ' is set to ' + 10000);
                    });
                }
                else
                {
                    chrome.storage.sync.set({[domain]: result[domain] + 10000}, function() {
                        console.log(domain + ' is set to ' + (result[domain] + 10000));
                    });
                }
            });
        }
    }, 10000);
}
 

export {}