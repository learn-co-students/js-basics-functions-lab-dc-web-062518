function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
   var hdqtr = 42
   return Math.abs(someValue - hdqtr)
}

function distanceFromHqInFeet (someValue) {
  distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet
  // function, passing the argument from distanceFromHqInFeet into
  // distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to
  // calculate feet
    var hdqtr = 42
    return Math.abs((someValue - hdqtr)* 264)
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
