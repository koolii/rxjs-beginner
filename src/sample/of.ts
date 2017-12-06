import { Observable } from 'rxjs';

// 100
Observable.of(100).subscribe(data => console.log(data));

// [1, 2, 3]
Observable.of([1, 2, 3]).subscribe(data => console.log(data));