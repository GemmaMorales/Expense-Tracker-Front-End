import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import clientLogo from "../../img/logohoaBookkeeping.png";

async function selectTransactionsToSend() {
	console.log("Select transactions with missing information");
	const response = await fetch(process.env.API_HOST + "/transactions", {
		method: "GET"
	});
	const data = await response.json();
	console.log("Transactions from quickbooks were obtained");
}

export const Transactions = () => (
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
							<th scope="col" />
							<th scope="col">Transaction Date</th>
							<th scope="col">Transaction Type</th>
							<th scope="col">Transaction ID</th>
							<th scope="col"> Who did you pay or who payed you</th>
							<th scope="col">Vendor Details</th>
							<th scope="col">Description of Services or Goods Purchased</th>
							<th scope="col">Expenses(out)</th>
							<th scope="col">Income</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<button />
							</td>
							<td>06/19/2020</td>
							<td>Expense</td>
							<td>#1</td>
							<td>GhostBusters Inc</td>
							<td>Memorial Lane 20</td>
							<td>Eliminated Ghosts</td>
							<td>$200.00</td>
							<td />
						</tr>
						<tr>
							<td>
								<button />
							</td>
							<td>06/19/2020</td>
							<td>Deposit</td>
							<td>#2</td>
							<td>Myth Busters LLC</td>
							<td>Scary St 1020</td>
							<td>Provided Fake news</td>
							<td />
							<td>$200.00</td>
						</tr>
						<tr>
							<td>
								<button />
							</td>
							<td>06/20/2020</td>
							<td>Deposit</td>
							<td>#3</td>
							<td>
								<input type="text" value="enter company name" />
							</td>
							<td />
							<td>
								<input type="text" value="enter service/good provided or received" />
							</td>
							<td />
							<td />
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
);
