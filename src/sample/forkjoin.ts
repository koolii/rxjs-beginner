import { Observable } from 'rxjs';
import util from '../util';

Observable.forkJoin(
  Observable.of(1),
  Observable.of(1, 2), // 1の値が破棄されてしまって2のみが出力されている => 最後の値だけが有効
  Observable.timer(10000))
  .subscribe(util.template);

// 1, 2, 0 => 配列
// complete

Observable.forkJoin(
  Observable.of(1),
  Observable.of(1, 2),
  Observable.timer(1000),
  Observable.throw(new Error('error')))
  .subscribe(util.template);

// Error: error