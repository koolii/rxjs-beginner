import { Observable, Subject } from 'rxjs';
import util from '../util';

const subject = new Subject();
subject.next(1);
subject.subscribe(util.templateWithPrefix('subscribe1'));

subject.next(2);
subject.next(3);
subject.subscribe(util.templateWithPrefix('subscribe2'));

subject.complete();

// Hotなので、subscribeされるより前にnextされたデータは破棄
// だからnext(1)は何も出力されない
// そして、subscribe2はすでにデータが流れ終わっているからcompleteしか出力されない
// [subscribe1]: 2
// [subscribe1]: 3
// complete
// complete