function siguiente(x, next) {
  next(x + 1)
}

function doble (x, next) {
  next(x*2)
}

function imprimir(resultado){
  console.log('Resultado: ', resultado)
}

function dobleDelSiguiente(x, next){
  next(siguiente(x))
}

//Siguiente
siguiente(8,imprimir)

//Doble
doble(8, imprimir)

//Siguiente del doble
dobleDelSiguiente(siguiente(8))





/*
console.log('Siguiente de 8 =>', siguiente(8))
console.log('Doble de 8 =>', doble(8))
console.log('Siguiente del doble de 8 =>', siguiente(doble(8)))
console.log('Doble del siguiente de 8 =>', dobleDelSiguiente(8))
console.log('Cuadruple de 8 =>', doble(doble(8)))
*/