import { Observable } from 'rxjs';
import util from '../util';

Observable.of(1)
  .do(util.print)
  .map(data => data * 2)
  .subscribe(util.template);

// 1 => do
// 2 => subscribe
// complete
