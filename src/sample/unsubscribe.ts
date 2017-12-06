import { Observable } from 'rxjs';

// 0
// 1
// 2
// 3
// 4
// data: 0
// next: timer
// complete: timer

// 一秒ごとにデータを流すストリーム
const subscription = Observable.interval(1000)
  .subscribe(
    t => console.log(t),
    error => error,
    () => console.log('complete: interval')
  );

Observable.interval(6000)
  .take(1) // takeを使っているため自動で終了する
  .subscribe(
    // unsubscribeするとデータの受け取りを終了
    _ => {
      console.log('next: timer');
      subscription.unsubscribe();
    },
    error => console.log(error),
    () => console.log('complete: timer')
  );