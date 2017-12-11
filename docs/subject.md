## Subject
* Observableを拡張したオブジェクト
* 開発者が任意にデータを流す仕組みを持つ
* Subjectを利用することにより、動的に、流したいタイミングで流したい値を流せる
* Observableの時同様、completeによってデータの終了を明示するか、unscribeを読んでストリームを終了させる必要がある

### 拡張機能
* next
* error
* complete
* asObservableSubjectからObservableを生成する(このObservableはHot)

### 種類
####  Subject
最も一般的で、HotのObservableとほぼ同じ動き
=> `src/sample/subject.ts`

#### BehaviorSubject
#### ReplaySubject
#### AsyncSubject