import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
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
	const signUpFormHandler = (e) => {
		e.preventDefault();
		console.log(name);

		try {
			// Set Loading to True
			// Make a request to register user with strapi
			// Set loading to false
			//Put token in local storage
			// redirect user to page
		} catch (error) {
			// Set Loading to false
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
					Name: <br />
					<input
						type="text"
						value={name}
						id="3"
						placeholder="Name"
						required
						onChange={handleNameChange}
					/>
				</label>
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
