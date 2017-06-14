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
	},
	getNotes(userName) {
		userName = userName.toLowerCase().trim();
		var url = `https://gituhbnotetakerweb.firebaseio.com/${userName}.json`;

		return fetch(url).then((res) => res.json());
	},
	addNote(userName, note) {
		userName = userName.toLowerCase().trim();
		var url = `https://gituhbnotetakerweb.firebaseio.com/${userName}.json`;

		return fetch(url, {
			method: 'post',
			body: JSON.stringify(note)
		}).then((res) => res.json());
	}
};