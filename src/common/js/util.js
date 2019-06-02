export function getRandomList(list){
  var arr = list.slice();
  for(let i=0;i<arr.length;i++){
    let j = getRan(0,i);
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr
}

function getRan(m,n){
  return Math.floor(m + Math.random() * (n - m + 1))
}
