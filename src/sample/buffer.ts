import { Observable } from 'rxjs';
import util from '../util';

Observable.interval(1000)
  .map(t => t + 1)
  .buffer(Observable.timer(5000))
  .subscribe(util.template);

// 1, 2, 3, 4 => array
// complete