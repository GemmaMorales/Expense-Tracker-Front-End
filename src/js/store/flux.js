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

				setStore({ token: token, userid: userid, registrationSuceess: false });
			},
			destroySession: () => {
				setStore({ token: null, userid: null });
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
			restoreStore: jsonStore => {
				setStore(JSON.parse(jsonStore));
			},

			saveTransactions: async (transactionDescriptions, payeeOrPayerName) => {
				const response = await fetch(process.env.API_HOST + "/transactions/descriptions", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(transactionDescriptions)
				});
				if (response.status == 200) {
					const store = getStore();
					const actions = getActions();
					setStore({
						clientTransactions: store.clientTransactions.map(t => {
							t.transaction_description = transactionDescriptions[t.transaction_id];
							return t;
						})
					});

					alert("Success!");
					return true;
				} else if (response.status == 400) {
					const incomingPayload = await response.json();
					alert(incomingPayload.message);
				} else {
					alert("Unknown Error.");
				}
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
