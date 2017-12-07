import { Observable } from 'rxjs';
import util from '../util';

// accの初期値が0で、1,2,3,4,5の値を集計
Observable.range(1, 5)
  .scan((acc, value) => acc + value, 0)
  .subscribe(util.template);

// 1
// 3
// 6
// 10
// 15 => reduceだとこれしか出力されない
// complete