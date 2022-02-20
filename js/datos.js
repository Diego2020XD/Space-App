//Variables de los datos
var img_planetas = document.getElementById("img-planetas");
var titulo = document.getElementById("titulo")
var descripcion = document.getElementById("descripcion")
var distancias = document.getElementById("distancia")
var temp = document.getElementById("temp")
var diametro = document.getElementById("diametro")
var periodo_orbital = document.getElementById("rotacion")


var planetas_btn = [
 document.getElementById("tierra"),
 document.getElementById("venus"),
 document.getElementById("mercurio"),
 document.getElementById("marte"),
 document.getElementById("jupiter"),
 document.getElementById("saturno"),
 document.getElementById("urano"),
 document.getElementById("neptuno"),
 document.getElementById("pluton"),
]

var resul = 3;

/*Cuando se de click en los botones del slider el local storage va a cambiar y asi cambiara el conetenido*/
planetas_btn[0].addEventListener("click", () =>{resul = 1})
planetas_btn[1].addEventListener("click", () =>{resul = 2})
planetas_btn[2].addEventListener("click", () =>{resul = 3})
planetas_btn[3].addEventListener("click", () =>{resul = 4})
planetas_btn[4].addEventListener("click", () =>{resul = 5})
planetas_btn[5].addEventListener("click", () =>{resul = 6})
planetas_btn[6].addEventListener("click", () =>{resul = 7})
planetas_btn[7].addEventListener("click", () =>{resul = 8})
planetas_btn[8].addEventListener("click", () =>{resul = 9})


/*Array con toda la informacion de los palnetas*/
var planetas = [ 
    
     {
    "id" : " 0 " ,
    "nombre" : " Sol " ,
    "descripcion": "El Sol es una estrella de tipo-G de la secuencia principal y clase de luminosidad V que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario.​",
    "imagen" : "https://i.ibb.co/QHrC1CM/Sol.png" ,
    "características" : {
      "períodoorbital" : [ " 0 días " , " 0 años " ],
      "Velocidad orbital" : " 0 km/h " ,
      "rotación" : " 25 días 9h07min " ,
      "radio" : " 696.340 km " ,
      "Diámetro" : " 1.392.700 km " ,
      "distancia del sol" : " 0 km " ,
      "satélites" : { "número" : 0 , "nombres" : [ " 225088 Gonggong " , " 3122 Florencia " ] },
      "temperatura" : " 5.505°C "
    }
     },

     {
    "id" : " 1 " ,
    "nombre" : " Mercúrio " ,
    "imagen" : "https://i.ibb.co/LdVvcBm/Mercurio.png" ,
    "descripcion": "Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus.",
    "etiquetas de búsqueda" : [ " planeta " , " mercurio " , " menor planeta " ],
    "características" : {
      "orbitalPeriod" : [ " 87,96 días " , " 0,24 años " ],
      "velocidad orbital" : " 48,92 km/s " ,
      "rotación" : " 58 días 15h30m " ,
      "radio" : " 2.439 km " ,
      "Diámetro" : " 4.879 km " ,
      "distancia" : " 57.910.000 km " ,
      "satélites" : { "número" : 0 , "nombres" : [ " " ] },
      "temperatura" : " 167°C "
    }
   
     },

     {
    "id" : " 2 " ,
    "nombre" : " Venus " ,
    "descripcion": "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor.",
    "imagen" : "https://i.ibb.co/RjgbFYv/Venus.png" ,
    "etiquetas de búsqueda" : [ " planeta " , " venus ", "hermano de la tierra" ],
    "características" : { 
      "orbitalPeriod" : [ " 224,70 días " , " 0,61 años " ],
      "velocidad orbital" : " 35,02 km/s " ,
      "rotación" : " 243 días 18 h 00 min " ,
      "radio" : " 6.051 km " ,
      "Diámetro" : " 12,104 km " ,
      "distancia" : " 108.200.000 km " ,
      "satélites" : { "número" : 0 , "nombres" : [ " " ] },
      "temperatura" : " 461°C "
    }
     },

     {
    "id" : " 3 " ,
    "nombre" : " Tierra " ,
    "descripcion": "La Tierra es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos.",
    "imagen" : "https://i.ibb.co/jJC9Whc/Tierra.png" ,
    "etiquetas de búsqueda" : [ " La Tierra " , " tierra " ],
    "características" : {
      "orbitalPeriod" : [ " 365,26 días " , " 1 año " ],
      "velocidad orbital" : " 29,78 km/s " ,
      "rotación" : " 23h56min " ,
      "radio" : " 6.371 km " ,
      "Diámetro" : " 12.742 km " ,
      "distancia" : " 149.600.000 km " ,
      "satélites" : { "número" : 1 , "nombres" : [ " Luna " ] },
      "temperatura" : "15°C "
    }
     },

     {
    "id" : " 4 " ,
    "nombre" : " Marte " ,
    "descripcion": "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.",
    "imagen" : "https://i.ibb.co/KNwNsp5/Marte.png" ,
    "etiquetas de búsqueda" : [ " planeta  Rojo" , " marte "],
    "características" : {
      "períodoorbital" : [ " 686,97 días " , " 1,88 años " ],
      "velocidad orbital" : " 24,07 km/s " ,
      "rotación" : " 24h37min " ,
      "radio" : " 3.397 km " ,
      "Diámetro" : " 6.779 km " ,
      "distancia" : " 227.940.000 km " ,
      "satélites" : { "número" : 2 , "nombres" : [ " Fobos " , " Deimos " ] },
      "temperatura" : " -63°C "
    }
     },

     {
    "id" : " 5 " ,
    "nombre" : " Júpiter " ,
    "descripcion": "Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol. Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre del dios romano Júpiter.",
    "imagen" : "https://i.ibb.co/zQYHsSt/Jupiter.png" ,
    "etiquetas de búsqueda" : [ " Gigante Gaseoso " , " júpiter " , " mayor planeta " ],
    "características" : {
      "orbitalPeriod" : [ " 4.331,57 días " , " 11,86 años " ],
      "velocidad orbital" : " 13,05 km/s " ,
      "rotación" : " 9h50min " ,
      "radio" : " 69.911 km " ,
      "Diámetro" : " 139.820 km " ,
      "distancia" : " 778.500.000 km " ,
      "satélites" : { "número" : 79 , "nombres" : [ " Io " , " Europa " , " Ganímedes " , " Calisto " ] },
      "temperatura" : " -108°C "
    }
     },

     {
    "id" : " 6 " ,
    "nombre" : " Saturno " ,
    "descripcion": "Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos.",
    "imagen" : "https://i.ibb.co/yQVBLGR/Saturno.png" ,
    "etiquetas de búsqueda" : [ " Gigante Gaseoso " , " saturno " , " Anillos" ],
    "características" : {
      "orbitalPeriod" : [ " 10.757,74 días " , " 29,45 años " ],
      "velocidad orbital" : " 9,64 km/s " ,
      "rotación" : " 10h14min " ,
      "radio" : " 60.268 km " ,
      "Diámetro" : " 116.464 km " ,
      "distancia" : " 1.429.400.000 km " ,
      "satélites" : { "número" : 82 , "nombres" : [ " Mimas " , " Encélado " , " Tétis " , " Dione " , " Reia " , " Titan " , " Hiperião " , " Jápeto " , " Febe " ] },
      "temperatura" : " -139°C "
    }
     },

     {
    "id" : " 7 " ,
    "nombre" : " Urano " ,
    "descripcion": "Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano, el padre de Crono y el abuelo de Zeus.",
    "imagen" : "https://i.ibb.co/BLHzy50/Urano.png" ,
    "etiquetas de búsqueda" : [ " planeta " , " urano " ],
    "características" : {
      "orbitalPeriod" : [ " 30.799,10 días " , " 84,32 años " ],
      "velocidad orbital" : " 6,81 km/s " ,
      "rotación" : " 10h49min " ,
      "radio" : " 25.362 km " ,
      "Diámetro" : " 50.724 km " ,
      "distancia" : " 2.870.000.000 km " ,
      "satélites" : { "número" : 27 , "nombres" : [ " Miranda " , " Ariel " , " Umbriel " , " Titânia " , " Oberon " ] },
      "temperatura" : " -200°C "
    }
     },

     {
    "id" : " 8 " ,
    "nombre" : " Netuno " ,
    "descripcion": "Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas.",
    "imagen" : "https://i.ibb.co/YcrW9WJ/Neptuno.png" ,
    "etiquetas de búsqueda" : [ "Planeta Helado " , " Neptuno" ],
    "características" : {
      "orbitalPeriod" : [ " 60.224,90 días " , " 164,88 años " ],
      "velocidad orbital" : " 5,43 km/s " ,
      "rotación" : " 15h40min " ,
      "radio" : " 24.622 km " ,
      "Diámetro" : " 49.244 km " ,
      "distancia" : " 4.504.300.000 km " ,
      "satélites" : { "número" : 14 , "nombres" : [ " Náiade " , " Talassa " , " Despina " , " Galateia " , " Larissa " , " Hipocampo " , " Proteu " ] },
      "temperatura" : " -218°C "
    }
     },

     {
    "id" : " 9 " ,
    "nombre" : " Plutón " ,
    "descripcion": "Plutón, designado Pluto, es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno. Su nombre se debe al dios mitológico romano Plutón.",
    "imagen" : "https://i.ibb.co/MGkV6Gr/Pluton.png" ,
    "etiquetas de búsqueda" : [ " planeta Enano " , " Pluton " ],
    "características" : {
      "orbitalPeriod" : [ " 90.613,31 días " , " 248,09 años " ],
      "velocidad orbital" : " 4,66 km/s " ,
      "rotación" : " 6 días 9h17min " ,
      "radio" : " 1.160 km " ,
      "Diámetro" : " 2.376 km " ,
      "distancia" : " 5.913.520.000 km " ,
      "satélites" : { "número" : 5 , "nombres" : [ " Caronte " , " Nix " , " Hidra " , " Cérbero " , " Estige " ] },
      "temperatura" : " "
    }
     }
]


/*Una funcion de tiempo para que se actualize la informacion cuando se presiona un boton */
setInterval(function name(params) {

    img_planetas.src = planetas[resul].imagen;
    titulo.innerHTML = planetas[resul].nombre;
    descripcion.innerHTML = planetas[resul].descripcion;
    distancias.innerHTML = planetas[resul].características.distancia;
    temp.innerHTML = planetas[resul].características.temperatura;
    diametro.innerHTML = planetas[resul].características.Diámetro;
    periodo_orbital.innerHTML = planetas[resul].características.rotación;

    
},100)


/*Codigo de el apartado de las lunas*/

