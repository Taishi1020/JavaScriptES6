//再宣言　上書き負荷
//const val3 = "const変数";
//console.log(val3);

//const変数を上書き
//val3 = "constは変数を上書きできません"; //上書きをしようとすると reatd-only（上書きできません）のエラーが出力される

//const val3 = "const再宣言"; //　再宣言出来ないのに再宣言しようとしてるときのエラー  Identifier 'val3' has already been declared (9:6)

//constで定義したオブジェクトはプロパティの経校が可能
const val5 = ["doc", "cat"];
val5[0] = "maus";
val5.push("monkey");
val5[2] = "sneake";
console.log(val5);
