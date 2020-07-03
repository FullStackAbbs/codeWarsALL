
let negCount=0;
function countNegatives(grid){
  grid.forEach((row) =>

  row.forEach((el)=> el < 0 ? negCount++ : null

   ))
   return console.log(negCount)
}

countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
