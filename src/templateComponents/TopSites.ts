export function OutputTopSites(topSites: chrome.topSites.MostVisitedURL[]) {
    console.log(document.getElementsByClassName('cardText'));
    let urlDisplay:HTMLCollectionOf<Element> = document.getElementsByClassName('cardText')!;
    
    for (let i = 0; i < urlDisplay.length; i++) {
        urlDisplay[i].innerHTML += "<a href='"+ topSites[i].url+"'>" + topSites[i].title + "</a>";
    }
}
// console.log(document.getElementById('TopSitesDisplay'));
if (chrome.topSites !== undefined) {
    chrome.topSites.get(OutputTopSites);
}