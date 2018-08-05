function distanceFromHqInBlocks(distance) {
  let range
  if (distance > 42) {
    range = distance - 42;
  } else if (distance < 42) {
    range = 42 - distance;
  }
  return range
}

function distanceFromHqInFeet(block) {
  let range
  if (block > 42) {
    range = ((block - 42) * 264);
  } else if (block < 42) {
    range = ((42 - block) * 264);
  }
  return range
}

function distanceTravelledInFeet(block1, block2) {
  let range
  if (block1 < block2) {
    range = ((block2 - block1) * 264);
  } else if (block1 > block2) {
    range = ((block1 - block2) * 264);
  }
  return range
}

function calculatesFarePrice(start, destination) {
  let range = distanceTravelledInFeet(start, destination);

  if (range <= 400) {
    return 0
  } else if (range > 400 && range <= 2000) {
    return ((range - 400) * 0.02);
  } else if (range > 2000 && range <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
