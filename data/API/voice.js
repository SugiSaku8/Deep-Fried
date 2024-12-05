const voiceSelect = document.querySelector('#voice-select')
function appendVoices() {
	console.log("Deep-Fried Voice Kit v2.0 by Carnation")
	// ①　使える声の配列を取得
	// 配列の中身は SpeechSynthesisVoice オブジェクト
	const voices = speechSynthesis.getVoices()
	voiceSelect.innerHTML = '';//→erorr:corde:off
	voices.forEach(voice => { //　アロー関数 (ES6)アロー関数はこれだぞ。
		// 日本語以外の声は選択肢に追加しない。
		if (!voice.lang.match('ja')) return
		const option = document.createElement('option')
		option.value = voice.name
		option.text = `${voice.name} (${voice.lang})` //　テンプレートリテラル (ES6)
		option.setAttribute('selected', voice.default)
		voiceSelect.appendChild(option)
	});
}
speechSynthesis.onvoiceschanged = e => {
	appendVoices()
}

$(document).ready(function () {
	var rec = new webkitSpeechRecognition();
	rec.continuous = true;
	rec.interimResults = false;
	rec.lang = 'ja-JP';

	var userSaid = function (str, s) {
		return str.indexOf(s) > -1;
	}

	rec.onresult = function (e) {

		for (var i = e.resultIndex; i < e.results.length; ++i) {
			if (e.results[i].isFinal) {
				var str = e.results[i][0].transcript;
				console.info('反応した言葉:' + str);
				if (userSaid(str, 'SCR')) {
					scr_open()
				}
				if (userSaid(str, 'SCR')) {
					scr_open()
				}
				if (userSaid(str, 'マニュアル')) {
					M_open()
				}
				if (userSaid(str, 'テスト')) {
					alert("あなたのDeep-Friedとマイクは正常に動作しています😀\n何ができるかは、Helpを見てください(^^)😀")
				}
				if (userSaid(str, '勉強相談室')) {
					scr_open()
				}
				if (userSaid(str, 'SCRを開く')) {
					scr_open()
				}
				if (userSaid(str, '勉強相談室を開く')) {
					scr_open()
				}
				if (userSaid(str, '教相談室を開く')) {
					scr_open()
				}
				if (userSaid(str, '質問')) {
					situmon()
				}
				if (userSaid(str, '質問をする')) {
					situmon()
				}
				if (userSaid(str, '質問する')) {
					situmon()
				}
				if (userSaid(str, 'ヘルプ')) {
					help()
				}
				if (userSaid(str, 'ヘルプ')) {
					help()
				}
				if (userSaid(str, 'すべて閉じる')) {
					document.getElementById("situmon").style.display = "none";
					document.getElementById("SCR").style.display = "none";
					document.getElementById("Erorr").style.display = "none";
					document.getElementById("test").style.display = "none";
					document.getElementById("DeepPad").style.display = "none";
					document.getElementById("M").style.display = "none";
					document.getElementById("help").style.display = "none";
					document.getElementById("feedback").style.display = "none";
					document.getElementById("aboutt").style.display = "none";
					document.getElementById("voice").style.display = "none";
					document.getElementById("newfunction").style.display = "none";
					document.getElementById("situmon_kotaeru").style.display = "none";
				}
				if (userSaid(str, '全て閉じる')) {
					document.getElementById("situmon").style.display = "none";
					document.getElementById("SCR").style.display = "none";
					document.getElementById("Erorr").style.display = "none";
					document.getElementById("test").style.display = "none";
					document.getElementById("DeepPad").style.display = "none";
					document.getElementById("M").style.display = "none";
					document.getElementById("help").style.display = "none";
					document.getElementById("feedback").style.display = "none";
					document.getElementById("aboutt").style.display = "none";
					document.getElementById("voice").style.display = "none";
					document.getElementById("newfunction").style.display = "none";
					document.getElementById("situmon_kotaeru").style.display = "none";
				}
				if (userSaid(str, 'トーク')) {
					const uttr = new SpeechSynthesisUtterance()
					// 文章 (コンストラクタの引数以外に、この方法でも指定できます)
					uttr.text = "こんにちは。私はtalkです。なにかお手伝いできることはありますか?"

					uttr.voice = speechSynthesis
						.getVoices()
						.filter(voice => voice.name === voiceSelect.value)[0]
					// 再生 (発言キュー発言に追加)
					speechSynthesis.speak(uttr)
				}
				/*	構文	
		  else if (userSaid(str, '対応ワード')) {
							処理
						}

						}*/

			}
		}
	}
	$("#startRecBtn").click(function () {
		alert("Deep-Voiceを開始します。")
		rec.start();
	});
	$("#stopRecBtn").click(function () {
		alert("Deep-Voiceを終了します。")
		rec.stop();
	});
	console.time("Deep-Fried Voice Kit 起動時間")
	console.timeEnd("Deep-Fried Voice Kit 起動時間")
	//	rec.start();
});
