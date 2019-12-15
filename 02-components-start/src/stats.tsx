let counter = 0

export default counter

export const debug = ():void => {
  counter +=1
  console.error(`DEBUG MSG ${counter}`)
}