# データの加工

### map
「引数、戻り値が夫々１つずつの関数」
=> `src/sample/map.ts`

### mapTo/固定値への変換
データを否応なく固定値にする
=> `src/sample/map-to.ts`

### filter/選別
ビルトインのfilter関数と同様
次に流す条件に一致する値が１つもない場合はその時点で処理が中断される(nextが一度も発せんしない)
=> `src/sample/filter.ts`

### reduce/データの集計
「データ１つとそれまでの計算値を受け取り、処理結果を返す関数」
completeになった時点で次のオペレータ
=> `src/sample/reduce.ts`

### scan/集計
前回の処理結果をキャッシュさせるのはreduceと同様だが、scanは
データが流れてくるたびに処理結果を次のオペレータに流す点が異なる
=> `src/sample/scan.ts`

### distinct/重複データの削除
特に引数は必要ない
=> `src/sample/distinct.ts`

### distinctUntilChanged/値の変化を抽出
ストリームに流れるデータが変化した場合のみ次のオペレータにデータを流す
入力値が変わった場合のみAPIにリクエストを送信する時などに使用することが出来る
=> `src/sample/distinct-until-changed.ts`
