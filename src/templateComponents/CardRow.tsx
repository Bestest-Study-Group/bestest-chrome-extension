import React, { ReactElement, useEffect, useState } from "react";
import { JsxElement } from "typescript";
import Card from "./Card";


function CardRow(props:any){
    const [topSiteLinks, setTopSiteLinks] = useState(new Array<ReactElement>());

    function OutputTopSites(topSites: chrome.topSites.MostVisitedURL[]) {
        topSites.forEach((site: chrome.topSites.MostVisitedURL) => {
            setTopSiteLinks(prev => [...prev, <Card>
                <a href={site.url}>{site.title}</a>
            </Card>])
            console.log(topSiteLinks);
        })
    }

    useEffect(() => {
        if (chrome.topSites !== undefined) {
            chrome.topSites.get(OutputTopSites);
        }
    }, [])
    
    return(
        <div className="grid grid-rows-1 grid-flow-col px-20 py-4 gap-10 overflow-x-auto">
            {topSiteLinks}
        </div>
    )
}
export default CardRow