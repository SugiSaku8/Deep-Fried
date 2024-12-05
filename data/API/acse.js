function sat(elementSelector) {
	var element = document.querySelector(elementSelector);
	element.select();
}
function st() {
	var selectedText = "";
	if (window.getSelection) {
		selectedText = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
		selectedText = document.selection.createRange().text;
	}
	return selectedText !== "";
}
function gst() {
	var selection = window.getSelection();
	return selection.toString();
}
function copy(text) {
	navigator.clipboard.writeText(text);
}
function speak(text) {
	var msg = new SpeechSynthesisUtterance(text);
	window.speechSynthesis.speak(msg);
}
const menuItems = document.querySelectorAll('.select-item');
let currentIndex = 0;
document.querySelector('.select-btn.left').addEventListener('click', () => {
	if (currentIndex > 0) {
		menuItems[currentIndex].style.transform = 'translateY(-100%)';
		menuItems[--currentIndex].style.transform = 'translateY(0)';
	}
});
document.querySelector('.select-btn.right').addEventListener('click', () => {
	if (currentIndex < menuItems.length - 1) {
		menuItems[currentIndex].style.transform = 'translateY(100%)';
		menuItems[++currentIndex].style.transform = 'translateY(0)';
	}
});

window.onload = function (e) {
	let sele = st();
	let oselt;
	setInterval(() => {
		if (sele) { // 選択されたテキストが存在するかどうかをチェック
			oselt = gst();
			e.preventDefault();
			document.getElementById('select').style.left = e.pageX + "px";
			document.getElementById('select').style.top = e.pageY + "px";
			document.getElementById('select').style.display = "block";
		}
	}, 100)
}