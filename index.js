// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  let blocks = Math.abs(streetNumber - 42) ;
  return blocks;
}

function distanceFromHqInFeet(number){
  return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(num1, num2){
  let blocks = Math.abs(num1 - num2)
  return blocks * 264
}

function calculatesFarePrice(num1, num2){
  let feet = distanceTravelledInFeet(num1, num2)

  if (feet < 400) {
    return 0;
  } else if (feet <= 2000){
    return (feet - 400) * 0.02;
  }else if  (feet > 2000 && feet < 2500){
    return 25;
  }else {
    return 'cannot travel that far'
}
}
