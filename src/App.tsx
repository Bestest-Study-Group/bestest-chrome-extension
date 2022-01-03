import React from 'react';
import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
	const [redditCount, updateRedditCount] = useState(0)
	/*
	const tabLogger = async (activeInfo: chrome.tabs.TabActiveInfo) => {
		if (activeInfo?.tabId) {
			let tab = await chrome.tabs.get(activeInfo.tabId)
			console.log(tab)
			if (tab.active && tab.status === 'complete' && tab.url && tab.url.indexOf('https://www.reddit.com/') >= 0) {
				updateRedditCount(redditCount + 1)
			}
		}


	}
	useEffect(() => {
		chrome.tabs.onActivated.addListener(tabLogger)
	})
	*/
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div>
					<h1> You visited Reddit {redditCount} times</h1>
				</div>
			</header>

		</div>
	);
}

export default App;
