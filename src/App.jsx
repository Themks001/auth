import { useState } from "react";
import Sidebar from "./layout/Sidebar.tsx";
import Navbar from "./layout/Navbar.jsx";
import Teacher from "./page/Teacher.tsx";
import Register from "./layout/register.tsx";
import Login from "./page/Login.tsx"
import Student from "./page/Student.tsx";
import Classes from "./page/Classes.tsx";
import Notice from "./page/Notice.tsx";
import Subject from "./page/Subject.tsx";
import Home from "./page/Home.tsx";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
function App() {
	const [isTranslated, setIsTranslated] = useState(false);
	return (
		<>
			<div className="h-[100dvh] overflow-x-auto w-screen p-1 bg-amber-500 flex flex-col">
				<Navbar
					isTranslated={isTranslated}
					setIsTranslated={setIsTranslated}
				></Navbar>
				<div className="grow relative">
					<div className="flex h-full">
						<Sidebar isTranslated={isTranslated} />
						<div className="grow p-2 bg-[#ffffff71] rounded-xl ml-1">
							<Routes>
								<Route path="/" element={<Register />}></Route>
								<Route
									path="/teachers"
									element={<Teacher />}
								></Route>
								<Route path="/home" element={<Home />}></Route>
								<Route
									path="/students"
									element={<Student />}
								></Route>
								<Route
									path="/classes"
									element={<Classes />}
								></Route>
								<Route
									path="/subjects"
									element={<Subject />}
								></Route>
								<Route
									path="/notice"
									element={<Notice />}
								></Route>
								<Route path="/login" element={<Login/>}></Route>
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
