let x=[7,9,8,6,7]
let sum=0
function findAvg(){
  for (let i=0;i<x.length;i++){
      sum+=x[i]
  }
  let Avg=sum/x.length
  document.write(Avg)
}
findAvg(x);
