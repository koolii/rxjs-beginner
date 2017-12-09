import { Observable } from 'rxjs';
import util from '../util';

const observable = Observable.of(3).publish();

// この部分だけだと出力はされない
// なぜならpublish()でHOTなストリームとなっているため
// subscribeしただけではデータが流れないため
// 流すためにはconnect()を実行する必要がある
observable.subscribe(util.template);

// このconnect()を通ることでストリームが開始され、データが流れ始める
observable.connect();

// connect()のあとに定義しているsubscribeはconnect()が実行された時点でデータが流れきっているため
// 何も表示されない
observable.subscribe(n => util.print(`second-subscribe: ${n}`));

// 3
// complete