// Code your solution in this file!

function distanceFromHqInBlocks(street){
  let blocks;
  blocks = Math.abs(42 - street);
  return blocks
}

function distanceFromHqInFeet(street){
  let feet;
  feet = 264 * distanceFromHqInBlocks(street);
  return feet
}

function distanceTravelledInFeet(street1, street2){
  let feet;
  feet = 264 * Math.abs(street1 - street2);
  return feet;
}


function calculatesFarePrice(start, destination){
  let fare;
  distance = distanceTravelledInFeet(start, destination)

  if (distance<400){
    fare = 0;
  } else if (distance>=400) {
      if (distance<=2000){
        fare = 0.02 * (distance - 400)
      } else if (distance>2000){
        fare = 25
         if (distance > 2500){
            fare = 'cannot travel that far'
    }
  }


  }

  return fare;
}
