export class RangeIterable {
  constructor(public from: number, public to: number) {}
  [Symbol.iterator]() {
    // 핵 중요 포인트!! this 값을 target에 담는 이유는 next()함수의 this와 헷갈리지 않게 명확히 표시해주기 위해서
    const target = this
    let currentValue = target.from
    return {
      next() {
        const value = currentValue < target.to ? currentValue++ : undefined
        const done = value == undefined
        return {value, done}
      }
    }
  }
}