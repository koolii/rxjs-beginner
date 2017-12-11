## HOTなObservableに変換

### publish
最もシンプルなHOTなObservableを生成するオペレータ
connect()を実装しているConnectableObservableクラスのインスタンス(Observable拡張)を生成

HOTなObservableの特徴である
* ストリームの開始とsubscribeが(必ずしも)同期しない
* 複数回subscribeされていても流れるデータは共有
=> `src/sample/publish.ts`

### refCount
これはHotなObservableを生成するものではないが、HotなObservable特有のメソッド
publishで生成したストリームはconnectしない限りストリームが開始されないため、いつsubscribeされるかが不明で
かつ先にconnectしてしまうと不都合がある場合もある

なのでColdと同様、subscribe=connectのタイミングにさせる時に利用するのがrefCount
refCountを呼ぶとsubscribeされると開始されるようになり、connectを明示的に呼ぶ必要がなくなる
=> `src/sample/ref-count.ts`

### share
shareもpublishと同じくらいポピュラー
publishと異なるのは、shareはHotなObservableを生成した上でrefCountを適用してくれる
=> `src/sample/share.ts`

※ただし厳密には `share() is an alias publish().refCount()`にはならないので注意
publish().refCount()とshare()では、一度ストリームが終了した後に再度subscribeされた場合の挙動が異なる
=> `src/sample/share2.ts`

### multicast
