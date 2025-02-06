import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/aMContactos.css";



export const AMContactos = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const navigate = useNavigate();
	let palabraMayus = "";

	const primeraMayuscula = (palabra) => {
		palabraMayus = palabra.charAt(0).toUpperCase() + palabra.slice(1);
	  };

	const [contacto, setContacto] = useState({
		name: "",
		address: "",
		phone: "",
		email: ""
	});

	useEffect(() => {
		if (id) {
			const contactoExistente = store.contactos.find(contact => contact.id == id);
			if (contactoExistente) {
				setContacto(contactoExistente);
			}
		}
	}, [id, store.contactos]);

	const handleChange = (e) => {
		let value = e.target.value;
		if(e.target.name !== "email"){
			primeraMayuscula(value)	
		}else {
			palabraMayus=value
		}
		setContacto({ ...contacto, [e.target.name]: palabraMayus });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (id) {
			actions.updateContact(id, contacto, navigate);
		} else {
			actions.addContact(contacto, navigate);
		} 
	};

	return (
		<div className="container-fluid">
			<Link to="/">
				<button className="btn btn-primary ms-5 mb-5">Volver a contactos</button>
			</Link>
			<form className="form" onSubmit={handleSubmit}>
				<div className="input-name mb-4 ms-5">
					<div>
						<label><b>Nombre</b></label>
					</div>
					<div>
						<input type="text" name="name" placeholder="Añada nombre de contacto"
							value={contacto.name} onChange={handleChange} />
					</div>
				</div>
				<div className="input-name mb-4 ms-5">
					<div>
						<label><b>Dirección</b></label>
					</div>
					<div>
						<input type="text" name="address" placeholder="Añada una dirección"
							value={contacto.address} onChange={handleChange} />
					</div>
				</div>
				<div className="input-name mb-4 ms-5">
					<div>
						<label><b>Teléfono</b></label>
					</div>
					<div>
						<input type="text" name="phone" placeholder="Añada un teléfono"
							value={contacto.phone} onChange={handleChange} />
					</div>
				</div>
				<div className="input-name mb-4 ms-5">
					<div>
						<label><b>Email</b></label>
					</div>
					<div>
						<input type="email" name="email" placeholder="Añada un email"
							value={contacto.email} onChange={handleChange} />
					</div>
				</div>
				<button type="submit" className="btn btn-primary ms-5 d-flex">
					{id ? "Actualizar Contacto" : "Guardar Contacto"}
				</button>
			</form>
		</div>
	);
};
