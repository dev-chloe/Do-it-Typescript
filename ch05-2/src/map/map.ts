export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {
  let mapResult: Q[] = []

  for(let index = 0; index < array.length; ++ index) {
    const value = array[index]
    mapResult = [...mapResult, callback(value, index)]
  }
  return mapResult
}