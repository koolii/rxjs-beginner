import { Observable } from 'rxjs';

// data: 9
// complete
Observable.of(3) // ストリームを生成
  .map(n => n * n) // データを加工する処理を定義
  .subscribe( // データ処理を開始
    n => console.log(`data: ${n}`),
    error => console.log(error),
    () => console.log('complete')
  );