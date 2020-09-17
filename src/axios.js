import axios from 'axios';

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: '<YOUR FIRESTORE CLOUD FUNCTION API LINK>'
});

export default instance;
