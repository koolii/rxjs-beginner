import { Observable } from 'rxjs';
import util from '../util';
import { EventTargetLike } from 'rxjs/observable/FromEventObservable';

// DOMのinput要素だと思えばOK
// 0.5秒待機し、特にchangeが実行されなければsubscribeする
const input: EventTargetLike = new EventTarget();
Observable.fromEvent(input, 'change')
  .debounceTime(500)
  .subscribe((event: any) => util.print(event.target.value));

// inputのところを適切なDOMに変更する必要がある