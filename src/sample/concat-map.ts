import { Observable } from 'rxjs';
import util from '../util';

// ofで値を生成、次に渡す、timerで値を受取り、指定時間だけ待機、固定の文字列を返却
Observable.of(3, 1, 2, 5, 4)
  .concatMap(n => Observable.timer(n * 1000).mapTo(`${n} seconds passed`))
  .subscribe(util.template);

// concatMapだと、それぞれの値(3,1,2,5,4)毎にストリームを生成し、
// 一つのストリームが完了したあと、subscribeが実行され、次のストリームが開始される
// (この時、ストリームが終わったらsubscribeが呼ばれるが次のストリームは前のsubscribeの実行完了を待っていない)
// (3が終わったら1、1が終わったら2...)

// ofはすぐに値をconcatMapに渡すが、concatMapが値をスタックして一つ一つのストリーム処理を実行しているイメージ？

// 3 seconds passed
// 1 seconds passed
// 2 seconds passed
// 5 seconds passed
// 4 seconds passed
// complete