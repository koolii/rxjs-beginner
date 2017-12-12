import { Observable } from 'rxjs';
import util from '../util';

const users: object[] = [
  { name: 'Mike' },
  { name: 'Jon' },
  { name: 'Joy' }
];
const userJson = JSON.stringify(users);

// switchMap(array => Observable.from(array))で配列内のデータ一件一件が流れるようにすることが出来る
// 実はswitchMapやconcatmap等のオペレータはObservable.fromをつけず直接配列を返しても動作する
Observable.fromPromise(Promise.resolve(userJson))
  .map(response => JSON.parse(response))
  // .switchMap(array => Observable.from(array))
  .switchMap(array => array)
  .map((user: any) => user.name)
  .subscribe(util.templateWithPrefix('user'));

// [user]: Mike
// [user]: Jon
// [user]: Joy
// complete