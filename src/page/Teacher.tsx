import { useState } from "react";
import userSvg from "/user-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Google from "/google-color-svgrepo-com.svg";
const teacher = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		email: "",
		username: "",
		password: ""
	});
	const handleChange = e => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		});
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:3000/teacher",
				data
			);
			navigate("/home");
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="flex justify-end items-center w-full h-full"
			>
				<div className=" h-full rounded-xl flex justify-center items-center bg-[#ffffff78] ">
					<div className="h-auto p-3 rounded-xl flex flex-col justify-center items-center">
						<p className="font-black w-full mb-3 text-left">
							Add teacher
						</p>
<div className="bg-[#ffffff71] m-4 rounded-xl h-32 aspect-square flex justify-center items-center">
   <img src={userSvg} width={100} alt="profile pic"/>
</div>
						<div className="grow flex gap-3 justify-center items-center flex-col">
							<div className="">
								<input
									onChange={handleChange}
									type="text"
									value={data.email}
									className="p-1 border-0 bg-transparent border-b-amber-400 border-b-2"
									id="input2"
									placeholder="Email"
									name="email"
									required
								/>
							</div>
							<div>
								<input
									onChange={handleChange}
									type="text"
									value={data.username}
									className="p-1 border-0 bg-transparent border-b-amber-400 border-b-2"
									id="input2"
									placeholder="Username"
									name="email"
									required
								/>
							</div>
							<div className="">
								<input
									type="text"
									onChange={handleChange}
									value={data.password}
									placeholder="password"
									name="password"
									className="p-1 text-black border-0 bg-transparent border-b-amber-400 border-b-2"
									id="input2"
									required
								/>
							</div>
							<div className="flex flex-col  my-5 w-full justify-around ">
								<input
									type="submit"
									value="Add teacher"
									className="p-1 text-black my-1 text-white rounded bg-orange-600"
									id="input2"
									required
								/>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default teacher;
