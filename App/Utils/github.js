export default github = {
	getRepos(userName) {
		userName = userName.toLowerCase().trim();
		var url = `https://api.github.com/users/${userName}/repos`;

		return fetch(url).then((res) => res.json());
	},
	getBio(userName) {
		userName = userName.toLowerCase().trim();
		var url = `https://api.github.com/users/${userName}`;

		return fetch(url).then((res) => res.json());
	}
};