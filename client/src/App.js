import { slide as Menu } from "react-burger-menu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FoodCard from "./Components/FoodCard";

//CSS
import "./burger.css";
import "react-tabs/style/react-tabs.css";

//SVG
import { ReactComponent as Search } from "./images/search.svg";

//
const showSettings = (e) => {
	e.preventDefault();
};

// Component
const App = () => {
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
				<h2 className="text_secondary mgTop_20">Delicious food for you</h2>
				<label htmlFor="search">
					<Search className="search_icon" />
					<input type="text" className="search_input" placeholder="Search" />
				</label>
				<h3>Tabs</h3>
				<Tabs>
					<TabList>
						<Tab>Foods</Tab>
						<Tab>Drinks</Tab>
						<Tab>Snacks</Tab>
						<Tab>Pizza</Tab>
					</TabList>

					<TabPanel className="food_cards_container">
						<FoodCard />
						<FoodCard />
						<FoodCard />
						<FoodCard />
						<FoodCard />
					</TabPanel>
					<TabPanel>
						<FoodCard />
					</TabPanel>
					<TabPanel>
						<FoodCard />
					</TabPanel>
					<TabPanel>
						<FoodCard />
					</TabPanel>
				</Tabs>
			</main>
		</div>
	);
};

export default App;
