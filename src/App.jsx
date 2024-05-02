import React from 'react';
import { Cart, Navbar, PaginationSection } from './components';

function App() {
	return (
		<main className=" max-w-[1480px]  mx-auto poppins-regular bg-background  ">
			<div className="">
				<Navbar />
				<h1 className="font-[700] tracking-[16px] text-[32px]  text-nowrap md:text-[40.8px]  lg:text-[63.8px]  text-center  text-textPrimary  select-none ">
					THE BLOG
				</h1>

				{/* resent blog post section */}

				<div className="p-[10px] md:p-[30px] lg:p-[40px] ">
					<p className="text-[24px] font-[600] leading-[32px] mt-10 mb-5  text-textPrimary h-[32px]">Recent blog posts</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-10">
						<Cart />
						<Cart />
						<Cart />
					</div>
				</div>

				{/* pagination section */}
				<div className="p-[10px] md:p-[30px] lg:p-[40px] ">
					<PaginationSection />
				</div>
			</div>

			<footer className="w-full">
				<div className="w-full h-[40px] flex items-center justify-center gap-[14px] text-textPrimary text-[18px]">
					<p>© 2023</p> <p>Twitter</p> <p>LinkedIn</p> <p>Email</p>
					<p> feed Add to Feedly</p>
				</div>
			</footer>
		</main>
	);
}

export default App;
