import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = (e) => {
		setEmail(e.target.value);
	};
	const vv = () => console.log("hi");
	return (
		<div className="sign_in_up_container">
			<div className="upper">
				<Logo />
			</div>
			<div className="bb">
				<Link to="signin">Sign-In</Link>
				<Link to="signup">Sign-Up</Link>
			</div>

			<form onSubmit={vv} className="form_info">
				<label>
					Email Address: <br />
					<input type="text" value={email} onChange={handleChange} />
				</label>
				<br />
				<label>
					Password: <br />
					<input type="password" value={password} onChange={handleChange} />
				</label>
				<br />
				<label>
					Confirm Password: <br />
					<input type="text" value={password} onChange={handleChange} />
				</label>
				<br />
				<Link to="">Forgot password ?</Link>
			</form>
			<input type="submit" value="SignUp" className="button red" />
		</div>
	);
};

export default SignUp;
