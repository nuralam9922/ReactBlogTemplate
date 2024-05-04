import React from 'react';
import hamBergerIcon from '../assets/icons/menu-outline.png';
import moon from '../assets/icons/moon.png';
import Logo from './Logo';

function Navbar() {
	return (
		<div className="w-full p-[20px] md:p-[30px] lg:p-[40px] h-[72px]  flex items-center justify-between">
			<div className="logo text-textPrimary">
				<Logo Width="180" height="40" />
			</div>
			<div className="flex items-center justify-between  h-[40px] gap-[14px] text-textPrimary leading-[24px]">
				<ul className=" items-center hidden md:flex justify-between gap-[14px]">
					<li className="p-[8px]  text-[18px]">Blog</li>
					<li className="p-[8px]  text-[18px]">Projects</li>
					<li className="p-[8px]  text-[18px]">About</li>
					<li className="p-[8px]  text-[18px]">Newsletter</li>
					<li className=" p-[8px,16px,8px,16px] border-2 rounded-full w-[96px] h-[40px] text-[18px] flex items-center justify-center gap-[16px]">
						<div className="w-[24px] h-[24px]  cursor-pointer rounded-full bg-backBackground"></div>
						<img src={moon} className="size-[24px] cursor-pointer " alt="" />
					</li>
				</ul>
				<img src={hamBergerIcon} className="size-[32px] block md:hidden" alt="" />
			</div>
		</div>
	);
}

export default Navbar;
