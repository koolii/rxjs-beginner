import { Observable } from 'rxjs';
import fetch from 'node-fetch';
import util from '../util';

const ep$ = Observable.of('http://example.com');

ep$
  .concatMap(ep => fetch(ep, { method: 'GET' }))
  .map(response => response.statusText)
  .subscribe(util.template);