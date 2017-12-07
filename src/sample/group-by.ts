import { Observable } from 'rxjs';
import util from '../util';

const alphabet = /[a-z]/gi;
const number = /[0-9]/g;

Observable.from('abc1n7h4bbbj3@-k9n4,')
  .groupBy(c => {
    if (c.match(alphabet) != null) return 'alphabet';
    if (c.match(number) != null) return 'number';
    return 'other';
  })
  .mergeMap(group => group.reduce((acc, c) => acc + c, ''))
  .subscribe(util.template);

// abcnhbbbjkn
// 174394
// @-,
//   complete