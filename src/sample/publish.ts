import { Observable } from 'rxjs';
import util from '../util';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';

// 一秒ごとに５回までデータを流すストリームを生成し、HOTに変換
const source$: ConnectableObservable<any> = Observable.interval(1000)
  .take(5)
  .publish();

// subscribeのみ
source$.subscribe(util.templateWithPrefix('subscribe1'));

// 一秒後にconcatMapで二回目のsubscribe
Observable.timer(1000)
  .concatMap(_ => source$)
  .subscribe(util.templateWithPrefix('subscribe2'));

// 一秒後にconnect()でストリームを開始
// さらに三秒待ち、concatMapで三回目のsubscribe
Observable.timer(1000)
  .do(_ => source$.connect())
  .concatMap(_ => Observable.timer(3000))
  .concatMap(_ => source$)
  .subscribe(util.templateWithPrefix('subscribe3'));

// [subscribe1]: 0
// [subscribe2]: 0
// [subscribe1]: 1
// [subscribe2]: 1
// [subscribe1]: 2
// [subscribe2]: 2
// [subscribe3]: 2
// [subscribe1]: 3
// [subscribe2]: 3
// [subscribe3]: 3
// [subscribe1]: 4
// [subscribe2]: 4
// [subscribe3]: 4
// complete
// complete
// complete