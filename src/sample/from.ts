import { Observable } from 'rxjs';
import util from '../util';

Observable.from([1, 2, 3, 4, 5]).subscribe(util.print)

// 1
// 2
// 3
// 4
// 5