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
shareやpublishは内部的にmulticastを呼び出していて、Hotなストリームに変換する根幹をなしている
multicastは「Subjectのインスタンス」、もしくは「Subjectのインスタンスを返すファクトリ関数」を引数にとる
=> `src/sample/multicast.ts`

* publish() === multicast(new Subject())
* share() === multicast(() => new Subject()).refCount()

また、下記のような状況において、再度subscribeされた場合の動作を規定する
* ストリームが一度も開始されたことがない
* ストリームが開始され、すでに終了している

#### Subjectのインスタンスを引数に渡した場合
ストリームが初めて開始される場合もすでに終了している場合も、必ず同じストリームを参照する
(すでに終了している場合はcompleteのみが発行されることになる)

#### Subjectのインスタンを返すファクトリ関数を引数に渡した場合
すでにストリームが終了している場合は、新たなストリームが生成、再度実行