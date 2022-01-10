import React from 'react';
import { useEffect, useState } from 'react'
import Card from './templateComponents/Card'
import CardRow from './templateComponents/CardRow';
import TimeDisplay from './templateComponents/TimeDisplay';

function App() {
	return (
		<div className="bg-slate-400 h-screen">
			<TimeDisplay/>
			<CardRow></CardRow>
		</div>
	);
}

export default App;
