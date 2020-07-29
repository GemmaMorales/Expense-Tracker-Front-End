import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";

export const Navbar = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
			<Link className="navbar-brand" to="/">
				<img className="appLogoNav" src={appLogo} />
			</Link>

			<div className="ml-auto d-flex">
				{store.token == null ? (
					<Link to="/login">
						<button className="btn btn-primary">
							<h5 className="whiteh5">Log in</h5>
						</button>
					</Link>
				) : (
					<div className="container">
						<button className="btn btn-outline-primary">
							<Link to="/private">
								<h5>Private</h5>
							</Link>
						</button>

						<button className="btn btn-outline-primary" onClick={() => actions.destroySession()}>
							<h5>Log Out</h5>
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};
