import { Observable } from 'rxjs';

// 中身自体はstream-sample.tsと同様
const properties = {
  next: (n: number) => console.log(`data: ${n}`),
  error: (error: Object) => console.log(error),
  complete: () => console.log('complete')
}

// data: 9
// complete
Observable.of(3)
  .map(n => n * n)
  .subscribe(properties);



