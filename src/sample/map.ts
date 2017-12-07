import { Observable } from 'rxjs';
import util from '../util';

Observable.of(1, 2, 3)
  .map(n => n * n)
  .subscribe(util.template);

// 1
// 4
// 9
// complete