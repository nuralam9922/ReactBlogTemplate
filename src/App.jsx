import React from 'react';
import { Navbar } from './components';
import Home from './pages/Home';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

	const locomotiveScroll = new LocomotiveScroll();
	return (
		<main className=" max-w-screen-2xl  mx-auto poppins-regular bg-background  ">
			<Navbar/>
			<Home />
		</main>
	);
}

export default App;
