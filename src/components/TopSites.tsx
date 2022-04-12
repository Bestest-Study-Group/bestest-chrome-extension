import React, { ReactElement, useState, useEffect } from 'react'
import CardRow from '../templateComponents/CardRow';
import Card from '../templateComponents/Card/Card';
import {topSitesMock} from '../mockData/topSites'
import CardImage from '../templateComponents/Card/CardImage';
import CardBody from '../templateComponents/Card/CardBody';

function TopSites(props: any) {
    const [topSiteLinks, setTopSiteLinks] = useState(new Array<ReactElement>());

    function getRootURL(url:string){
        let urlLocation = document.createElement('a');
        urlLocation.href = url;
        let rootURL = "http://"+urlLocation.hostname;
        urlLocation.remove();
        return rootURL;
    }

    function OutputTopSites(topSites: chrome.topSites.MostVisitedURL[]) {
        console.log(topSites)
        topSites.forEach((site: chrome.topSites.MostVisitedURL) => {
            setTopSiteLinks(prev =>{ 
                let faviconURL = getRootURL(site.url) + "/favicon.ico"
                return [...prev, 
                        <a href={site.url}>
                            <Card>
                                <CardImage src={faviconURL}/>
                                <CardBody>
                                    <p>{site.title}</p>
                                </CardBody>
                                
                            </Card>
                        </a>
                ]
        })
            console.log(topSiteLinks);
        })
    }

    useEffect(() => {
        if (chrome.topSites !== undefined) {
            chrome.topSites.get(OutputTopSites);
        }
        else{
            OutputTopSites(topSitesMock);
        }
       
        
    }, [])

    return (
        <CardRow>
            {topSiteLinks}
        </CardRow>
    )
}
export default TopSites