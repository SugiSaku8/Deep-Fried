let e53 = false;
let at = false;
function err_53() {
	const styles = `color:red; font-size: 20px;　font-family:'thin';`;
	console.log('%cエラーが発生しました。\nErorr53\nアクティブソフトウェアサーバーキーのセグメンテーションが一致しません', styles);
	document.getElementById("particles-js").style.display = "none";
	shortcut.remove("Ctrl+Q");
	shortcut.remove("Ctrl+Z");
	shortcut.remove("Ctrl+Y");
	shortcut.remove("Ctrl+X");
	shortcut.remove("Ctrl+1");
	shortcut.remove("Ctrl+B");
	shortcut.remove("Ctrl+T");
	shortcut.remove("Ctrl+O");
	e53 = true;
}
function err_act() {
	const styles = `color:red; font-size: 20px;　font-family:'thin';`;
	console.log('%cエラーが発生しました。\nアクティベーションエラー\n不審な挙動が発見されたため、Deep-Friedはロックされています', styles);
	document.getElementById("particles-js").style.display = "none";
	shortcut.remove("Ctrl+Q");
	shortcut.remove("Ctrl+Z");
	shortcut.remove("Ctrl+Y");
	shortcut.remove("Ctrl+X");
	shortcut.remove("Ctrl+1");
	shortcut.remove("Ctrl+B");
	shortcut.remove("Ctrl+T");
	shortcut.remove("Ctrl+O");
	at = true;
}
function wall_smaho() {
	document.body.style.backgroundImage = 'url(data/DynamicWall/wallpaper_custom/9090.webp)';
}
function wall() {
	//時間取得
	var now = new Date();
	var hour = now.getHours();
	let mimei = ((hour > 0) && (hour < 3))
	let akegata = ((hour > 3) && (hour < 5))
	let asa = ((hour > 5) && (hour < 9))
	let hirumae = ((hour > 9) && (hour < 12))
	let hirusugi = ((hour > 12) && (hour < 15))
	let yuugata = ((hour > 15) && (hour < 18))
	let yorunohazime = ((hour > 18) && (hour < 21))
	let yoruosoku = ((hour > 21) && (hour < 24))
	if (mimei === true) {
		document.body.style.backgroundImage = 'url(data/DynamicWall/未明.webp)';
	}
	if (akegata === true) {
		document.body.style.backgroundImage = 'url(data/DynamicWall/明け方.webp)';
	}
	if (asa === true) {
		document.body.style.backgroundImage = 'url(data/DynamicWall/朝.webp)';
	}
	if (hirumae === true) {
		document.body.style.backgroundImage = 'url(data/DynamicWall/昼前.webp)';
	}
	if (hirusugi === true) {
		document.body.style.backgroundImage = 'url(data/DynamicWall/昼過ぎ.webp)';
	}
	if (yuugata === true) {
		document.body.style.backgroundImage = 'url(data/DynamicWall/夕方.webp)';
	}
	if (yorunohazime === true) {
		document.body.style.backgroundImage = 'url(data/DynamicWall/夜のはじめ.webp)';
	}
	if (yoruosoku === true) {
		document.body.style.backgroundImage = 'url(data/DynamicWall/夜遅く.webp)';
	}
	if (e53 === true) {
		document.body.style.backgroundImage = 'url(data/image/Erorr/53.webp)';
	}
	if (at === true) {
		document.body.style.backgroundImage = 'url(data/image/Erorr/Activation.webp)';
	}
}
function setwall() {
	let swi = (screen.width)
	let who = (screen.height)
	let smaho = ((swi > 390) && (who > 844) || (swi > 844) && (who > 390))
	let pc = ((swi < 390) && (who < 844) || (swi < 844) && (who < 390))
	if (pc === true) {
		wall_smaho();
	}
	if (smaho === true) {
		wall();
	}
}
function update_api() {
	let xks = false
	let tbg = false
	let status = (xks && tbg)
	if (status === true) {
		err_53()
	}
}
setInterval(setwall, 500);
setInterval(update_api, 500)
// 拡大鏡の機能を有効にする
function enableZoom() {
document.querySelector('.zoom-icon').addEventListener('mouseover', function () {
// マウスの位置に基づいて要素を拡大する
document.querySelectorAll('*').forEach(function (element) {
element.addEventListener('mousemove', function (event) {
const scale = 2; // 拡大率
const rect = element.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;
element.style.transformOrigin = `${x}px ${y}px`;
element.style.transform = `scale(${scale})`;
});
});
});
}

// 拡大鏡の機能を無効にする
function disableZoom() {
document.querySelector('.zoom-icon').addEventListener('mouseout', function () {
// マウスの位置に基づいて要素を拡大する
document.querySelectorAll('*').forEach(function (element) {
element.style.transform = '';
});
});
}

// 拡大鏡の機能を有効にする
enableZoom();

// 拡大鏡の機能を無効にする
//disableZoom();