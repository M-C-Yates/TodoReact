import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
	<div className="landing">
		<div className="box">
				<Link className="link" to="/login">
					Login
				</Link>
				<Link className="link" to="/signup">
					Register
				</Link>
		</div>
	</div>
);

export default LandingPage;
