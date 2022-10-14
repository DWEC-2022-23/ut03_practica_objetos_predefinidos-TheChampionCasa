function ReyesMagos(){

    //declaracion de variables y datos que se piden mediante alertas
    var diaActual=prompt("Escribe el día actual");
    var mesActual=prompt("Escribe el mes actual");
    var anoActual=prompt("Escribe el año actual");
    var fechaActual=new Date(anoActual,mesActual,diaActual);
    var anoReyesMagos=fechaActual.getFullYear()+1;
    const fechaReyesMagos=new Date(anoReyesMagos,01,06);

    //sacar cuantos días quedan para reyes
    if (fechaActual.getMonth() == 1 && fechaActual.getDate() > 6) {
        anoReyesMagos = anoReyesMagos + 1;
    }
    let milisegundosDia = 1000 * 60 * 60 * 24;

    var diasQuedan=Math.ceil(fechaReyesMagos.getTime()-fechaActual.getTime())/(milisegundosDia);

    //imprimir cuantos días quedan
    alert("Quedan "+diasQuedan+" días para el día de reyes magos");
}

function fechaActual(){

    //declaración variables
    var fechaActual=new Date();
    var diaActual=fechaActual.getDate();
    var nombreDiaActual=fechaActual.getDay();
    var mesActual=fechaActual.getMonth()+1;
    var añoActual=fechaActual.getFullYear();
    var horaActual=fechaActual.getHours();
    var minutosActuales=fechaActual.getMinutes();

    //poner nombre del día de la semana
    switch(nombreDiaActual){
        case 0:
            nombreDia="domingo"
            break;
        case 1:
            nombreDia="lunes"
            break;
        case 2:
            nombreDia="martes"
            break;
        case 3:
            nombreDia="miércoles"
            break;
        case 4:
            nombreDia="jueves"
            break;
        case 5:
            nombreDia="viernes"
            break;
        case 6:
            nombreDia="sábado"
            break;
    }

    //sacar que mes es
    switch(mesActual){
        case 1:
            mes="Enero";
            break;
        case 2:
            mes="Febrero";
            break;
        case 3:
            mes="Marzo";
            break;
        case 4:
            mes="Abril";
            break;
        case 5:
            mes="Mayo";
            break;
        case 6:
            mes="Junio";
            break;
        case 7:
            mes="Julio";
            break;
        case 8:
            mes="Agosto";
            break;
        case 9:
            mes="Septiembre";
            break;
        case 10:
            mes="Octubre";
            break;
        case 11:
            mes="Noviembre";
            break;
        case 12:
            mes="Diciembre";
            break;
    }

    //imprimir resultado
    alert("Hoy es "+nombreDia+", "+diaActual+" de "+mes+" de "+añoActual+" y son las "+horaActual+":"+minutosActuales+" horas");
}

function calcularAreaCirculo(){

    //declaramos variables
    var radioCirculo=prompt("Escribe el radio del circulo que quieras");
    var areaCirculo, perimetroCirculo, areaCirculoDosDecimales, areaCirculoDosDecimales;

    //comprobamos si es un número
    if(radioCirculo==parseFloat(radioCirculo)){
        alert("El valor introducido es un número");
    }else{
        alert("El valor introducido es no número, por favor introduce un número");
        return calcularAreaCirculo;
    }

    //calculamos el area y el perimetro
    areaCirculo=Math.PI*Math.pow(radioCirculo,2);
    perimetroCirculo=2*Math.PI*radioCirculo;

    //limitamos a 2 decimales el resultado
    areaCirculoDosDecimales=areaCirculo.toFixed(2);
    perimetroCirculoDosDecimales=perimetroCirculo.toFixed(2);

    //imprimimos resultados
    alert("El area del circulo es "+areaCirculoDosDecimales+" m");
    alert("El perimetro del circulo es "+perimetroCirculoDosDecimales+" m");
}

function calcularAleatorio(){

    //declaracion Variables
    var primerNumero, segundoNumero, numeroAleatorio,max,min;
    parseInt(max);
    parseInt(min);

    //pedimos los dos números
    primerNumero=prompt("Escribe el primer número");
    segundoNumero=prompt("Escribe el segundo número");

    //generamos un número aleatorio entre los dos números pedidos anteriormente e imprimimos el número aleatorio
    if(primerNumero>segundoNumero){
        max=Math.ceil(primerNumero);
        min=Math.floor(segundoNumero);
        numeroAleatorio=Math.random()*(max-min+1)+min;
        alert("El número aleatorio que se ha elegido es "+numeroAleatorio.toFixed(2));
    }else if(segundoNumero>primerNumero){
        max=Math.floor(segundoNumero);
        min=Math.ceil(primerNumero);
        numeroAleatorio=Math.random()*(max-min+1)+min;
        alert("El número aleatorio que se ha elegido es "+numeroAleatorio.toFixed(2));
    }else{
        alert("El número aleatorio que se ha elegido es "+primerNumero);
    }
}

function cadenas(){

    //declaramos las variables
    var cadena, mitadCadena, longitud, ultimoCaracterCadena, invertirCadena, dividirGuionesCadena, contarVocales;

    //pedimos la cadena
    cadena=prompt("Escribe la palabra que quieras");

    //1. dividimos la cadena a la mitad
    longitud=parseInt(cadena.length/2);
    mitadCadena=cadena.substring(0,longitud);
    //imprimimos el resultado
    alert("La mitad de la cadena es "+mitadCadena);

    //2. sacamos el último carácter de la cadena
    ultimoCaracterCadena=cadena.substring(cadena.length-1,cadena.length);
    //imprimimos el resultado
    alert("El ultimo caracter es "+ultimoCaracterCadena);

    //3. Revertimos la cadena
    invertirCadena=cadena.split("").reverse().join("");
    //imprimimos el resultado
    alert("La cadena al reves es "+invertirCadena);

    //4. Dividomos la cadena en guiones imprimiendo palabra-guion-palabra
    dividirGuionesCadena=cadena.match(/.{1}/g).join('-');
    //imprimimos el resultado
    alert("La cadena divida por guiones es "+dividirGuionesCadena);

    //5. Contar la cantidad de vocales de la cadena
    contarVocales=cadena.match(/[aeiou]/gi).length;
    //imprimimos el resultado
    alert("En la cadena hay "+contarVocales+" vocales");
}