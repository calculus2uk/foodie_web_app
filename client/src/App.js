import { Link } from "react-router-dom";

//CSS
import "./App.css";

//SVG
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as OK } from "./images/bev.svg";

//IMAGES

//Components

function App() {
	return (
		<div className="App">
			<Logo className="logo" />
			<h1>
				<span>Food for </span>
				<span>Everyone</span>
			</h1>
			<OK style={{ width: "100vw", height: "50vh" }} />

			<Link to="signin" className="button link_button">
				Get Started
			</Link>
		</div>
	);
}

export default App;
