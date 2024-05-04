import React from 'react';

import logo from '../assets/logo/logo.png';
import logo2 from '../assets/logo/logo2.png';
import { useEffect } from 'react';
import { useState } from 'react';

function Logo({ Width = 140, height = 40 }) {
	// const [theme, setTheme] = useState();

	console.log(document.documentElement.getAttribute('data-theme'));

	return (
		<h1 style={{ width: Width + 'px', height: height + 'px' }} className=" text-left bg-transparent">
			<img src={localStorage.getItem('theme') === 'light' ? logo : logo2} className="w-full h-full bg-transparent" alt="" />
		</h1>
	);
}

export default Logo;
