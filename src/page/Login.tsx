import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Google from "/google-color-svgrepo-com.svg";
import Github from "/github-svgrepo-com.svg";
import Facebook from "/facebook-network-communication-internet-interaction-svgrepo-com.svg";
const login = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		email: "",

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
				"http://localhost:3000/admin/login",
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
				className=" flex  justify-center items-center w-full h-full"
			>
				<div className="h-auto p-8 rounded-xl flex flex-col justify-center items-center bg-[#ffffff78]">
					<p className="font-black w-full mb-3 text-left">login</p>
					<div className="flex w-full mb-3 justify-around">
						<img src={Google} alt="" className="w-6" />
						<img src={Facebook} alt="" className="w-7" />
						<img src={Github} alt="" className="w-7" />
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
								value="sign in"
								className="p-1 text-black my-1 text-white rounded bg-orange-600"
								id="input2"
								required
							/>
							<a href="/">
								<input
									type="button"
									value="Register"
									className="p-1 w-full text-black my-1 text-white rounded bg-blue-600"
									id="input2"
									required
								/>
							</a>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default login;
