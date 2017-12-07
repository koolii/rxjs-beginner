## エラーハンドラ

### retry
数値一つを引数とし、errorが流れてきた場合にその回数だけリトライする
リトライの最大回数で失敗した場合はerrorに流れる
=> `src/sample/retry/ts`

### catch
引数に「値を１つ受け取り、任意のObservableを返す関数」を受け取る
throw new Errorに対しても適用できる