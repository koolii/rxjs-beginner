import { Observable } from 'rxjs';
import util from '../util';

// 複数のストリーム同士をメソッドチェーンで処理が記述できている
// ここで大事なのは、最初はObservable.ofのストリームだが、
// 途中からObservable.intervalのストリームにすり替わっている点で、その橋渡しをconcatMapが行っている
Observable.of(5)
  .concatMap(n => Observable.interval(1000).take(n))
  .subscribe(util.template);

// 0
// 1
// 2
// 3
// 4
// complete