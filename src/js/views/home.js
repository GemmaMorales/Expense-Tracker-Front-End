import React from "react";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Welcome to Transaction Tracker!</h1>
		<p>
			<img className="appLogo" src={appLogo} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
