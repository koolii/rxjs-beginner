import { Observable } from 'rxjs';
import util from '../util';

const timer5 = Observable.timer(5000);
const interval1 = Observable.interval(1000).take(5);

Observable.merge(timer5, interval1)
  .subscribe(util.template);

// 0
// 1
// 2
// 3
// 0
// 4
// complete