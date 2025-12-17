const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea
for (i = 1; i <= arr.length; i++) {
  if(arr[i] == i){
    arr.splice(i, 1)
    console.log(arr);
  }
}

// TEscribe tu codigo por encima de esta linea


//No tocar esta funcion
export function taskArr(){
  return arr;
}
