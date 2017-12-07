import { Observable } from 'rxjs';
import util from '../util';

Observable.range(1, 10)
  .filter(n => n % 2 === 0)
  .subscribe(util.template);

// 2
// 4
// 6
// 8
// 10
// complete

Observable.of(1, 3, 5)
  .filter(n => n % 2 === 0)
  .filter(_ => {
    util.print('TEST');
    return true;
  })
  .subscribe(util.template);

// complete