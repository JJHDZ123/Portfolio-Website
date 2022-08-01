import React from 'react';

import { Footer, Header, Projects, Skills } from './container/index';
import Navbar from './components/NavBar/NavBar';
import './App.scss';

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
