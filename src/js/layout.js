import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { NewTransactionInfo } from "./views/NewTransactionInfo";
import { LoginToTransactionTracker } from "./views/LoginToTransactionTracker";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const Todos = props => {
		// initialize the tasks variable to an empty array and hook it to setTasks function
		const [tasks, setTasks] = useState([]);

		// this function useEffect will run only one time, when the component is finally loaded the first time.
		useEffect(
			() =>
				// here i fetch my todos from the API
				fetch("https://3000-d7d59d6a-1d3a-4ba3-9283-de66e911534d.ws-us02.gitpod.io/")
					.then(r => r.json())
					.then(data => setTasks(data)), //here it re-set the variable tasks with the incoming data
			[]
		);

		return (
			<ul>
				{tasks.map((t, index) => (
					<li key={index}>{t.label}</li>
				))}
			</ul>
		);
	};
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/login_to_transaction_tracker" component={LoginToTransactionTracker} />
						<Route exact path="/new_transaction_info" component={NewTransactionInfo} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
