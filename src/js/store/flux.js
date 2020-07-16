const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			data: {},
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
				const response = await fetch(
					"https://3000-bb9b182e-de9c-4409-8dde-db4471e76414.ws-us02.gitpod.io/token",
					{
						method: "POST",
						body: JSON.stringify({
							email: email,
							password: password
						})
					}
				);
				if (response.stautus == 200) {
					const incomingPayload = await response.json();
					token = incomingPayload.jwt;
				} else {
					alert("Invalid username and password");
				}

				setStore({ token: token });
			},
			getData: () => {
				const store = getStore();

				fetch("https://3000-d7d59d6a-1d3a-4ba3-9283-de66e911534d.ws-us02.gitpod.io/")
					.then(r => r.json())
					.then(data => store.data.concat(data));
				setStore({ data: data });
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
