### Observerパターン
参照されるデータ（観測対象／Subject）と「データを参照するオブジェクト（観測者／Observer）」について
「参照されるデータ（観測対象）がデータを参照するオブジェクト（観測者）を管理して必要な処理を行う」の **ではなく**
「参照されるデータ（観測対象）はデータの変更を通知するのみで、変更の通知を受けたデータを参照するオブジェクト（観測者）がそれぞれ必要な処理をする」
=> Observerパターンの簡単な紹介を`src/sample/observer.ts`に記載している

## 処理の流れ
RxJSではメソッドを組み合わせてメソッドチェーンを構成し、一連の処理を記述する
ここでのメソッドはオペレータと呼ばれている

RxJSの処理は大きく分けて3つの役割がある
(ストリーム：川を流れている桃を想定するとわかりやすい？)
1. ストリームの生成
1. データの加工
1. データの処理

ストリームの生成は`rxjs/Observable`に定義されたstatic相当なメソッドを利用する
そこからメソッドを連結してデータの加工内容を定義する
最終的に`subscribe`メソッドが呼び出されてデータの処理が実行される
=> `src/sample/stream.ts`

### subscribe
`subscribe(next, error, complete)`
next: 「引数１つ、戻り値なしの関数」で、ストリームの中にデータが複数個流れる場合、そのデータの数だけ呼び出されることになる
error: 「引数１つ、戻り値なしの関数」で、ストリーム内でエラーが発生した時のみ流れ、completeは呼び出されない
complete: 「引数なし、戻り値なしの関数」で、全てのストリームが流れきった時に実行

また、引数を順番に渡すのではなく、オブジェクトにnext,error,completeのプロパティを持たせて、subscribeに渡しても機能する
=> `src/sample/subscribe.ts`

subscribeメソッドは戻り値として`Subscription`と言うクラスのインスタンを返し、
このインスタンスはunsubscribeメソッドを持っており、データの監視をやめる際に使用する

### unsubscribe
データの受取を終了するメソッド

下記の条件の時は自動的に`unsubscribe`が呼び出され、`complete`が終了した時にストリームが終了する
* `Observable.of`や`take`オペレータを適用するなどの「ストリームを流れるデータの個数が予め決まっている」場合
* `takeUntil`オペレータの様に「終了条件が定義されている」場合
* データが全て流れきったり、就労条件に一致した場合

一定時間毎にデータを流す`Observable.interval`やイベントを`Observable`として受け取る`Observable.fromEvent`などは
明確な終了が存在しないからずっと待ち続けてしまうため、自分で`unsubscribe`を呼び出してストリームを終了させなければならない

※ただし、`unsubscribe`を実行すると`complete`が呼び出されない点には注意
=> `src/sample/unsubscribe.ts`

[Observableの生成](https://github.com/koolii/rxjs-beginner/blob/master/docs/create-observable.md)
[データの加工](https://github.com/koolii/rxjs-beginner/blob/master/docs/process-data.md)
[その他のオペレータ](https://github.com/koolii/rxjs-beginner/blob/master/docs/others-operators.md)
[エラーハンドリング](https://github.com/koolii/rxjs-beginner/blob/master/docs/error-handle.md)
[ストリームの切り替え](https://github.com/koolii/rxjs-beginner/blob/master/docs/switch-stream.md)
[類似するオペレータ](https://github.com/koolii/rxjs-beginner/blob/master/docs/similar-operators.md)
[Hot/Cold](https://github.com/koolii/rxjs-beginner/blob/master/docs/hot-cold.md)
[Hot<=>Coldの切り替え](https://github.com/koolii/rxjs-beginner/blob/master/docs/convert-cold-hot.md)
[Subject](https://github.com/koolii/rxjs-beginner/blob/master/docs/subject.md)