import React from "react";
import history from "../history";

export default class Userform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: props.registerInfo ? props.registerInfo.email : "",
			password: props.registerInfo ? props.registerInfo.password : "",
			error: ""
		};
	}

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};
	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password }));
	};
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.email || !this.state.password) {
			this.setState(() => ({ error: "Invalid Email or Password." }));
		} else {
			this.setState(() => ({ error: "" }));
			this.props.onSubmit({
				email: this.state.email,
				password: this.state.password
			});
		}
	};
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form_error">{this.state.error}</p>}

				<div className="input__box">
					{" "}
					<label htmlFor="email">Email: </label>
					<input
						type="text"
						className="text-input"
						placeholder="Email"
						autoFocus
						value={this.state.email}
						onChange={this.onEmailChange}
					/>
				</div>
				<div className="input__box">
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						minLength="8"
						className="text-input"
						placeholder="Password"
						value={this.state.password}
						onChange={this.onPasswordChange}
					/>
				</div>

				{history.location.pathname === "/login" ? (
					<button className="btn-link">Login</button>
				) : (
					<button className="btn-link">Register</button>
				)}
			</form>
		);
	}
}
