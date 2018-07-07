import axios from "axios";

export default {
	// Get gifts
	getGifts: () => {
		return axios.get("/api/gifts")
	},

	getRequests: () => {
		return axios.get("/api/requests")
	},

	getRequest: (id) => {
		return axios.get("/api/requests/" + id)
	},

	deleteRequest: (id) => {
		return axios.delete("/api/requests/" + id)
	},

	addRequest: (request) => {
		if (request) {
		let newRequest = {};
		newRequest.age = request.age,
		newRequest.price = request.price,
		newRequest.occasion = request.occasion

			return axios.post("/requests/add", newRequest)
				.then(res => {
					return res;
				})
				.catch(err => {
					return err;
				})
		}
	},

	addResponse: (response) => {
		// add new response
		if (item) {
		let newResponse = {};
		newResponse.name = response.name,
		newResponse.imageURL = response.URL,
		newResponse.description = response.description,
		newResponse.link = response.link;
		
		return (
			axios.post("/responses/add", newResponse)
				.then(res => {
					return res;
				})
				.catch(err => {
					return err;
				})

		)
		}	
	}
}
