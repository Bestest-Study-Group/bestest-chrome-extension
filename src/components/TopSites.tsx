import React, { ReactElement, useState, useEffect } from 'react'
import CardRow from '../templateComponents/CardRow';
import Card from '../templateComponents/Card';

function TopSites(props: any) {
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

    return (
        <CardRow>
            {topSiteLinks}
        </CardRow>
    )
}
export default TopSites