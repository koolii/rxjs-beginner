import { Observable } from 'rxjs';
import util from '../util';

Observable.interval(1000)
  .take(5)
  .subscribe(util.template);

// 0
// 1
// 2
// 3
// 4
// complete
