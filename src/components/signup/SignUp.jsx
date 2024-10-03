import React, {useContext, useEffect} from "react";
import TheMealText from "../TheMealText";
import Footer from "../Footer";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axiosConfig from "../../api/axiosConfig";
import {AuthContext} from "../authProvider/AuthProvider";

const usernameValidations = {
	required: "username is required",
	pattern: {
		value: /^[A-Z][a-zA-Z0-9]*$/,
		message:
			"Username must start with a capital letter and contain only letters.",
	},
};
const passwordValidations = {
	required: "password is required",
	minLength: {
		value: 8,
		message: "minimum character must be 8",
	},
};

const userIsAlreadyPresentError = {
	name: "username",
	type: "custom",
	error: "User is already present",
};

// Component
const SignUp = () => {
	const {
		register,
		watch,
		handleSubmit,
		setError,
		reset,
		formState: {isSubmitting, errors},
	} = useForm();
	const navigate = useNavigate();

	//  check if user is logged in or not
	const {isAuth, setAuth} = useContext(AuthContext);
	useEffect(() => {
		if (isAuth) navigate("/themeal");
	});

	const onSubmit = async (data) => {
		try {
			const response = await axiosConfig.post("/api/users/createuser", {
				data: {username: data.username, password: data.password},
			});
			localStorage.setItem("themeal_username", data.username);
			setAuth(true);
		} catch (error) {
			reset();
			const {status} = error.response;
			if (status == 409) {
				setError("username", {
					type: "custom",
					message: "username is already present",
				});
			}
		}
	};

	const UsernameError = () => (
		<p className="text-sm font-light text-red-500 mt-[-10px] ps-5">
			{errors.username && errors.username.message}
		</p>
	);

	const PasswordError = () => (
		<p className="text-sm font-light text-red-500 mt-[-10px] ps-5">
			{errors.password && errors.password.message}
		</p>
	);

	const ConfirmPasswordError = () => (
		<p className="text-sm font-light text-red-500 mt-[-10px] ps-5">
			{errors.confirmPassword && errors.confirmPassword.message}
		</p>
	);

	return (
		<>
			<div className="w-full h-full flex justify-center items-center border border-black">
				<div className="lg:min-w-[400px] w-80 md:translate-y-[-20%]">
					<div className="text-center text-4xl">
						<TheMealText style1={"text-5xl"} style2={"uppercase font-bold"}/>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-10 flex flex-col gap-3"
						autoComplete="off"
					>
						<h3 className="text-center text-3xl">Sign-up</h3>
						<input
							{...register("username", usernameValidations)}
							type="text"
							name="username"
							placeholder="username"
							className="py-3 ps-5 rounded-full border w-full"
							autoComplete="off"
						/>
						<UsernameError/>
						<input
							{...register("password", passwordValidations)}
							type="password"
							name="password"
							placeholder="password"
							className="py-3 ps-5 rounded-full border w-full"
							autoComplete="off"
						/>
						<PasswordError/>
						<input
							{...register("confirmPassword", {
								validate: (value) => {
									if (watch("password") != value) return "Password is not same";
									return true;
								},
							})}
							type="password"
							name="confirmPassword"
							placeholder="confirm password"
							className="py-3 ps-5 rounded-full border w-full"
							autoComplete="off"
						/>
						<ConfirmPasswordError/>
						<button
							type="submit"
							className="w-full bg-slate-800 text-white py-3 rounded-full"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Loading..." : "Create Account"}
						</button>
						<p className="text-sm font-light md:mt-0 mt-[-5px] text-center">
							Already have an account ?
							<Link to={"/"} className="text-blue-600 ms-2">
								click here
							</Link>
						</p>
					</form>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default SignUp;
