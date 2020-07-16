const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			userid: null,
			clients: [],
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
				const response = await fetch(
					"https://3000-e0159fbd-3a6f-4c3b-ad36-835e2a9b2ff9.ws-us02.gitpod.io/token",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							email: email,
							password: password
						})
					}
				);
				if (response.status == 200) {
					const incomingPayload = await response.json();
					token = incomingPayload.jwt;
					userid = incomingPayload.id;
				} else {
					alert("Invalid username and password");
				}

				setStore({ token: token, userid: userid });
			},
			getClients: () => {
				const store = getStore();

				fetch("https://3000-d7d59d6a-1d3a-4ba3-9283-de66e911534d.ws-us02.gitpod.io/client")
					.then(r => r.json())
					.then(data => setStore({ clients: data }));
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
