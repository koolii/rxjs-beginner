import { Observable } from 'rxjs';
import util from '../util';

Observable.from([1, 2, 3, 1, 1, 2])
  .distinct()
  .subscribe(util.template);

// 1
// 2
// 3
// complete