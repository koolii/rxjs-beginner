import { Observable } from 'rxjs';
import util from '../util';

const source$ = Observable.interval(1000).take(3).publish().refCount();
source$.subscribe(util.templateWithPrefix('subscribe1'));

Observable.timer(2000).concatMap(_ => source$)
  .subscribe(util.templateWithPrefix('subscribe2'));

// [subscribe1]: 0
// [subscribe1]: 1
// [subscribe2]: 1
// [subscribe1]: 2
// [subscribe2]: 2
// complete
// complete


const source1$ = Observable.interval(1000).take(3).share();
Observable.timer(5000).concatMap(_ => source1$)
  .subscribe(util.templateWithPrefix('subscribe3'))

Observable.timer(7000)
  .concatMap(_ => source1$)
  .subscribe(util.templateWithPrefix('subscribe4'));

// 一部順番をキレイにするためObservable.timer(5000)を入れたりしているが
// この処理だけであればshare()もpublish.refCount()も同じ動作
// [subscribe3]: 0
// [subscribe3]: 1
// [subscribe4]: 1
// [subscribe3]: 2
// [subscribe4]: 2
// complete
// complete