// Code your solution in this file!
function distanceFromHqInBlocks(n)
{
  if (n < 40)
  {
    return 8;
  }else if (n > 40 && n < 50)
  {
    return 1;
  }else
  {
      return 8;
  }
}

function distanceFromHqInFeet(n)
{
 return distanceFromHqInBlocks(n) * 264
}

function distanceTravelledInFeet(n1, n2)
{
  if (n1 > n2)
  {
    return (n1-n2)*264
  }else
  {
    return (n2-n1)*264
  }
}

function calculatesFarePrice(n1, n2)
{
  const feet = distanceTravelledInFeet(n1, n2)

  if (feet < 400)
  {
    return 0
  }else if (feet <= 2000)
  {
      return (feet - 400) * 0.02
  }else if (feet > 2000 && feet < 2500)
  {
      return 25
  }else
  {
    return 'cannot travel that far'
  }


}
