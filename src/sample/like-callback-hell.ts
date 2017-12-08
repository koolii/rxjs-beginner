import { Observable } from 'rxjs';
import util from '../util';

// 本来ならこうは書かない
Observable.of(5)
  .subscribe(n => {
    Observable.interval(1000)
      .take(n)
      .subscribe(util.template);
  });

// 0
// 1
// 2
// 3
// 4
// complete