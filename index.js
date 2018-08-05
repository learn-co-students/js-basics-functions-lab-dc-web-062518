// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return (street < 42 ? 42 - street : street - 42)
}
function distanceFromHqInFeet(street){
  blocks =  distanceFromHqInBlocks(street)

  return (blocks * 264)

}

function distanceTravelledInFeet(street1, street2){

  return (street1 > street2 ? (street1 - street2)*264 : (street2 - street1)*264)

}

function calculatesFarePrice(street1,street2){
  feet = distanceTravelledInFeet(street1,street2)

  if(feet > 2500){
    return 'cannot travel that far'

  }else if (feet < 400) {
    return 0
  }else if (feet > 2000) {
    return 25 
  }else{
    return (feet - 400) * .02
  }
}
