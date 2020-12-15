import { slide as Menu } from "react-burger-menu";
import "../burger.css";
const showSettings = (e) => {
	e.preventDefault();
};
//
const Profile = () => {
	return (
		<div id="outer-container">
			<Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
				<a id="home" className="menu-item" href="/">
					Home
				</a>
				<a id="about" className="menu-item" href="/about">
					About
				</a>
				<a id="contact" className="menu-item" href="/contact">
					Contact
				</a>
				<a
					onClick={showSettings}
					className="menu-item--small"
					href="tuagba.com">
					Settings
				</a>
			</Menu>
			<main id="page-wrap">
				<h1 style={{ color: "red" }}>Delicious food for you</h1>
			</main>
		</div>
	);
};

export default Profile;
