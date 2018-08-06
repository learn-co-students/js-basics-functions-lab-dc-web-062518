// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(42 - someValue)
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(firstBlock, lastBlock) {
  let num
  if (lastBlock > firstBlock) {
    num = lastBlock - firstBlock
  } else {
    num = firstBlock - lastBlock
  }
  return num * 264
}

function calculatesFarePrice(firstBlock, lastBlock) {
  let feet = distanceTravelledInFeet(firstBlock, lastBlock)
  let price
  if (feet <= 400) {
    price = 0
  } else if (feet <= 2000) {
    price = (feet - 400)*0.02
  } else if (feet <= 2500) {
    price = 25
  } else if (feet > 2500) {
    price = 'cannot travel that far'
  }
  return price
}
