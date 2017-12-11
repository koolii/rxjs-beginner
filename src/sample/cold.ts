import { Observable } from 'rxjs';
import util from '../util';

const observable = Observable.of(3)
  .map(n => {
    const ret = n * n;
    // 参考にしている書籍だとここが表示されないとのことだったが、実行すると表示される
    console.log('TEST:' + ret);
    return ret;
  });

// ストリームの複製自体は行われていて、同じ3を複製してストリームをsubscribeしている
observable.subscribe(util.template);
observable.subscribe(util.template);

// TEST: 9
// 9
// complete
// TEST: 9
// 9
// complete