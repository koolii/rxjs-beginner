// 従来のイベントのやり方
// const a = document.getElementById('a');

// a.addEventListener('change', (event) => {
//   let v = parseInt(event.target.value);
//   document.getElementById('b').value = v * 2; // aの二倍
//   document.getElementById('c').value = v / 2; // aの半分
// });

type Observer = (data: number) => void;

class Subject {
  private observers: Observer[] = [];

  emit(data: number) {
    this.observers.forEach(obs => obs(data));
  }

  addObserver(obs: Observer) {
    this.observers.push(obs);
  }
}

const subject = new Subject();
// HTMLのDOMをモックっぽく作ってる
const dom = {
  addEventListener: (eventName: string, callback: Function) : void => {
    setTimeout(callback.bind(null, 100), 3000);
  }
};

// domのchangeが発行された時にsubject.emitが呼ばれるだけでBやCは特に依存することがなくなった
// なので疎な関係となり、実装等で楽になる
// (例えば,type Dの処理を追加したくなれば、subject.addObserverを呼ぶだけでよくなる)
dom.addEventListener('change', (value: number) : void => {
  subject.emit(value);
});

subject.addObserver(data => {
  const result = data * 2;
  console.log(`type B: ${result}`);
});
subject.addObserver(data => {
  const result = data / 2;
  console.log(`type C: ${result}`);
});
