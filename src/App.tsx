import React from 'react';
import { useEffect, useState } from 'react'
import Card from './templateComponents/Card'
import CardRow from './templateComponents/CardRow';

function App() {

	let cards = []
	for(let i = 0; i < 10; i++){
		cards.push(
			<Card>
				<h1>Hi from card</h1>
			</Card>
		)
	}
	return (
		<div className="bg-slate-400 h-screen">
			<div>
				<h1 className="text-3xl font-bold underline">This is Tailwind CSS</h1>
			</div>
			<CardRow>
				{cards}
			</CardRow>
		</div>
	);
}

export default App;
