import { Observable } from 'rxjs';
import util from '../util';

Observable.of(1, 2, 3, 4, 5)
  .toArray()
  .subscribe(util.template);

// 1, 2, 3, 4, 5
// complete

// ただし、toArrayオペレータはcompleteが発火しないと次に値を流さないので
// fromEventやintervalのようにそのままでは終了しないストリームには使用
// takeを使って明示的に終了条件を追加したり
// bufferCountを使って固定長の配列としてデータを流す様にすると良い
// bufferCountはストリーム内のデータを指定の個数毎にまとめて次に流すオペレータ
Observable.interval(1000)
  .take(10)
  .bufferCount(3)
  .subscribe(util.template);

// 0, 1, 2
// 3, 4, 5
// 6, 7, 8
// 9
// complete