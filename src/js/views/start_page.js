import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import appLogo from "../../img/transaction_tracker_logo_final.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const StartPage = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4 col-md-7 col-lg-5 mx-auto">
					<div className="card">
						<div className="card-body">
							<h1 className="startpageh1">Welcome to Transaction Tracker</h1>
							<div className="row container">
								<img className="appLogoStartPage" src={appLogo} />
							</div>
							<div className="row container">
								<h5 className="card-title text-center">
									A DIRECT link between new transaction details and Quickbooks!
								</h5>
							</div>
							<div className="row">
								<Link to="/login" className="btn btn-outline-primary btn-sm btn-block text-capitalize">
									Log In
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
