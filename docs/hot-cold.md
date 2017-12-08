## Hot Observable/ Cold Observable

ColdなObservableでRxJSになれるのが一番
RxJSの適用範囲次第では特に意識することなく開発ができるが、それゆえに
ある時意図しない動作になり、ハマるということがある為RxJSにおいてはかなり重要な部分

大半ストリームはColdで明示的にHot状態に変換しないと行けない
(ここまでで出てきたストリームだとfromEventがHotであり例外)

### Coldの特徴
* subscribeされるまでデータが流れない
* subscribeされるたびにストリームが複製される
=> `src/sample/cold.ts`

### Hotの特徴
* ストリームの開始とsubscribeが（必ずしも）同期しない
* 複数回subscribeされていても、流れるデータは共有
=> `src/sample/hot.ts`

主なHotなObservableを生成するオペレータ
* publish
* share
* multicast
