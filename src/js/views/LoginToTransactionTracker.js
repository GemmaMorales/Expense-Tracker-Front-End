import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";

export const LoginToTransactionTracker = () => {
	const { store, actions } = React.useContext(Context);
	console.log(context);

	const [email, saveEmail] = React.useState("");
	const [password, savePassword] = React.useState("");
	return (
		<div className="text-center mt-5">
			<img src={appLogo} />

			<h2>Please login to track your transactions on Quickbooks</h2>

			<form>
				<div clasName="row">
					<div className="col">
						<label>Enter Username</label>
						<input type="text" onChange={e => saveEmail(e.target.value)} value={email} />
					</div>
					<div className="col">
						<label>Enter Password</label>
						<input type="text" onChange={e => savePassword(e.target.value)} value={password} />
					</div>
				</div>
				<div clasName="row">
					<div className="col">
						<button onClick={() => actions.loginUser(email, password)}>
							Click to Connect to Quickbooks
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
