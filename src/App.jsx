import LocomotiveScroll from 'locomotive-scroll';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from './components';

import loadingGif from './assets/loading/loading.gif';



function App() {
	const locomotiveScroll = new LocomotiveScroll();


	

	return (
		<main className=" max-w-screen-2xl  mx-auto poppins-regular bg-background  ">
			<Navbar />
			<Suspense fallback={
				<div className="w-full h-screen flex justify-center items-center">
						<img src={loadingGif} className='w-[100px]' alt="" />
				</div>
			}>
				<Outlet />
			</Suspense>
		</main>
	);
}

export default App;
