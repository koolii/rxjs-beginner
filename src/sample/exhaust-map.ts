import { Observable } from 'rxjs';
import util from '../util';

Observable.of(3, 1, 2, 5, 4)
  .exhaustMap(n => Observable.timer(n * 1000).mapTo(`${n} seconds passed`))
  .subscribe(util.template);

// 個人的にはswitchMapの逆バージョンみたいな印象
// 最初に値(3)を受け取って、3秒間待機している間に他の値(1,2,5,4)がexhaustMapに流れるが、
// 3のストリームの処理が未完了なので破棄されてしまい、出力は3秒経過の出力しかされていない

// 3 seconds passed
// complete

