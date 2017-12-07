import { Observable } from 'rxjs';
import util from '../util';

Observable.race(
  Observable.timer(1000),
  Observable.timer(2000),
  Observable.timer(3000))
  .subscribe(util.template);

// 0 => 1 second after
// complete
