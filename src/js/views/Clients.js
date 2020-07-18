import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import clientLogo from "../../img/logohoaBookkeeping.png";

async function selectClients() {
	console.log("Select Company/Client in Quickbooks");
	const response = await fetch(process.env.API_HOST + "/clients", {
		method: "GET"
	});
	const data = await response.json();
	console.log("Select Company/Client in Quickbooks");
}

export const selectClient = () => (
	<div className="text-center mt-5">
		<img src={clientLogo} />

		<form>
			<div clasName="row">
				<div className="col">
					<button onClick={() => actions.selectClient(company_name)}>Select Company/Client</button>
				</div>
			</div>
		</form>
	</div>
);
