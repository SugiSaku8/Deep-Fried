//SearchAPI
const search = {
	app_container: document.querySelector(".list-007"),
	input: document.querySelector("#searchbox")
};

function Search(e) {
	console.log(`${e}という内容を検索しています。`)
	let results = [];
	for (let app of search.app_container.children) {
		if (e.target.value) {
			if (app.dataset.keywords.includes(e.target.value)) {
				results.push(app);
			}
		} else {
			results.push(app);
		}
	}

	document.querySelector('#searchbox').addEventListener('input', function (e) {
		Search({target: e.target});
	});
}