import { Observable } from 'rxjs';
import util from '../util';

// distinctの引数とは少し異なる
Observable.from([1, 2, 3, 3, 1, 1])
  .distinctUntilChanged()
  .subscribe(util.template);

// 下記のような結果から連続した値だといつまでも１つの値しか出力されないが
// 異なる値になった場合はdistinctUntilChanged()がtrueになるっぽい
// 1
// 2
// 3
// 1
// complete
