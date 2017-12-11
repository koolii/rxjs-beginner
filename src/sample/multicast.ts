import { Observable, Subject } from 'rxjs';
import util from '../util';

// 一秒ごとに５回までデータを流すストリームを生成し、HOTに変換
const source$ = Observable.interval(1000)
  .take(3)
  .multicast(new Subject())
  .refCount();

// subscribeのみ
source$.subscribe(util.templateWithPrefix('subscribe1'));

// 一秒後にconcatMapで二回目のsubscribe
Observable.timer(2000)
  .concatMap(_ => source$)
  .subscribe(util.templateWithPrefix('subscribe2'));

// 一秒後にconnect()でストリームを開始
// さらに三秒待ち、concatMapで三回目のsubscribe
Observable.timer(5000)
  .concatMap(_ => source$)
  .subscribe(util.templateWithPrefix('subscribe3'));

// ほとんどpublish.tsと同じ内容
// publishはmulticast(new Subject())だが、この時に引数に渡すSubjectのインスタンスで
// publish, publishBehavior, publishReplayと派生する
// [subscribe1]: 0
// [subscribe1]: 1
// [subscribe2]: 1
// [subscribe1]: 2
// [subscribe2]: 2
// complete
// complete
// complete