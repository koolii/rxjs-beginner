import { Observable } from 'rxjs';
import util from '../util';

Observable.of(3, 1, 2, 5, 4)
  .switchMap(n => Observable.timer(n * 1000).mapTo(`${n} seconds passed`))
  .subscribe(util.template);

// 値が3のストリームをswitchMapで生成し、3秒間待機するが、その待機中に次の値(1)が来るため3のストリームは中断される
// それが最後の値(4)まで続く、だから出力結果は4秒しかない
// ストリーム上書き型みたいな印象(逆がexhaustMap)

// 4 seconds passed
// complete
