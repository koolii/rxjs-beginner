import { Observable } from 'rxjs';
import util from '../util';

const source$ = Observable.interval(1000).take(3).publish().refCount();
source$.subscribe(util.templateWithPrefix('subscribe1'));

Observable.timer(2000)
  .concatMap(_ => source$)
  .subscribe(util.templateWithPrefix('subscribe2'));

// 5秒後にはすでにsource$のデータが流れきっているためsubscribe3は
// completeが呼ばれるだけ
Observable.timer(5000)
  .concatMap(_ => source$)
  .subscribe(util.templateWithPrefix('subscribe3'));

// [subscribe1]: 0
// [subscribe1]: 1
// [subscribe2]: 1
// [subscribe1]: 2
// [subscribe2]: 2
// complete
// complete
// complete

// share()とpublish().refCount()の違い
// ※subscribe-share3が再スタートしている所に注意
const shareSrc$ = Observable.interval(1000).take(3).share();
Observable.timer(5000).concatMap(_ => shareSrc$)
  .subscribe(util.templateWithPrefix('subscribe-share1'));

Observable.timer(7000)
  .concatMap(_ => shareSrc$)
  .subscribe(util.templateWithPrefix('subscribe-share2'));

// 5秒後にはすでにsource$のデータが流れきっているためsubscribe3は
// completeが呼ばれるだけ
Observable.timer(10000)
  .concatMap(_ => shareSrc$)
  .subscribe(util.templateWithPrefix('subscribe-share3'));

// [subscribe-share1]: 0
// [subscribe-share1]: 1
// [subscribe-share2]: 1
// [subscribe-share1]: 2
// [subscribe-share2]: 2
// complete
// complete
// [subscribe-share3]: 0
// [subscribe-share3]: 1
// [subscribe-share3]: 2
// complete
