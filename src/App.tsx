import React from 'react';
import { useEffect, useState } from 'react'
import Card from './templateComponents/Card'
import CardRow from './templateComponents/CardRow';
import TimeDisplay from './templateComponents/TimeDisplay';
import './templateComponents/TopSites';

function App() {
	let cards = []
	for(let i = 0; i < 10; i++){
		cards.push(
			<Card>
				<h1 className='cardText'></h1>
			</Card>
		)
	}
	return (
		<div className="bg-slate-400 h-screen">
			<TimeDisplay/>
			<CardRow>
				{cards}
			</CardRow>
			<p id='TopSitesDisplay'></p>
		</div>
	);
}

export default App;
