import { Observable } from 'rxjs';
import util from '../util';

Observable.interval(1000)
  .take(5)
  .subscribe(
    util.print,
    _ => _,
    () => util.print('5 seconds left')
  );

// 0
// 1
// 2
// 3
// 4
// 5 seconds left