import { Observable } from 'rxjs';
import util from '../util';

// version once
Observable.timer(3000)
  .subscribe(util.template);

// verion loop
Observable.timer(4000, 500)
  .subscribe(util.template)