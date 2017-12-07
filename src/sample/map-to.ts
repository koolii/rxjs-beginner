import { Observable } from 'rxjs';
import util from '../util';

Observable.of(1, 2, 3)
  .mapTo(100)
  .subscribe(util.template);

// 100
// 100
// 100
// complete