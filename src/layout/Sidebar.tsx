import { useState } from "react";
import {
	Home,
	LogOut,
	BookCopy,
	Bell,
	User,
	GraduationCap,
	ContactRound,
	School
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ isTranslated }) => {
	const lowerNavMenu = [
		{
			name: "Profile",
			Icon: <User />,
			link: "/profile"
		},
		{
			name: "Logout",
			Icon: <LogOut />,
			link: "/"
		}
	];
	const navbarMenu = [
		{
			name: "Home",
			Icon: <Home />,
			link: "/"
		},
		{
			name: "Teachers",
			Icon: <GraduationCap />,
			link: "/teachers"
		},
		{
			name: "Students",
			Icon: <ContactRound />,
			link: "/students"
		},
		{
			name: "Classes",
			Icon: <School />,
			link: "/classes"
		},
		{
			name: "Subjects",
			Icon: <BookCopy />,
			link: "/subjects"
		},
		{
			name: "Notice",
			Icon: <Bell />,
			link: "/notice"
		}
	];
	return (
			<div
				style={{ left: isTranslated ? -1000 : 0 }}
				className="bg-amber-600 md:bg-transparent rounded-xl absolute md:static left-0 transition-all  duration-300 flex-col w-40 flex justify-between h-full"
			>
		<div className="bg-[#ffffff71] py-10 rounded-xl h-full">
				<div className="upper">
					{navbarMenu.map((menu, index) => {
						return (
							<Link
								key={index}
								to={menu.link}
								className="flex font-semibold justify-between items-center py-3 px-5"
							>
								{menu.Icon}
<span className="grow text-right">
								{menu.name}
</span>
							</Link>
						);
					})}
				</div>
			</div>
			</div>
		
	);
};

export default Sidebar;
