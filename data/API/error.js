/*
	eeeeee     r  rrrrr     r  rrrrr       ooooooo      r  rrrrr
   ee    ee    rrr     r    rrr     r     oo     oo     rrr     r
   eeeeeeee    r            r             oo     oo     r
   e           r            r             oo     oo     r
	eeeeee     r            r              ooooooo      r
*/

function status() {
	if (開発中 === true) {
		Erorr();//ここミスってた
		alert("開発中なので一部の機能が使えなくなっているかもしれません。")
		const styles = `color:red; font-size: 20px;　font-family:'thin';`;
		console.log('%cエラーが発生しました。\nErorrID:x00025\n開発中です。', styles);
		let element = document.getElementById('box');
		element.insertAdjacentHTML('beforebegin', '<img src="data/image/Erorr/x00025.gif" class="erorr_img">');
		let elements = document.getElementById('box');
		elements.insertAdjacentHTML('beforebegin', '<button onclick="Erorr();">承知で使用する</button>');
		document.getElementById('box').insertAdjacentHTML('beforebegin', '<audio src="data/Beep/data/Beep/short-01.mp3" autoplay>');
	}

}
window.addEventListener('DOMContentLoaded', function () {
	console.log("DOMContentLoaded：HTMLを読み込みました。");
	console.timeEnd("Deep-Fried起動時間")
	status();
});
/*
	eeeeee     r  rrrrr     r  rrrrr       ooooooo      r  rrrrr      
   ee    ee    rrr     r    rrr     r     oo     oo     rrr     r
   eeeeeeee    r            r             oo     oo     r
   e           r            r             oo     oo     r
	eeeeee     r            r              ooooooo      r             


*/

function err_404() {

	Erorr();//ここミスってた

	const styles = `color:red; font-size: 20px;　font-family:'thin';`;
	console.log('%cエラーが発生しました。\nErorrID:network.404\nPage  Not Found', styles);
	let element = document.getElementById('box');
	element.insertAdjacentHTML('beforebegin', '<img src="data/image/Erorr/404.png" alt=""class="erorr_img">');
	document.getElementById('box').insertAdjacentHTML('beforebegin', '<audio src="data/Beep/long-01short-01.mp3" autoplay>');
}