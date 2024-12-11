import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, SquareUserRound, Search, LogIn } from "lucide-react";
const Navbar = ({isTranslated, setIsTranslated}) => {
	return (

		<div className="flex bg-[#ffffff71] rounded-xl my-1 gap-5 p-2 justify-between w-full">
			<div className="transition-all duration-300 md:w-36 flex justify-between items-center">
			 	<h2 className="font-black font-sans bg-green-500 rounded-xl px-2 py-2 hidden md:block text-white">
			 		Mr.Manager
			 	</h2>
			{	isTranslated? 
			<div onClick={()=>setIsTranslated(false)} className="md:hidden w-full transition-all duration-300 flex justify-end">
					<Menu />
				</div>:
				<div onClick={()=>setIsTranslated(true)} className="md:hidden w-full transition-all duration-300 flex justify-end">
					<X />
				</div>}
			</div>
			<div className="text-center max-w-2xl gap-3 flex justify-center items-center grow">
				<input
					type="search"
					placeholder="search"
					className="text-center w-full bg-gray-200 rounded-xl py-2 px-3"
				/>
				<Search/>
			</div>

			<div className="hidden gap-4 md:flex">
				<Link to="/login" className="px-2 flex py-3">
					<SquareUserRound />
					Login
				</Link>
				<Link to="/register" className="px-2  flex py-3">
					<LogIn />
					Sign up
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
