import { Observable } from 'rxjs';
import util from '../util';

Observable.from([1, 2, 3])
  .map(n => n * n)
  .subscribe(util.template);