class Util {
  template: any;

  constructor() {
    this.template = {
      next: (t: any) => this.print(t),
      error: (error: any) => this.print(error),
      complete: () => this.print('complete')
    };
  }

  print(...args: Array<any>) {
    console.log(args.join(':'))
  }

  templateWithPrefix(prefix: string) {
    return {
      next: (...x: any[]) => this.print(`[${prefix}]`, x),
      error: this.template.error,
      complete: this.template.complete
    }
  }
}

export default new Util();