## ストリームの切り替え

(memo)ここだとコード側にも具体的な説明を書いている為、要参照

あるストリームに流れるデータをもとに新たなストリームを生成し、処理を行いたい
時にこれまでのオペレータだと辛い時がある

例えば、「元ストリームに流れてきた秒数だけカウントを表示する」と言う処理
=> `src/sample/like-callback-hell.ts`

上記のコードを見ると、subscribe内でストリームを生成したり、ネストが深くなったりでわかりづらいし
気持ち悪いコードになってしまう

このような問題を解決するオペレータが下記の４つ
最初は使い方が難しいが、これを使えるようになるとRxJSで記述できる処理の幅が広がる
下記のオペレータは共通して、Promiseのthen内で新たなPromiseを返し、またthenで値を受け取って処理をする
ような流れと同じような流れになっている、それがストリームに置き換わっただけ

* concatMap
* mergeMap
* switchMap
* exhaustMap

ここのconcatMapを使った上記の修正版を記載
=> `src/sample/combine-stream.ts`
例: APIのエンドポイントを非同期に受け取り、取得したURLにGETリクエストを送信する
=> `src/sample/send-request.ts`

### concatMap
ストリームを直列的に実行する
複数回concatMapが呼ばれて複数個のストリームが生成されると、生成された順番通りにストリームを実行、結果を次に渡す
=> `src/sample/concat-map.ts`

### mergeMap
複数のストリームを並列的に実行
=> `src/sample/merge-map.ts`

### switchMap
あるストリームが生成されると、それまでに生成済みかつ未完了のストリームを中断して新しいストリームを実行する
=> `src/sample/switch-map.ts`

### exhaustMap
あるデータが流れた時、それまでに生成済みかつ未完了のストリームが存在する場合
ストリームを生成せずデータを破棄する
=> `src/sample/exhaust-map.ts`