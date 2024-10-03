import React, { useContext, useState, useEffect } from "react";
import TheMealText from "../TheMealText";
import { Link, json, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosConfig from "../../api/axiosConfig";
import { AuthContext } from "../authProvider/AuthProvider";

const usernameValidations = {
	required: "username is required",
	pattern: {
		value: /^[A-Z][a-zA-Z]*$/,
		message:
			"Username must start with a capital letter and contain only letters.",
	},
};

const passwordValidations = {
	required: "password is required",
	//  minLength: {
	//   value: 8,
	//   message: "minimum character must be 8",
	//  },
};

const newPasswordValidation = {
	required: "Password is required",
	minLength: {
		value: 8,
		message: "minimum character must be 8",
	}
};

const Login = () => {
		const {
			register,
			handleSubmit,
			setError,
			watch,
			formState: { errors, isSubmitting },
		} = useForm();
	const navigate = useNavigate();
	const [isForget, setIsForget] = useState(false);

	//  check if user is present or not
	const { isAuth, setAuth } = useContext(AuthContext);
	useEffect(() => {
		if (isAuth) navigate("/themeal");
	});

	const onSubmit = async (data) => {
		try {
			const response = await axiosConfig.post("/api/users/loginuser", {
				data: {
					username: watch("username"),
					password: watch("password"),
				},
			});

			console.log(response);

			if (response.statusText === "OK") {
				localStorage.setItem("themeal_username", watch("username"));
				setAuth(true);
			} else {
				throw errors;
			}
		} catch (error) {
			alert("Something went wrong!");
		}
	};

	const UsernameError = () => {
		return (
			errors.username && (
				<p className="text-sm font-light text-red-500 mt-[-10px] ps-5">
					{errors.username.message}
				</p>
			)
		);
	};

	const PasswordError = () => {
		return (
			errors.password && (
				<p className="text-sm font-light text-red-500 mt-[-10px] ps-5">
					{errors.password.message}
				</p>
			)
		);
	};

	const NewPasswordError = () => {
		return (
			errors.newpassword && (
				<p className="text-sm font-light text-red-500 mt-[-10px] ps-5">
					{errors.newpassword.message}
				</p>
			)
		)
	}

	const handleForgetPasswordSubmit = async (data) => {
		try {
			const response = await axiosConfig.post("/api/users/forgetpass", {
				data: {
					username: data.username,
					password: data.newpassword,
				},
			});

			if (response.statusText === "OK") {
				alert("Password changed!")
			} else {
				throw errors;
			}

		} catch (error) {
			alert("something went wrong");
		}
	}

	return (
		<>
			<div className="w-full h-full flex justify-center items-center border border-black">
				<div className="lg:min-w-[400px] w-80 md:translate-y-[-30%]">
					<div className="text-center text-4xl">
						<TheMealText style1={"text-5xl"} style2={"uppercase font-bold"} />
					</div>

					{
						!isForget && (
							<form
								className="mt-10 flex flex-col gap-3"
								onSubmit={handleSubmit(onSubmit)}
								autoComplete="off"
							>
								<h3 className="text-center text-3xl">Login</h3>
								<input
									{...register("username", usernameValidations)}
									autoComplete="off"
									type="text"
									name="username"
									placeholder="username"
									className="py-3 ps-5 rounded-full border w-full"
								/>
								<UsernameError />
								<input
									{...register("password", passwordValidations)}
									autoComplete="off"
									type="password"
									name="password"
									placeholder="password"
									className="py-3 ps-5 rounded-full border w-full"
								/>
								<PasswordError />
								<button
									type="submit"
									className="w-full bg-slate-800 text-white py-3 rounded-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Loading..." : "Login"}
								</button>
								<p
									onClick={() => setIsForget(true)}
									className="text-sm font-light text-black md:mt-0 mt-[-5px] text-center text-blue-600 ms-2 cursor-pointer">
									Forget password
								</p>
								<p className="text-sm font-light text-black md:mt-0 mt-[-10px] text-center">
									create a new account ?
									<Link to={"/signup"} className="text-blue-600 ms-2">
										click here
									</Link>
								</p>
							</form>
						)
					}
					{
						isForget && (
							<form
								className="mt-10 flex flex-col gap-3 "
								onSubmit={handleSubmit(handleForgetPasswordSubmit)}
								autoComplete="off"
							>
								<h3 className="text-center text-3xl">Forget password</h3>
								<input
									{...register("username", usernameValidations)}
									autoComplete="off"
									type="text"
									name="username"
									placeholder="username"
									className="py-3 ps-5 rounded-full border w-full"
								/>
								<UsernameError />
								<input
									{...register("newpassword", newPasswordValidation)}
									autoComplete="off"
									type="password"
									name="newpassword"
									placeholder="new password"
									className="py-3 ps-5 rounded-full border w-full"
								/>
								<NewPasswordError />
								<button
									type="submit"
									className="w-full bg-slate-800 text-white py-3 rounded-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Loading..." : "Change password"}
								</button>
								<p
									onClick={() => setIsForget(prev => !prev)}
									className="text-sm font-light text-black md:mt-0 mt-[-5px] text-center text-blue-600 ms-2 cursor-pointer">
									Login
								</p>
							</form>
						)
					}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Login;
