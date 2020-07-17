import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";
import PropTypes from "prop-types";

export const LoginTT = ({ history }) => {
	const { store, actions } = React.useContext(Context);
	console.log(Context);
	if (store.token != null) {
		history.push("/private");
	}

	const [email, saveEmail] = React.useState("");
	const [password, savePassword] = React.useState("");
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card card-signin my-5">
						<div className="card-body">
							<h5 className="card-title text-center">Log in to track your transactions on Quickbooks</h5>
							<div className="img-container">
								<img className="appLogo" src={appLogo} />
							</div>

							<form className="form-signin">
								<div className="form-label-group">
									<input
										type="text"
										id="inputEmail"
										className="form-control"
										placeholder="Email address"
										required
										onChange={e => saveEmail(e.target.value)}
										value={email}
									/>
								</div>
								<div className="form-label-group">
									<input
										type="password"
										id="inputPassword"
										className="form-control"
										placeholder="Password"
										required
										onChange={e => savePassword(e.target.value)}
										value={password}
									/>
								</div>
								<div className="custom-control custom-checkbox mb-3">
									<input type="checkbox" className="custom-control-input" id="customCheck1" />
									<label className="custom-control-label">Remember password</label>
								</div>

								<hr className="my-4" />
								<div className="custom-control custom-checkbox mb-3">
									<button
										className="btn btn-lg btn-success btn-block text-uppercase"
										type="button"
										onClick={() => actions.loginUser(email, password)}>
										Log In
									</button>
								</div>
								<h5 className="card-title text-center">New User?</h5>
								<div className="custom-control custom-checkbox mb-3">
									<button
										className="btn btn-lg btn-success btn-block text-uppercase"
										type="button"
										onClick={() => actions.createUser(email, password)}>
										Create Account
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

LoginTT.propTypes = {
	history: PropTypes.object
};
