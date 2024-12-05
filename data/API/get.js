const container = document.querySelector('.container');
function addCard(data) {
	const card = document.createElement('div');
	card.className = 'card';

	const title = document.createElement('h2');
	title.textContent = `${data.name} (${data.version})`;

	const info = document.createElement('p');
	info.textContent = `ユーザー: ${data.user}, ジャンル: ${data.genre}`;

	const dataDiv = document.createElement('div');
	dataDiv.className = 'data';
	dataDiv.textContent = `データ: ${data.data}`;

	const timeSpan = document.createElement('span');
	timeSpan.className = 'time';
	timeSpan.textContent = new Date(data.time).toLocaleString();

	card.appendChild(title);
	card.appendChild(info);
	card.appendChild(document.createElement('br'));
	card.appendChild(dataDiv);
	card.appendChild(timeSpan);
	container.appendChild(card);
    }

const searching = async (searchTerm) => {
    const response = await fetch('http://localhost:2539/search', {
	method: 'POST',
	headers: {
	    'Content-Type': 'application/json',
	},
	body: JSON.stringify({ term: searchTerm }),
    });

    const data = await response.json();
    data.forEach(addCard);
};