import { Observable } from 'rxjs';
import util from '../util';

const [odd$, even$] = Observable.range(1, 10)
  .partition(data => data % 2 === 1);

odd$.subscribe(util.template);
even$.subscribe(util.template);

// ↓ odd$
// 1
// 3
// 5
// 7
// 9
// complete
// ↓ even$
// 2
// 4
// 6
// 8
// 10
// complete
