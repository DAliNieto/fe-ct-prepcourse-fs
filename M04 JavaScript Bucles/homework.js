/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:

   if ( x === y){
      return x;
   }else if (x>y){
      return x;
   }else {
      return y;
   }
}



function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:

   if (edad > 18 || edad === 18){
   resultado = "Allowed";
   }else {
      resultado = "Not allowed";    
   }
   return resultado;
}


function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
if (status === 1){
    aviso = "Online";
}else if (status ===2){
   aviso = "Away";
   
}else{
    aviso = "Offline"
   }
return aviso;

}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   
//switch (idioma){
//   case "aleman":
//      console.log("Guten Tag!");
//      break;

//   case "mandarin":
//      console.log("Ni Hao!");
//      break;
   
//   case "ingles":
//      console.log("Hello!");
//      break;

//   default:
//      console.log ("Hola!")
//      break;
//}
let aviso = '';
if (idioma === "ingles"){
   aviso = 'Hello!';
}else if(idioma === "mandarin" ){
   aviso = 'Ni Hao!';
}else if(idioma === "aleman"){
   aviso = 'Guten Tag!';
} else{
   aviso = 'Hola!';
}
 return aviso;
 
}

//console.log(saludo("mandarin"));

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:

   switch (color){
      case "blue": 
      mensaje = "This is blue";
      break;
      case  "red":
      mensaje = "This is red";
      break;
      case "green":
      mensaje = "This is green";
      break;
      case "orange":
      mensaje = "This is orange";
      break;
      default:
      mensaje = "Color not found";
   }
return mensaje;


}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
if (num === 10 || num === 5){
   return true;
}else {
   return false;
}

}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if (num < 50 && num > 20){
      return true;
   }else {
      return false;
   
   }

}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:

   if (num % 1 == 0){
      return true;
   }else if (num == 0){
      return true;
   }
   else {
      return false;
   }


}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   var mensaje;
   if (num %3 ===0 && num%5=== 0){
      mensaje = "fizzbuzz";
   }else if ( num % 3 === 0){
      mensaje = "fizz";
      //console.log("este es le numero "+ num);
      //console.log("este es le mensaje!!! "+ mensaje);
     }else if (num % 5 ===0){
        mensaje = "buzz";
     }else {
  mensaje = false;   
  }
   
   //console.log("prueba "+ mensaje);
   return mensaje;

}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
let mensaje;
if (num1 ===0 && num2 ===0 && num3 ===0){
   mensaje = "Error";
}else if (num1 < 0 || num2 < 0 || num3 < 0){
   mensaje = "Hay negativos";
}else if (num3 > num1 && num3 > num2){
   num3=num3+1;
   return num3;
}else if (num1 > num2 && num1 > num3 && num1 >0){
   mensaje = "Numero 1 es mayor y positivo";
}else{
   mensaje = false;
}
return mensaje;
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
var primo=0;
var cont=0;

if (num<0||num===0||num===1){
   return false;
}

   for (let i=1; i<=num; i++){
   primo = num % i;
   if (primo === 0){
      cont=cont+1;
   }
   }
if (cont > 2){
   //console.log("no es primo");
   return false;
}else if (cont == 2){
  // console.log(" es primo");
   return true;
}

}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   let mensaje = '';
 if (valor === true){
   mensaje = 'Soy verdadero';
 }else {
   mensaje = 'Soy falso';
 }

 return mensaje;
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   let i=0;
   let salir=true;
   //console.log('El num ate ehile  es: '+num);
   while (i<=3 && salir === true){
      
      verificar = num/10;
      if (verificar != 0){
        num =verificar;
         //console.log('El num  es: '+num);
          if (Math.floor(num)==0){
            i++;
            salir=false;
         }else{
            i++;
         }
         
      }else{
         salir=false;
      }
  console.log('El valor i es: '+i);
   }

  if (i===3){
   return true;
  }else{
    return false;
  }
}

tieneTresDigitos(825263);

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let resultado = num;
   let i=1;
   do{
      resultado = resultado + 5;

   i++;
   }while(i<=8);

   return resultado;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
