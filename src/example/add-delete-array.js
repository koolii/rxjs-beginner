// import { Observable, Subject } from 'rxjs';
// import util from '../util';
const { Observable, Subject } = require('rxjs');
const utilDefault = require('../../dist/util');
const util = utilDefault.default;

const add$ = new Subject();
const remove$ = new Subject();
const clear$ = new Subject();

const array = Observable.merge(
  add$.map((data) => ({ op: 'a', data })),
  remove$.map((data)=> ({ op: 'b', data })),
  clear$.map((data) => ({ op: 'c', data })))
  .startWith([])
  .scan((acc, value) => {
    if (value.op === 'a') return acc.concat(value);
    if (value.op === 'b') return acc.filter(v => v !== value);
    if (value.op === 'c') return [];
  })
  .do(a => util.print(JSON.stringify(a)))
  .publishReplay(1)
  .refCount();

array.subscribe(util.templateWithPrefix('subscribe1'));

add$.next(1);
add$.next(2);
remove$.next(1);
add$.next(3);

array.subscribe(util.templateWithPrefix('subscribe2'));

add$.next(4);
clear$.next();