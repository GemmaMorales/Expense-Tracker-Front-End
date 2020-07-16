import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Transaction Tracker</span>
			</Link>
			<div className="ml-auto">
				{store.token == null ? (
					<Link to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link>
				) : (
					<Link to="/private">
						<span className="navbar-brand mb-0 h1">Private</span>
					</Link>
				)}
			</div>
		</nav>
	);
};
