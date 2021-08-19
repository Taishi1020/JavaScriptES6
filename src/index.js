//再宣言　上書き負荷
const val3 = "const変数";
console.log(val3);

//const変数を上書き
val3 = "constは変数を上書きできません"; //上書きをしようとすると reatd-only（上書きできません）のエラーが出力される
