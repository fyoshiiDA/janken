// 乱数を取得する関数
function getRandomInt() {
    return Math.ceil(Math.random() * 3);
}

// 結果を表示させる関数
function showResult() {

}

// ボタンを押した時
$('.form-control').on('click', function () {

    // 乱数を変数に格納
    const refVal = getRandomInt()
    // console.log(refVal);

    // htmlで持たせたvalueと一致させる
    if (refVal == 3) {
        $('#computer-hand').html('✊');
    } else if (refVal == 2) {
        $('#computer-hand').html('✌️');
    } else if (refVal == 1) {
        $('#computer-hand').html('🖐️');
    }

    // 人間の手　※アロー関数だとthisは使えない
    const ownersHand = $(this).val();
    // console.log(ownersHand);

    // 自分の手と乱数を比較して結果を表示
    // 時間差で実行して結果を表示（あたかもサーバで計算処理をして返してきているかのように演出）
    // アイコは同じ手の時、勝ちは３パターン、負けはそれ以外
    if (refVal == ownersHand) {
        setTimeout(function () {
            $('#result').text('あいこ🥸');
        }, 1000);
    }
    else if (refVal == 3 && ownersHand == 1) {
        setTimeout(function () {
            $('#result').text('勝ち🏅');
        }, 1000);
    }
    else if (refVal == 2 && ownersHand == 3) {
        setTimeout(function () {
            $('#result').text('勝ち🏅');
        }, 1000);
    }
    else if (refVal == 1 && ownersHand == 2) {
        setTimeout(function () {
            $('#result').text('勝ち🏅');
        }, 1000);
    }
    else {
        setTimeout(function () {
            $('#result').text('負け🤯');
        }, 1000);
    }
})