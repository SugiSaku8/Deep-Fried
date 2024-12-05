function initialisation() {
	Cookies.remove();
	console.log("Cookies Cleared");
	Cookies.set("init", true)
	console.log("Init Cookies Set");
	console.log("Rebooting...")
	location.reload()
}
function Freboot() {
	console.error("何かのエラーが起きました。")
}
function restore() {
	console.log("All data BackUp done.")
	console.error("エラーが発生しました。\n再起不可能なエラー");
	Erorr();
	const styles = `color:red; font-size: 20px;　font-family:'thin';`;
	console.log('%cエラーが発生しました。\nErorr53\n再起不可能なエラー', styles);
	let element = document.getElementById('box');
	element.insertAdjacentHTML('beforebegin', '<img src="data/image/Erorr/53.webp" alt="hello"class="erorr_img">');
}
function restore_set() {
	const styles = `font-size: 18	px;　font-family:'thin';`;
	let pro = prompt("Deep-Friedの復元\nDeep-Friedの復元を行うと、すべてのローカルデータが削除されます。\nDeep-Friedの初期化:すべてのローカルデータ（ログイン情報など）を削除し、\nDeep-Friedを初期状態に戻す\nDeep-Friedの強制再起動:すべてのローカルデータを強制的にバックアップし、再起動を試みる\nDeep-Friedの復元:すべてのローカルデータをバックアップし、ローカルデータを元に復元を試みる\n\n\n1.Deep-Friedの初期化\n2.Deep-Friedの強制再起動\n3.Deep-Friedの復元\n", '1,2,3の数字を選択してください', styles)
	if (pro === 1) {
		initialisation()
	}
	if (pro === 2) {
		Freboot()
	}
	if (pro === 3) {
		restore()
	}
}
// サービスワーカーの登録
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then(function (registration) {
		console.log('Service Worker registration successful with scope: ', registration.scope);
	}).catch(function (err) {
		console.log('Service Worker registration failed: ', err);
	});
}