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
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card card-signin my-5">
						<div className="card-body">
							<h5 className="card-title text-center">Private view</h5>
							<div className="img-container">
								<img className="appLogo" src={appLogo} />
							</div>
							<ul>
								{store.clients.map((c, index) => (
									<li key={index}>
										{c.company_name}
										<div className="col">
											<button
												onClick={() =>
													actions
														.getTransactions(c.client_id)
														.then(() => history.push("/transactions"))
												}>
												Get Client Transactions
											</button>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
PrivateView.propTypes = {
	history: PropTypes.object
};
