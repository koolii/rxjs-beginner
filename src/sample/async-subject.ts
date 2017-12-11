import { Observable, AsyncSubject } from 'rxjs';
import util from '../util';

// ストリームを最後に流れたデータを記憶するが、completeが呼ばれるまで値を流さない
// 1 -> 2 -> 3 -> subject.complete()だから 3が流れる
const subject = new AsyncSubject();

subject.subscribe(util.templateWithPrefix('subscribe1'));
subject.next(1);

subject.subscribe(util.templateWithPrefix('subscribe2'));

subject.next(2);
subject.next(3);

subject.subscribe(util.templateWithPrefix('subscribe3'));

subject.complete();

// [subscribe1]: 3
// [subscribe2]: 3
// [subscribe3]: 3
// complete
// complete
// complete

