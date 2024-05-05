import { useState } from 'react';
import { useEffect } from 'react';

const useTheme = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			// console.log('localStorage', storedTheme);
			setTheme(storedTheme);
			document.querySelector('html')?.setAttribute('data-theme', storedTheme);
		}
	}, []);

	const changeTheme = () => {
		const existingThem = document.documentElement.getAttribute('data-theme');
		const newTheme = existingThem === 'light' ? 'dark' : 'light';
			document.querySelector('html')?.setAttribute('data-theme', newTheme);

		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	};
	return [theme, changeTheme];
};

export default useTheme;
