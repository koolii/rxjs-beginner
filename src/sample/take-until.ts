import { Observable } from 'rxjs';
import util from '../util';

Observable.interval(1000)
  .map(t => t + 1)
  .takeUntil(Observable.timer(5000)) // 5秒間まではmapのデータを流す
  .subscribe(util.template);

// 1
// 2
// 3
// 4
// complete