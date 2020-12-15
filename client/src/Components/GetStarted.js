import { Link } from "react-router-dom";

//CSS

import "../App.css";
//SVG
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as OK } from "../images/bev.svg";

//Components
const GetStarted = () => {
	return (
		<div className="getStarted_container">
			<Logo className="logo" />
			<h1>
				<span>Food for </span>
				<span>Everyone</span>
			</h1>
			<OK className="start_image" />

			<Link to="signin" className="button link_button">
				Get Started
			</Link>
		</div>
	);
};

export default GetStarted;
