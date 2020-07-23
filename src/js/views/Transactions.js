import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import clientLogo from "../../img/logohoaBookkeeping.png";
import { Context } from "../store/appContext.js";

async function selectTransactionsToSend() {
	console.log("Select transactions with missing information");
	const response = await fetch(process.env.API_HOST + "/transactions", {
		method: "GET"
	});
	const data = await response.json();
	console.log("Transactions from quickbooks were obtained");
}

export const Transactions = () => {
	const { store, actions } = React.useContext(Context);
	const [transactionDescriptions, saveTransactionDescriptions] = React.useState({});
	const [payeeOrPayerName, savePayeeOrPayerName] = React.useState({});

	return (
		<div>
			<div>
				<div className="container-fluid bg-light mb-3">
					<div className="container">
						<p>Select Transactions with Missing Details</p>
					</div>
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
											<span>{t.vendor_qb_id}</span>
										) : (
											<span>{t.customer_qb_id}</span>
										)}
										{t.vendor_qb_id == null && t.customer_qb_id == null ? (
											<input
												type="text"
												placeholder="enter the name of provider for service/good"
												value={payeeOrPayerName[t.transaction_id]}
												onChange={e => {
													savePayeeOrPayerName({
														...payeeOrPayerName,
														[t.transaction_id]: e.target.value
													});
												}}
											/>
										) : (
											""
										)}
									</td>
									<td>
										<input
											type="text"
											placeholder="enter service/good provided or received"
											value={
												transactionDescriptions[t.transaction_id] || t.transaction_description
											}
											onChange={e => {
												saveTransactionDescriptions({
													...transactionDescriptions,
													[t.transaction_id]: e.target.value
												});
											}}
										/>
									</td>
									<td>{t.ammount}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="text-center mt-5">
					<h1> Company X</h1>

					<h2>Input Missing Transaction Information</h2>

					<form>
						<div clasName="row">
							<div className="col">
								<button
									type="button"
									onClick={() => actions.saveTransactions(transactionDescriptions, payeeOrPayerName)}>
									Send Selected Transactions
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
