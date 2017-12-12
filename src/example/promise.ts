import { Observable } from 'rxjs';
import util from '../util';

const id = 1000;

Observable.of(id)
  .map(id => `id: ${id}`)
  .switchMap(ep => Promise.resolve(ep))
  .subscribe(util.template);

// fromPromiseでもPromiseは扱うことができるが、
// switchMapやconcatMapもPromiseを扱うことが出来る
// ↑のようにswitchMapなどに渡す引数の戻り値をPromiseにしても同じ(thenみたいな感じ？)