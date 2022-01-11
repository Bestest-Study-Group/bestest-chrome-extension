import React from 'react';
import { useEffect, useState } from 'react'
import TopSites from './components/TopSites';
import DummyCards from './components/DummyCards'
import TimeDisplay from './templateComponents/TimeDisplay';

function App() {
	return (
		<div className="bg-slate-400 h-screen scroll-smooth">
			<TimeDisplay/>
			<DummyCards/>
		</div>
	);
}

export default App;
