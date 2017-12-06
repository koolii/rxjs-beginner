import { Observable } from 'rxjs';
import util from '../util';

Observable.throw(new Error('sample error'))
  .subscribe(util.template);

// Error: sample error
