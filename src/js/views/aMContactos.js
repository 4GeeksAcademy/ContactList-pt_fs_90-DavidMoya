import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const AMContactos = () => {
	const { store, actions } = useContext(Context);

	const [name, setName] = useState("")
	console.log(name);
	const [direccion, setDireccion] = useState("")
	console.log(direccion);
	const [telefono, setTelefono] = useState("")
	console.log(telefono);
	const [email, setEmail] = useState("")
	console.log(email);

	const datosContacto =
	{
		name: name,
		address: direccion,
		phone: telefono,
		email: email
	}


	return (
		<div className="container-fluid">
			<Link to="/">
				<button className="btn btn-primary ms-5 mb-5">Volver a contactos</button>
			</Link>
			<div className="form">
				<div className="input-name mb-4 ms-5">
					<div>
						<label><b>Name</b></label>
					</div>
					<div>
						<input type="text" className="nombre" placeholder="Añada nombre de contacto"
							onChange={(e) => { setName(e.target.value) }}>
						</input>
					</div>
				</div>
				<div className="input-name mb-4 ms-5">
					<div>
						<label><b>Direccion</b></label>
					</div>
					<div>
						<input type="text" className="direccion" placeholder="Añada una dirección"
							onChange={(e) => { setDireccion(e.target.value) }}>
						</input>
					</div>
				</div>
				<div className="input-name mb-4 ms-5">
					<div>
						<label><b>Teléfono</b></label>
					</div>
					<div>
						<input type="text" className="telefono" placeholder="Añada un teléfono"
							onChange={(e) => { setTelefono(e.target.value) }}>
						</input>
					</div>
				</div>
				<div className="input-name  required mb-4 ms-5">
					<div>
						<label><b>Email</b></label>
					</div>
					<div>
						<input type="text" className="email" placeholder="Añada un email"
							onChange={(e) => { setEmail(e.target.value) }}>
						</input>
					</div>
				</div>
				<button className="btn btn-primary ms-5 d-flex"
					onClick={() => { actions.addContact(datosContacto) }}>
					Guardar contacto
				</button>
			</div>
		</div>
	);
};
