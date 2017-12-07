import { Observable } from 'rxjs';
import util from '../util';

Observable.throw(new Error('error'))
  .catch(error => {
    util.print(error);
    return Observable.of(1)
  })
  .subscribe(util.template);

// Error: error
// 1
// complet

Observable.of(1, 2, 3)
  .map(n => {
    if (n % 2 === 0) {
      throw new Error(`${n} is event.`);
    }
    return n;
  })
  .catch(error => {
    util.print(error);
    return Observable.of('even');
  })
  .subscribe(util.template);

// 2の時点でError状態となるため3には到達せず終了する
// 1
// Error: 2 is event.
// even
// complete