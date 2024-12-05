function push() {
	Push.create("Deep-Friedの更新情報", {　//タイトル
		body: "Deep-Friedは更新されました。",　//内容
		icon: "data/image/logo.svg",　//ロゴ等の画像
		timeout: 6000, // 通知が消えるタイミング
		vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
		onClick: function () {
			//なんか書いて!
		}
	})
}