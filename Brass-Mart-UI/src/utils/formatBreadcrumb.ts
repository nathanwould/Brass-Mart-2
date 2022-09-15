export default function formatBreadcrumb(string: string) {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  const findTheHyphen = ((arr: Array<string>) => arr.findIndex((element) => element === "-"))
  let asArray = string.split('')
  if (findTheHyphen(asArray) !== -1) {
    asArray = asArray.splice(findTheHyphen(asArray) + 1, asArray.length)
  }
  return capitalize(asArray.join(''))
};