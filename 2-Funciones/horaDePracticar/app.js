//Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo(){
    console.log("¡Hola, mundo!")
}

saludo()


//Crear una función que reciba un nombre como parámetro 
//y muestre "¡Hola, [nombre]!" en la consola.

function saludoNombre(nombre){
    console.log(`¡Hola, ${nombre}!`)
}

saludoNombre("Gerardo")

//Crear una función que reciba un número como parámetro 
//y devuelva el doble de ese número.

function doble(numero){
    return numero * 2
}


// Crear una función que reciba tres números como parámetros
//  y devuelva su promedio.

function promedio(numeroA, numeroB, numeroC){
    return (numeroA + numeroB + numeroC) / 3 
}

// Crear una función que reciba dos números como parámetros
//  y devuelva el mayor de ellos.

function mayor(numeroA, numeroB) {
   if(numeroA > numeroB){
    return numeroA
    } else {
        return numeroB
    }
}

// Crear una función que reciba un número como parámetro
//  y devuelva el resultado de multiplicar ese número por sí mismo.

function Multiplicado(numero){
    return numero * numero
}

