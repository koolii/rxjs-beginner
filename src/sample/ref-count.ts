import { Observable } from 'rxjs';
import util from '../util';

const source$ = Observable.of(3).publish().refCount();

source$.subscribe(util.templateWithPrefix('subscribe1'));
source$.subscribe(util.templateWithPrefix('subscribe2'));

// publishでHotなストリームにしているためデータは共有されているため
// subscribeを２回行っても3の値は流れきっているためcompleteだけが呼び出される
// [subscribe1]: 3
// complete
// complete