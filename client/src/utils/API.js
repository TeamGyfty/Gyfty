import axios from "axios"

export default {
	// Get gifts
	getGifts: () => {
		return axios.get("/api/gifts")
	},
	// get all requests
	getRequests: () => {
		return axios.get("/api/requests")
	},
	// 
	getRequest: (id) => {
		return axios.get("/api/requests/" + id)
	},

	deleteRequest: (id) => {
		return axios.delete("/api/requests/" + id)
	},

	addRequest: (request) => {
		if (request) {
		let newRequest = {};
		newRequest.name = request.name,
		newRequest.title = request.title,
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
		newResponse.title = response.title,
		newResponse.description = response.description,
		newResponse.imageURL = response.URL,
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
