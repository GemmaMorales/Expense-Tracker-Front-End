import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import clientLogo from "../../img/logohoaBookkeeping.png";

async function selectTransactionsToSend() {
	console.log("Select transactions with missing information");
	const response = await fetch(process.env.connectionToBackEnd + "/transactions", {
		method: "GET"
	});
	const data = await response.json();
	console.log("Transactions from quickbooks were obtained");
}

export const NewTransactionInfo = () => (
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
);
