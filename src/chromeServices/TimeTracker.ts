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