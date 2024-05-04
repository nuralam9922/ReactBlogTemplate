import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { changeTheme } from '../theme/changeTheme';

function ThemeIcon() {
  	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
			changeTheme(storedTheme);
		}
	}, []);

	const handleThemeChange = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		changeTheme(newTheme);
	};
  return (
		<li onClick={handleThemeChange} className="   px-5  bg-transparent duration-300 flex items-center justify-center gap-[16px] bg-transparent">
			{/* <div className="w-[24px] h-[24px] du cursor-pointer rounded-full bg-backBackground"></div> */}
			<img src={theme === 'light' ? moon : sun} className="size-[24px] bg-transparent cursor-pointer " alt="" />
		</li>
  );
}

export default ThemeIcon