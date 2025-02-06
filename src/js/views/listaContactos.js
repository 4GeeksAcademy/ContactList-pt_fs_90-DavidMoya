import React, { useContext } from "react";
import "../../styles/listaContactos.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ListaContactos = () => {
	const { store, actions } = useContext(Context)
	console.log(store.contactos);

	return (
		<div className="container-fluid text-center mt-3">
			<h1>Lista de contactos</h1>
			<div className="ml-auto me-4">
				<Link to="/nuevoContacto">
					<button className=" agregar btn btn-primary">Agregar contacto</button>
				</Link>
			</div>

			{store.contactos?.map((contact) => {
				return (
					<div className="col d-flex" key={contact.id}>
						<div className="contacto d-flex">
							<img className=" imagen rounded-circle" src="https://picsum.photos/170/170/"/>
							<div className="body">
								<h4 className="card-name mb-4">Nombre: {contact.name}</h4>
								<p className="card-adress">Dirección: {contact.address}</p>
								<p className="card-phone">Teléfono: {contact.phone}</p>
								<p className="card-email">Email: {contact.email}</p>
							</div>
							<div className="buttons">
								<Link to={`/editar/${contact.id}`}>
									<button type="button" class="btn btn-success">
										<i class="fa-regular fa-pen-to-square"></i>
									</button>
								</Link>
								<button className="btn btn-danger ms-3"
									onClick={() => { actions.deleteContact(contact.id) }}>
									<i class="fa-regular fa-trash-can"></i>
								</button>

							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
};
