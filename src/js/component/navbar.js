import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/home">
				<h5>Transaction Tracker</h5>
			</Link>
			<div className="ml-auto">
				{store.token == null ? (
					<Link to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link>
				) : (
					<Link to="/private">
						<h5>Private</h5>
					</Link>
				)}
			</div>
		</nav>
	);
};
