import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";

export const Navbar = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
			<Link className="navbar-brand" to="/start_page">
				<img className="appLogoNav" src={appLogo} />
			</Link>

			<div className="ml-auto">
				{store.token == null ? (
					<Link to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link>
				) : (
					<div className="d-flex">
						<Link to="/private">
							<h5>Private</h5>
						</Link>

						<button className="btn btn-primary" onClick={() => actions.destroySession()}>
							Log Out
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};
