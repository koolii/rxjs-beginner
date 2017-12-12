import { Observable } from 'rxjs';
import util from '../util';

async function count(n: number) {
  const source$ = Observable.timer(n * 1000).map(_ => `${n} seconds done`);
  return await source$.toPromise();
}

count(5).then(util.print);

// 5 seconds done