import { Observable } from 'rxjs';
import util from '../util';

Observable.of(1, 2, 3)
  .do(util.print)
  .switchMap(n => Observable.throw(new Error(`error: ${n}`)))
  .retry(3)
  .subscribe(util.template);

// retryが始まる前の１回 + retryの３回
// 1
// 1
// 1
// 1
// Error: error: 1

Observable.of(1, 2, 3)
  .delay(1000)
  .do(util.print)
  .do(n => { throw new Error(`error: ${n}`); })
  .retry(3)
  .subscribe(util.template);