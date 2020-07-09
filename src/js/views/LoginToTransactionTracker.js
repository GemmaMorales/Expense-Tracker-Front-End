import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";

async function selectTransactionsToSend() {
	console.log("Welcome to the Transaction Tracker App!");
	const response = await fetch(process.env.connectionToBackEnd + "/transactions", {
		method: "GET"
	});
	const data = await response.json();
	console.log("Transactions from quickbooks were obtained");
}

export const LoginToTransactionTracker = () => (
	<div className="text-center mt-5">
		<img src={appLogo} />

		<h2>Please login to track your transactions on Quickbooks</h2>

		<form>
			<div clasName="row">
				<div className="col">
					<label>Enter Username</label>
					<input type="text" />
				</div>
				<div className="col">
					<label>Enter Password</label>
					<input type="text" />
				</div>
			</div>
			<div clasName="row">
				<div className="col">
					<button onClick={selectTransactionsToSend}>Click to Connect to Quickbooks</button>
				</div>
			</div>
		</form>
	</div>
);
