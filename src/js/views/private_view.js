import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";
import PropTypes from "prop-types";

export const PrivateView = ({ history }) => {
	const { store, actions } = React.useContext(Context);
	console.log(Context);
	if (store.token == null) {
		history.push("/login");
	}

	// this function useEffect will run only one time, when the component is finally loaded the first time.

	return (
		<div className="container">
			<div className="container-fluid bg-light mb-3">
				<div className="img-container-transactions w-25 p-3 h-25 mx-auto">
					<img className="appLogo" src={appLogo} />
				</div>
				<h1 className="blueh1 text-center">Client List</h1>
				<div className="container">
					<ul className="list-group">
						{store.clients.map((c, index) => (
							<li className="list-group-item" key={index}>
								{c.company_name}

								<button
									type="button"
									className="btn btn-outline-primary float-right"
									onClick={() =>
										actions.getTransactions(c.client_id).then(() => history.push("/transactions"))
									}>
									<h5>Get Client Transactions</h5>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
PrivateView.propTypes = {
	history: PropTypes.object
};
