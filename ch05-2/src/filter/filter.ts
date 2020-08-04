import { result } from "../sum/declarative-sum"

export const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
  
  let filterResult: T[] = []

  for(let index: number = 0; index < array.length; ++index) {
    const value = array[index]
    if(callback(value, index))
      filterResult = [...filterResult, value]
  }
  return filterResult
}