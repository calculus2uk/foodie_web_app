import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const signInFormHandler = (e) => {
		e.preventDefault();

		console.log("object");
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

			<form onSubmit={signInFormHandler} className="form_info">
				<label>
					Email Address: <br />
					<input
						type="email"
						value={email}
						placeholder="Email Address"
						required
						onChange={handleEmailChange}
					/>
				</label>
				<br />
				<label>
					Password: <br />
					<input
						type="text"
						value={password}
						placeholder="Password"
						required
						onChange={handlePasswordChange}
					/>
				</label>
				<br />
				<Link to="">Forgot password ?</Link>
				<input type="submit" value="Sign In" className="button red mgTop_20" />
			</form>
		</div>
	);
};

export default SignIn;
