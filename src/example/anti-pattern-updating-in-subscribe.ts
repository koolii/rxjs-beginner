import { Observable, ReplaySubject } from 'rxjs';
import util from '../util';

const subject = new ReplaySubject();

subject.subscribe((data: number) => {
  util.print(data);
  // problem
  subject.next(data + 1);
})

subject.next(1);

// 結果無限ループになる
// subscribe内でnext()を呼び出すと、次のsubscribeが呼ばれてを繰り返す為
// subscribe内部でデータを更新したいなら、条件付きのnext()をsubscribeに実装するか
// takeを使ってそのストリームの実行回数自体を制限する