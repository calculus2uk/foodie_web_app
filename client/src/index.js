import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import reportWebVitals from "./reportWebVitals";

//
import GetStarted from "./Components/GetStarted";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import App from "./App";

//CSS
import "./index.css";

//
const Root = () => (
	<Router>
		<Switch>
			<Route component={GetStarted} exact path="/" />
			<Route component={SignIn} path="/signin" />
			<Route component={SignUp} path="/signup" />
			<Route component={App} path="/pr" />
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
