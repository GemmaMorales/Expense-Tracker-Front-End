import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import clientLogo from "../../img/logohoaBookkeeping.png";

async function selectTransactionsToSend() {
	console.log("Select transactions with missing information");
	const response = await fetch(
		"https://quickbooks.intuit.com/oa/get-quickbooks/?cid=ppc_G_e_US_.QB_US_GGL_Brand_Top-Terms_Exact_Search_Desktop._quickbooks_txt_Sitelink_QuickBooks%E2%84%A2-Online&gclid=CjwKCAjwltH3BRB6EiwAhj0IUPsu1eLyU5j5QctJIF4i--m7vC0_l1WlZgpiLFxE8_PLJNgvD7ZX9xoCFnkQAvD_BwE&gclsrc=aw.ds",
		{
			method: "GET"
		}
	);
	const data = await response.json();
	console.log("Transactions from quickbooks were obtained");
}

export const NewTransactionInfo = () => (
	<div className="text-center mt-5">
		<img src={clientLogo} />
		<h1> Company X</h1>
		<h2>Input Missing Transaction Information</h2>
		<button onClick={selectTransactionsToSend}>Send to Client</button>
		<form />
		<p>
			<img src={rigoImage} />
		</p>

		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
