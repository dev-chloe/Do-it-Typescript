import {range} from '../range/range'
import {fold} from '../fold/fold'
import {filter} from '../filter/filter'
import {map} from '../map/map'

export let numbers: number[] = range(1, 100+1)
//책에서 나온 모습
export let result = fold(numbers, (result, value) => result + value, 0)


// 보기 쉬운 모습
const callback = (result, value) => result + value
//fold(배열, 콜백함수, 초깃값)
export let resultEasy = fold(numbers, callback, 0)



//odd-sum
const isOdd = (n: number): boolean => n % 2 !=0

export let oddFilterResult = fold(
  filter(numbers, isOdd),
  (filterResult, value) => filterResult + value, 0
)

//even-sum
const isEven = (n: number): boolean => n % 2 ==0

export let evenFilterResult = fold(
  filter(numbers, isEven),
  (filterResult, value) => filterResult + value, 0
)

//square-sum
export let mapResult = fold(
  map(numbers, value => value * value),
  (mapResult, value) => mapResult + value, 0
)