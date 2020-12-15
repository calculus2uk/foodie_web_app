import { useState } from "react";
import { Link } from "react-router-dom";

// SVG
import { ReactComponent as Logo } from "../images/logo.svg";
//
const API_URL = "http://localhost:1337";
//
const SignUp = (props) => {
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleUserNameChange = (e) => {
		setUserName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};
	const signUpFormHandler = async (e) => {
		e.preventDefault();

		try {
			// Set Loading to True
			// Make a request to register user with strapi

			// Set loading to false
			//Put token in local storage
			// redirect user to page

			const rawResponse = await fetch(`${API_URL}/auth/local/register`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, email, password }),
			});
			const content = await rawResponse.json();
			console.log(content);
			props.history.push("/pr");
		} catch (error) {
			// Set Loading to false
			//Show Error message
			console.log("error in ....");
		}
	};
	return (
		<div className="sign_in_up_container">
			<div className="upper">
				<Logo />
			</div>
			<div className="bb">
				<Link to="signin">Sign-In</Link>
				<Link to="signup">Sign-Up</Link>
			</div>

			<form onSubmit={signUpFormHandler} className="form_info">
				<label>
					Username: <br />
					<input
						type="text"
						value={username}
						id="3"
						placeholder="Username"
						required
						onChange={handleUserNameChange}
					/>
				</label>
				<br />
				<label>
					Email Address: <br />
					<input
						type="email"
						value={email}
						placeholder="email Address"
						required
						onChange={handleEmailChange}
					/>
				</label>
				<br />
				<label>
					Password: <br />
					<input
						type="password"
						value={password}
						placeholder="Password"
						required
						onChange={handlePasswordChange}
					/>
				</label>
				<br />
				<label>
					Confirm Password: <br />
					<input
						type="password"
						value={confirmPassword}
						placeholder="Please Confirm Password"
						required
						onChange={handleConfirmPasswordChange}
					/>
				</label>
				<br />
				<input type="submit" value="Sign Up" className="button red" />
			</form>
		</div>
	);
};

export default SignUp;
