import React from "react";
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
	console.log("Transaction Description", transactionDescriptions);
	return (
		<div>
			<div>
				<div className="text-center mt-5">
					<img src={clientLogo} />

					<h1> Company X</h1>

					<h2>Input Missing Transaction Information</h2>

					<button onClick={selectTransactionsToSend}>Send to Client</button>

					<form>
						<div clasName="row">
							<div className="col">
								<label>Transaction id</label>
								<input type="text" />
							</div>
							<div className="col">
								<label>Transaction id</label>
								<input type="text" />
							</div>
						</div>
						<div clasName="row">
							<div className="col">
								<button>Save Selected Transactions</button>
							</div>
						</div>
					</form>
				</div>
				<div className="container-fluid">
					<div className="jumbotron text-align">
						<h2>Sample Company</h2>
						<p>Please enter the requested information in the highlighted sessions.</p>
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
									<th scope="col">Ammount</th>
									<th scope="col" />
								</tr>
							</thead>
							<tbody>
								{store.clientTransactions.map((t, index) => (
									<tr key={index}>
										<td>{t.date}</td>
										<td>{t.transaction_type}</td>
										<td>{t.transaction_id}</td>
										{t.vendor_qb_id ? <td>{t.vendor_qb_id}</td> : <td>{t.customer_qb_id}</td>}

										<td>
											<input
												type="text"
												placeholder="enter service/good provided or received"
												value={transactionDescriptions[t.transaction_id]}
												onChange={e => {
													saveTransactionDescriptions({
														...transactionDescriptions,
														[t.transaction_id]: e.target.value
													});
												}}
											/>
										</td>
										<td>{t.ammount}</td>
										<td>
											<button />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
