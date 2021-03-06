## その他のオペレータ

### do/副作用のある処理
副作用とは関数型プログラミングから発生した用語「引数を受け取って戻り値を返す」以外に外部に対して発生する作用
画面の出力など
=> `src/sample/do.ts`

### take/データの制限
引数の値の個数までデータを次のオペレータに流す
終了後は自動でcompleteが発火する
fromEventにtake(1)を適用し、「初めてボタンがクリックされた時のみ」処理を行う等の記述ができる
=> `src/sample/take.ts`

### takeUntil/停止するまでデータを流す
Observableの引数を１つ取り、引数のObservableから値が流れてくるまで、一番大元のデータを次のオペレータに流す
終了後はcompleteが発火
=> `src/sample/take-until.ts`

### buffer/データが流れるまで値を蓄積
Observableの引数を１つ取り、引数のObservableから値が流れてくるまで、大元のデータを蓄積し、
配列形式で次のオペレータに流す
終了後はcompleteが発火
=> `src/sample/buffer.ts`

### debounceTime/一定時間データが流れなかったらデータを流す
数値1つを引数に取り、指定した時間の間に新しいデータが流れなかったら次のオペレータにデータを流す
lodashのdebounceと同じ感じ
テキストボックスの値が変更されてから500ms変更がなければAPIを呼び出す等のシーンで利用できる
=> `src/sample/debounce-time.ts`

### delay/遅延
指定msの間遅延させる
=> `src/sample/delay.ts`

### partition/ストリームを2分割
引数に「データを１つ受け取り、真偽値を返す関数」を指定する
戻り値は`[trueのストリーム, falseのストリーム]` の配列となる
データも順番通りにならんでいる？？
=> `src/sample/partition.ts`

### groupBy/ストリームを分岐
partitionと似ているが２通りだけじゃなく何通りにも分岐することが可能
その為指定する引数には「データを１つ受け取り、任意の値を返す関数」を指定する
ただし、partitionと異なり戻り値の順序が固定されていない
=> `src/sample/group-by.ts`
