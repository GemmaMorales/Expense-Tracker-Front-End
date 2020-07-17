import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";

export const NewUser = () => {
	const { store, actions } = React.useContext(Context);
	console.log(Context);

	const [email, saveEmail] = React.useState("");
	const [password, savePassword] = React.useState("");
	return (
		<form action="action_page.php">
			<div className="container">
				<h1 className="instructionslabel">Sign In</h1>
				<p className="instructionslabel">Please fill in this form to create an account.</p>
				<hr />
				<label className="signinlabel" htmlFor="name">
					<b>Name</b>
				</label>
				<input type="text" placeholder="Enter Your Name" name="name" id="name" required />

				<label className="signinlabel" htmlFor="email">
					<b>Email</b>
				</label>
				<input type="text" placeholder="Enter Email" name="email" id="email" required />

				<label className="signinlabel" htmlFor="psw">
					<b>Password</b>
				</label>
				<input type="password" placeholder="Enter Password" name="psw" id="psw" required />

				<label className="signinlabel" htmlFor="psw-repeat">
					<b>Repeat Password</b>
				</label>
				<input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
				<hr />

				<p className="instructionslabel">
					By creating an account you agree to our <a href="#">Terms & Privacy</a>.
				</p>
				<button type="submit" className="registerbtn">
					Register
				</button>
			</div>

			<div className="container signin">
				<p>
					Already have an account? <a href="#">Log in</a>.
				</p>
			</div>
		</form>
	);
};
