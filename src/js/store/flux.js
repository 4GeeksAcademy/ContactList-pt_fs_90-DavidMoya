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

			addContact: async (datosContacto) => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/DavidMoya/contacts",
					{
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(datosContacto)
					})
				const data = await response.json();
				getActions().getContacts();
			},

			deleteContact: async (id) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/DavidMoya/contacts/${id}`,
					{ method: "DELETE" }
				);
				if (response.ok) {
					getActions().getContacts()
				}
			},
			upgrateContact: async(id) => {
				const response = await fetch (`https://playground.4geeks.com/contact/agendas/DavidMoya/contacts/${id}`,
					{method:"PUT",
					 headers :{
						"Content-type" : "application/json"
					 },
					 body: JSON.stringify()	
					})
				const data = await response.json();
				getActions().getContacts();
			}
		}
	};
};

export default getState;
