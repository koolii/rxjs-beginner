import { Observable } from 'rxjs';
import util from '../util';

Observable.timer(1000)
  .delay(1000)
  .subscribe(util.template);

// 0 => 合計2秒間待機することになる
// complete