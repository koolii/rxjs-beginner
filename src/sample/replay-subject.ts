import { Observable, ReplaySubject } from 'rxjs';
import util from '../util';

// 直前の2つを保持する
const subject = new ReplaySubject(2);

// 1を保持しているから出力される
subject.subscribe(util.templateWithPrefix('subscribe1'));
subject.next(1);

subject.subscribe(util.templateWithPrefix('subscribe2'));

// TODO:koolii next(3)をした時になんでsubscribe1のログが出力されるのか？最初からストリームが再度流れた？
// ここでnext(2,3)しているがsubscribe1でも出力されている
// なので、直前までに定義されているsubscribeは全て通過するということがわかる
// 後ろのsubscribeは特に感知しないが、behaviorSubjectなので、最後にnextした3がsubscribe3で実行されている
// 2, 1が保持される
subject.next(2);
// 3, 2が保持される
subject.next(3);

subject.subscribe(util.templateWithPrefix('subscribe3'));

subject.complete();

// [subscribe1]: 1
// [subscribe2]: 1
// [subscribe1]: 2
// [subscribe2]: 2
// [subscribe1]: 3
// [subscribe2]: 3
// [subscribe3]: 2 <- subscribe時点の2つ前のデータ2が流れる
// [subscribe3]: 3 <- subscribe時点の1つ前のデータ2が流れる
// complete
// complete
// complete