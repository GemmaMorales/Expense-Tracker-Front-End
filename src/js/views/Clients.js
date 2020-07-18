import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import clientLogo from "../../img/logohoaBookkeeping.png";

async function selectTransactionsToSend() {
	console.log("Select transactions with missing information");
	const response = await fetch(process.env.API_HOST + "/clients", {
		method: "GET"
	});
	const data = await response.json();
	console.log("Select Clients in Quickbooks");
}

export const Transactions = () => (
	<div className="text-center mt-5">
		<img src={clientLogo} />

		

		

		<button onClick={selectClients}>Select Clients</button>

		<form>
			<div clasName="row">
				<div className="col">
					<label>Company/Client</label>
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
