import { Observable } from 'rxjs';
import util from '../util';

const [odd$, even$] = Observable.of(3).partition(n => n % 2 === 0);

Observable.merge(
  odd$.map(n => `${n} is odd`),
  even$.map(n => `${n} is even`)
  )
  .subscribe(util.template);

// 3 is even
// complete

const source2$ = Observable.range(1, 10);
const [odd2$, even2$] = source2$.partition(n => n % 2 === 0);

Observable.timer(3000)
  .mapTo(null)
  .merge(
    odd2$.map(n => `${n} is odd2`),
    even2$.map(n => `${n} is even2`)
  )
  .subscribe(util.template);

// 上の書き方だと、mergeが並列に実行され、順番が崩れてしまう
// これを順番通り正確に流れるようにするには、partitionするストリームをHotに変換してあげることで実現できる
// 2 is odd
// 4 is odd
// 6 is odd
// 8 is odd
// 10 is odd
// 1 is even
// 3 is even
// 5 is even
// 7 is even
// 9 is even

// complete


const source3$ = Observable.range(1, 10).publish();
const [odd3$, even3$] = source3$.partition(n => n % 2 === 0);

Observable.timer(5000)
  .mapTo(null)
  .merge(
    odd3$.map(n => `${n} is odd3`),
    even3$.map(n => `${n} is even3`)
  )
  .subscribe(util.template);

source3$.connect();

// yarn build && node dist/example/partition.js | grep - e odd3 - e even3
// 1 is even3
// 2 is odd3
// 3 is even3
// 4 is odd3
// 5 is even3
// 6 is odd3
// 7 is even3
// 8 is odd3
// 9 is even3
// 10 is odd3