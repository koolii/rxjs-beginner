import { Observable, BehaviorSubject } from 'rxjs';
import util from '../util';

const subject = new BehaviorSubject(0);

// 最初に初期値の0が流れる
subject.subscribe(util.templateWithPrefix('subscribe1'));
// ここで直前の値が 0 -> 1に変更される
subject.next(1);

// 最初に直前の1が流れる
subject.subscribe(util.templateWithPrefix('subscribe2'));

// ここでnext(2,3)しているがsubscribe1でも出力されている
// 後ろのsubscribeは特に感知しないが、behaviorSubjectなので、最後にnextした3がsubscribe3で実行されている
subject.next(2);
subject.next(3);

subject.subscribe(util.templateWithPrefix('subscribe3'));

subject.complete();

// 下記を見ればわかるが、直前にnext()で実行していた値がsubscribeに渡されている
// [subscribe1]: 0 <- 最初の0
// [subscribe1]: 1
// [subscribe2]: 1 <- 最後に渡していた1
// [subscribe1]: 2
// [subscribe2]: 2
// [subscribe1]: 3
// [subscribe2]: 3
// [subscribe3]: 3 <- 最後に渡していた3
// complete
// complete
// complete

// subjectを生成してsubscribeを複数定義する
// その後にnextを実行すると、subjectを生成してからnextを実行する直前までのsubscribeが発火する？
// という理解だと上記がうまく解決できる