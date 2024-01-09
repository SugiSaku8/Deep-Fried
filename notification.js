// jQueryを使う方法
function dojQueryAjax() {
    // jQueryのajaxメソッドを使用しajax通信
    $.ajax({
        type: "GET", // GETメソッドで通信
        url: "ajax.html", // 取得先のURL
        cache: false, // キャッシュしないで読み込み
        // 通信成功時に呼び出されるコールバック
        success: function (data) {
            $('#ajaxreload').html(data);
        },
        // 通信エラー時に呼び出されるコールバック
        error: function () {
            alert("500.\nサービスワーカーでエラーが発生しました。\n通知の取得に失敗しました。\nインターネットへの接続状況を確認してください。");
        }
    });
}
setInterval(dojQueryAjax, 5000)