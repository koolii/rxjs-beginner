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
Subjectの場合、流れたデータはそのまま破棄されてしまったがBehaviorSubjectの場合は
最後に流れたデータを保持し、subscribeされた時にその値を流す
subscribeされた時点で必ずデータ流れるので、コンストラクタで初期値を渡す
=> `src/sample/behavior-subject.ts`

#### ReplaySubject
BehaviorSubjectがストリームを流れた最後の一件を記憶し
あとからsubscibeしたオブジェクトに流したのに対し、
ReplaySubjectは任意の個数を記憶して流すことができる

また、初期値が必要なく、コンストラクタには記憶させるデータの個数を渡すだけで良い
※ new ReplaySubject(1) === new BehaviorSubject()
=> `src/sample/replay-subject.ts`

#### AsyncSubject
BehaviorSubjectのようにストリームを最後に流れたデータを記憶するが
completeが呼ばれるまで値を流さない

一度completeが呼ばれた後、再度subscribeされた場合は、subscribeされる度に同じ値を返し続ける
=> `src/sample/async-subject.ts`
