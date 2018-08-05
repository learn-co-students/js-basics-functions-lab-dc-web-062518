// Code your solution in this file!
function distanceFromHqInBlocks(st) {
  let result
  // if (blocks > 42) {
  //   result = blocks - 42
  // } else (blocks < 42) {
  //   result = 42 - blocks
  // }
  (st > 42) ? result = st - 42 : result = 42 - st
  return result
}

function distanceFromHqInFeet(st) {
  let result
  // if (destination > start) {
  //   result = ((destination - start)*264)
  // } else (start > destination) {
  //   result = ((start - destination)*264)
  // }
  // (destination > start) ? result = ((destination - start)*264) : result = ((start - destination)*264)

  (st > 42) ? result = ((st - 42)*264) : result = ((42 - st)*264)
  // distanceFromHqInBlocks(st)*264
  return result
}

function distanceTravelledInFeet(start, destination) {
  let result
    (destination > start) ? result = ((destination - start)*264) : result = ((start - destination)*264)
  return result
}

function calculatesFarePrice(start, destination) {
  let result
  let feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    result = 0;
  } else if (400 < feet && feet < 2000) {
    result = (feet - 400)* 0.02
  } else if (2000 < feet && feet < 2500) {
    result = 25;
  } else {
    result = 'cannot travel that far'
  }
  return result
}
