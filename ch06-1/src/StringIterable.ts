export class StringIterable implements Iterable<string> {
  constructor(private strings: string[] = [], private currentIndex: number = 0) {}
  [Symbol.iterator](): Iterator<string> {
    const target = this
    let currentIndex = target.currentIndex, length = target.strings.length

    const iterator: Iterator<string> = {
      next(): {value: string, done: boolean} {
        const value = currentIndex < length ? target.strings[currentIndex++] : ''
        const done = value == ''
        return {value, done}
      }
    }
    return iterator
  }
}