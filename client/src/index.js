import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import reportWebVitals from "./reportWebVitals";
//
import App from "./App";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
//Css
import "./index.css";

const Root = () => (
	<Router>
		<Switch>
			<Route component={App} exact path="/" />
			<Route component={SignIn} path="/signin" />
			<Route component={SignUp} path="/signup" />
		</Switch>
	</Router>
);
ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//if (module.hot) module.hot.accept();
