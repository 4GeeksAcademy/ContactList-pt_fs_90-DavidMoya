import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ListaContactos = () => {
	const { store, actions } = useContext(Context)
	console.log(store.contactos);

	return (
		<div className="container-fluid text-center mt-5">
			<h2>Hola buenos dias</h2>
			<div className="ml-auto me-4">
				<Link to="/demo">
					<button className="btn btn-primary">Agregar contacto</button>
				</Link>
			</div>

			{store.contactos?.map((contact) => {
				return (
					<div className="col" key={contact.id}>
						<div className="contacto d-flex" style={{ width: "14rem" }}>
							<img className="rounded-circle" src="https://picsum.photos/170/170/" />
							<div className="body">
								<h4 className="card-name">{contact.name}</h4>
								<p className="card-adress">{contact.address}</p>
								<p className="card-phone">{contact.phone}</p>
								<p className="card-email">{contact.email}</p>
							</div>
							<div className="buttons d-flex">
								<Link to="/demo">
									<button type="button" class="btn btn-success">
										<i class="fa-regular fa-pen-to-square"></i>
									</button>
								</Link>
								<button className="btn btn-danger ms-5"
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
