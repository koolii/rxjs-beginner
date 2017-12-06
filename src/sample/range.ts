import { Observable } from 'rxjs';
import util from '../util';

Observable.range(1, 5).subscribe(util.template);

// 1
// 2
// 3
// 4
// 5
// complete
