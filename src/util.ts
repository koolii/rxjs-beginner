const print = (...args: Array<any>) => console.log(args.join(','));
export default {
  print,
  template: {
    next: (t: any) => print(t),
    error: (error: any) => print(error),
    complete: () => print('complete')
  }
}