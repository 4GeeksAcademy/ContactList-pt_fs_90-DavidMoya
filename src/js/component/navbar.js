import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} =useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-4">
			<Link to="/">
				<span className="navbar-brand mb-0 ms-3 h1">MI AGENDA TELEFÓNICA</span>
			</Link>
		</nav>
	);
};
