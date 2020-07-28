 
import axios from 'axios';

export function profileApi() {
	return axios.get('https://api.spacexdata.com/v3/history').then((res) => res);
}

export function Repo(data) {
	return axios.get('https://api.github.com/users/supreetsingh247/repos', data).then((res) => res.data);
}

