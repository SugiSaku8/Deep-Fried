// Mutation Observerを作成
var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		// index.htmlが変更されたとき
		if (mutation.target.id === 'index') {
			var element = document.getElementById('updata_osirase');
			if (element) {
				element.remove();
			}
			// ajaxReturnの中にあるosiraseに新しいコードを追加
			var osirase = document.querySelector('#ajaxReturn #osirase');
			osirase.innerHTML += '<div class="notice" id="updata_osirase" style="background-color:#ffffff;max-widht:100%;max-height:100%;"><img class="lsx" src="data/image/logo.svg"><p class="bold">Deep-Friedが更新されました!</p><p class="small">Deep-Friedが更新されました!<br>再起動で更新してください!<span class="thinx" onclick="location.reload()">再起動する</span></p></div>';
		}
	});
});

// 監視を開始
observer.observe(document.body, { childList: true, subtree: true });
