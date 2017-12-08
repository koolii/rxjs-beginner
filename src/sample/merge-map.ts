import { Observable } from 'rxjs';
import util from '../util';

Observable.of(3, 1, 2, 5, 4)
  .mergeMap(n => Observable.timer(n * 1000).mapTo(`${n} seconds passed`))
  .subscribe(util.template);

// concatとは違い、並列で実行される。
// ofがmergeMapに値をすぐに渡し、mergeMapはconcatMapと違い、スタックはさせず、ストリームの処理を待たず、
// 新たなストリームを実行するため並列になる

// 1 seconds passed
// 2 seconds passed
// 3 seconds passed
// 4 seconds passed
// 5 seconds passed
// complete