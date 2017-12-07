import { Observable } from 'rxjs';
import util from '../util';

// accの初期値が0で、1,2,3,4,5の値を集計
Observable.range(1, 5)
  .reduce((acc, value) => acc + value, 0)
  .subscribe(util.template);

// 15
// complete
