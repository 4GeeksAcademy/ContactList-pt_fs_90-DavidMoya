import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	let numeroContactos = store.contactos.length
	return (
		<nav className="navbar navbar-light bg-black mb-4 p-3 d-flex sticky-top">
			<span className="navbar-brand mb-0 ms-5 h1 text-white">MI AGENDA TELEFÓNICA</span>
			<h5 className="me-5 text-white">Nº de contactos {numeroContactos}</h5>
		</nav>
	);
};
