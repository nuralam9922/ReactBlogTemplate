import React from 'react';

import logo from '../assets/logo/logo.png';
function Logo({ Width = 140, height = 40 }) {
	return (
		<h1 style={{ width: Width + 'px', height: height + 'px' }} className=' text-left'>
			<img  src={logo} className='w-full h-full' alt="" />
		</h1>
	);
}

export default Logo;
