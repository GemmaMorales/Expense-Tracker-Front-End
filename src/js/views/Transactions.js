import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import clientLogo from "../../img/logohoaBookkeeping.png";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Transactions = ({ history }) => {
	const { store, actions } = React.useContext(Context);

	if (store.token == null) {
		history.push("/login");
	}

	return (
		<div>
			<div>
				<div className="container-fluid bg-light h-25 mb-3">
					<h1 className="blueh1">Transactions with Missing Details</h1>
				</div>
				<div>
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th scope="col">Transaction Date</th>
								<th scope="col">Transaction Type</th>
								<th scope="col">Transaction ID</th>
								<th scope="col">Payee or Payer</th>
								<th scope="col">Description of Services or Goods Purchased</th>
								<th scope="col">Amount</th>
							</tr>
						</thead>
						<tbody>
							{store.clientTransactions.map((t, index) => (
								<tr key={index}>
									<td>{t.date}</td>
									<td>{t.transaction_type}</td>
									<td>{t.transaction_id}</td>
									<td>
										{t.vendor_qb_id ? (
											<span className="whitespan">{t.vendor_qb_id}</span>
										) : (
											<span className="whitespan">{t.customer_qb_id}</span>
										)}
									</td>
									<td>{t.description}</td>
									<td>{t.ammount}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="text-center mt-5">
					<form>
						<div clasName="row">
							<div className="col">
								<button
									className="btn btn-outline-primary"
									type="button"
									onClick={() => actions.askTransactions(store.client_id)}>
									<h5 className="whiteh5">Ask Client for Transaction Details</h5>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

Transactions.propTypes = {
	history: PropTypes.object
};
