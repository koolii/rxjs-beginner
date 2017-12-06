import fetch from 'node-fetch';
import { Observable } from 'rxjs';
import util from '../util';

Observable.fromPromise(fetch('http://example.com', { method: 'GET'}))
  .subscribe(
    response => util.print(`Success. Response: ${response.statusText}`),
    util.print.bind(null, 'Something error happened')
  );

  // Success. Response: OK