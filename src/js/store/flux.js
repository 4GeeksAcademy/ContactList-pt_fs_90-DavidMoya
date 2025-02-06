
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: []
		},
		actions: {
			getContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/DavidMoya/contacts")
				if (!response.ok) {
					await getActions().createAgenda()
				}
				const data = await response.json();
				const store = getStore()
				setStore({ ...store, ['contactos']: data.contacts })
				console.log(store);

			},

			createAgenda: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/DavidMoya",
					{ method: "POST" })
				const data = await response.json()
			},

			addContact: async (datosContacto, navigate) => {
				if (
					!datosContacto.name.trim() ||
					!datosContacto.address.trim() ||
					!datosContacto.phone.trim() ||
					!datosContacto.email.trim()
				) {
					alert("Todos los campos son obligatorios y no pueden estar vacíos.");
					return;
				}
				const response = await fetch("https://playground.4geeks.com/contact/agendas/DavidMoya/contacts",
					{
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(datosContacto)
					})
				const data = await response.json();
				if(response.ok){
					await getActions().getContacts();
					navigate("/")
				}
			},

			deleteContact: async (id) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/DavidMoya/contacts/${id}`,
					{ method: "DELETE" }
				);
				if (response.ok) {
					getActions().getContacts()
				}
			},
			updateContact: async(id, datosContacto, navigate) => {
				if (
					!datosContacto.name.trim() ||
					!datosContacto.address.trim() ||
					!datosContacto.phone.trim() ||
					!datosContacto.email.trim()
				) {
					alert("Todos los campos son obligatorios y no pueden estar vacíos.");
					return;
				}
				const response = await fetch (`https://playground.4geeks.com/contact/agendas/DavidMoya/contacts/${id}`,
					{method:"PUT",
					 headers :{
						"Content-type" : "application/json"
					 },
					 body: JSON.stringify(datosContacto)	
					})
				const data = await response.json();
				if(response.ok){
					await getActions().getContacts();
					navigate("/")
				}
				  
			},
		}
	}
};

export default getState;
