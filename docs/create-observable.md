## Observableの生成

### of/受け取った値をそのまま流す
与えた値をそのまま流す
Observableの視点として、非常によく利用される
=> `src/sample/of.ts`

### from/配列をストリームに順次流す
=> `src/sample/from.ts`

### fromEvent/イベントをストリームに変換
### fromPromise/Promiseをストリームに変換
Promiseを引数にストリームを生成する
Promise.resolve()が呼ばれるとnext、Promise.reject()が呼ばれるとerrorが呼ばれる
=> `src/sample/promise.ts`

逆にストリームを配列???(Promiseではなく？)に変換する`toPromise`オペレータがある

### interval/一定時間ごとにデータを流すストリームを生成
指定間隔毎にデータを流すストリームを生成
intervalは永続的にデータを流すので、止める場合は`take`等を使って回数を制限する必要がある
=> `src/sample/interval.ts`

### timer/指定時間経過後にデータを流し始めるストリームを生成
通常は引数は一つだけ指定して、データが1度しかながれないストリームを生成することがほとんどだが
引数を2つ取ると、intervalのように定期処理となる(第二引数はデータを流す間隔を表す)
=> `src/sample/timer.ts`

### merge/複数のストリームを合成
複数のストリームを引数にし、1本のストリームに変換
生成されてたストリームは順番はなく、nextが発行した順番
=> `src/sample/merge.ts`

### zip/複数のストリームを合成
mergeと違うのはデータを配列に纏めて次のオペレータに流す
引数のObservableそれぞれがnextを発火させた場合に限ってデータが流れる
=> `src/sample/zip.ts`

### forkJoin/全部のストリームが完了後データが流れる
zipに似ている、全てのObservableがcompleteして初めてデータを流す
=> `src/sample/forkjoin.ts`

### race/最初のストリーム
Promise.raceと一緒
=> `src/sample/race.ts`

### range/指定範囲を順に流す
配列として一括ではなく、それぞれの値をストリームに流す
=> `src/sample/range.ts`

### throw/エラーを流す
ofに似ている、errorにしか行かない
=> `src/sample/throw.ts`
