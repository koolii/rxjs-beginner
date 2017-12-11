## HOTなObservableに変換

### publish
最もシンプルなHOTなObservableを生成するオペレータ
connect()を実装しているConnectableObservableクラスのインスタンス(Observable拡張)を生成

HOTなObservableの特徴である
* ストリームの開始とsubscribeが(必ずしも)同期しない
* 複数回subscribeされていても流れるデータは共有
=> `src/sample/publish.ts`

### refCount
### share
### multicast
