import IPerson from './person/IPerson'
import {makePerson} from './person/Person'
// import Person, {makePerson} from './person/Person' 이렇게도 쓸 수 있음

const testMakePerson = ():void => {
  let jane: IPerson = makePerson('Jane')
  let jack: IPerson = makePerson('Jack')
  console.log(jane,jack)
}

testMakePerson()