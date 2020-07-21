const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			userid: null,
			clients: [],
			registrationSuccess: false,
			clientTransactions: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			loginUser: async (email, password) => {
				let token = null;
				let userid = null;
				const response = await fetch(process.env.API_HOST + "/token", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password
					})
				});
				if (response.status == 200) {
					const incomingPayload = await response.json();
					token = incomingPayload.jwt;
					userid = incomingPayload.id;
				} else {
					alert("Invalid username or password");
				}

				setStore({ token: token, userid: userid });
			},
			createUser: async (name, email, password) => {
				const response = await fetch(process.env.API_HOST + "/user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						email: email,
						password: password
					})
				});
				if (response.status == 200) {
					setStore({ registrationSuccess: true });
					return true;
				} else if (response.status == 400) {
					const incomingPayload = await response.json();
					alert(incomingPayload.message);
				} else {
					alert("Unknown Error.");
				}
			},
			getClients: () => {
				fetch(process.env.API_HOST + "/clients")
					.then(r => r.json())
					.then(data => setStore({ clients: data }));
			},

			getTransactions: async client_id => {
				console.log("Get Transactions from Quickbooks");
				const response = await fetch(process.env.API_HOST + "/client/" + client_id + "/transactions", {
					method: "GET"
				});
				const data = await response.json();
				setStore({ clientTransactions: data });
				return true;
				console.log("Get Client Transactions in Quickbooks");
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
