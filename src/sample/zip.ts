import { Observable } from 'rxjs';
import util from '../util';

const a = Observable.of(50);
const b = Observable.of(100);

Observable.zip(a, b)
  .subscribe(util.template);
// 50,100 => 配列

// Observable.zip(
//   Observable.interval(1000).take(3).map(n => `obj1: ${n}`),
//   Observable.interval(1000).take(5).map(n => `obj2: ${n}`),
//   Observable.interval(400).take(2).map(n => `obj3: ${n}`))
//   .subscribe(util.template);