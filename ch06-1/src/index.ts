import {createRangeIterable} from './createRangeIterable'
import {RangeIterable} from './RangeIterable'
import {StringIterable} from './StringIterable'

const iterator = createRangeIterable(1, 3+1)

while(true) {
  const {value, done} = iterator.next()
  if(done) break
  console.log(value)
}

// 실행 결과
// 1
// 2
// 3

const rangeIterator = new RangeIterable(1, 3+1)

for(let value of rangeIterator)
  console.log(value)

// 실행 결과
// 1
// 2
// 3

for(let value of new StringIterable(['바밤바', '밤맛나는?', '바밤바']))
  console.log(value)

// 실행 결과
// 바밤바
// 밤맛나는?
// 바밤바