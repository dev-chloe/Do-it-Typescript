import Chance from 'chance'
import * as R from 'ramda'

import IPerson from './person/IPerson'
import Person, {makePerson} from './person/Person'
// import Person, {makePerson} from './person/Person' 이렇게도 쓸 수 있음

// const testMakePerson = ():void => {
//   let jane: IPerson = makePerson('Jane')
//   let jack: IPerson = makePerson('Jack')
//   console.log(jane,jack)
// }

// testMakePerson()

const chance = new Chance()

let persons: IPerson[] =R.range(0,2)
  .map((n: number) => new Person(chance.name(), chance.age()))
console.log(persons)