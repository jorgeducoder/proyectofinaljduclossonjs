const dbIngredientes = [

    {

        nombre: "harina",
        unidad: "kg",
        familia: "harinas y otros",
        unidadprecio: "kg",
        precio: 1.27,
        moneda: "U$S",
    },
    {

        nombre: "levadura",
        unidad: "sobre",
        familia: "harinas y otros",
        unidadprecio: "sobre",
        precio: 0.8,
        moneda: "U$S",
    },
    {

        nombre: "sal",
        unidad: "paq",
        familia: "condimentos",
        unidadprecio: "paq",
        precio: 1.43,
        moneda: "U$S",
    },
    {

        nombre: "azucar",
        unidad: "kg",
        familia: "harinas y otros",
        unidadprecio: "kg",
        precio: 1.46,
        moneda: "U$S",
    },
    {

        nombre: "agua",
        unidad: "lt",
        familia: "liquidos",
        unidadprecio: "lt",
        precio: 0.83,
        moneda: "U$S",
    },
    {

        nombre: "leche",
        unidad: "lt",
        familia: "lacteos",
        unidadprecio: "lt",
        precio: 1.07,
        moneda: "U$S",
    },
    {

        nombre: "aceite",
        unidad: "lt",
        familia: "liquidos",
        unidadprecio: "lt",
        precio: 2.42,
        moneda: "U$S",
    },
    {

        nombre: "tomates",
        unidad: "kg",
        familia: "frutas y verduras",
        unidadprecio: "kg",
        precio: 1.9,
        moneda: "U$S",
    },
    {

        nombre: "tomillo",
        unidad: "atado",
        familia: "condimentos",
        unidadprecio: "atado",
        precio: 1.51,
        moneda: "U$S",
    },
    {

        nombre: "laurel",
        unidad: "paq",
        familia: "condimentos",
        unidadprecio: "paq",
        precio: 1.51,
        moneda: "U$S",
    },
    {

        nombre: "manteca",
        unidad: "paq",
        familia: "lacteos",
        unidadprecio: "paq",
        precio: 1.76,
        moneda: "U$S",
    },
    {

        nombre: "huevos",
        unidad: "doc",
        familia: "comestibles",
        unidadprecio: "doc",
        precio: 6.0,
        moneda: "U$S",
    },
    {

        nombre: "yemas huevo",
        unidad: "doc",
        familia: "comestibles",
        unidadprecio: "doc",
        precio: 6.0,
        moneda: "U$S",
    },
    {

        nombre: "vainilla",
        unidad: "frasco",
        familia: "dulces y postres",
        unidadprecio: "frasco",
        precio: 2.95,
        moneda: "U$S",
    },
    {

        nombre: "limon",
        unidad: "kg",
        familia: "frutas y verduras",
        unidadprecio: "kg",
        precio: 1.0,
        moneda: "U$S",
    },
    {

        nombre: "polvo de hornear",
        unidad: "sobre",
        familia: "harinas y otros",
        unidadprecio: "sobre",
        precio: 1.54,
        moneda: "U$S",
    },
    {
        nombre: "dulce de membrillo",
        unidad: "paq",
        familia: "dulces y postres",
        unidadprecio: "paq",
        precio: 1.51,
        moneda: "U$S",
    },

    {
        nombre: "morron rojo",
        unidad: "kg",
        familia: "verduras",
        unidadprecio: "kg",
        precio: 4.50,
        moneda: "U$S",
    },
    {
        nombre: "panceta",
        unidad: "kg",
        familia: "chacinados",
        unidadprecio: "kg",
        precio: 16.45,
        moneda: "U$S",
    },
    {
        nombre: "queso rallado",
        unidad: "kg",
        familia: "lacteos",
        unidadprecio: "kg",
        precio: 21.84,
        moneda: "U$S",
    },
    {
        nombre: "pimienta",
        unidad: "kg",
        familia: "lacteos",
        unidadprecio: "kg",
        precio: 2.00,
        moneda: "U$S",
    },
    {
        nombre: "nuez moscada",
        unidad: "uni",
        familia: "especias",
        unidadprecio: "uni",
        precio: 1.00,
        moneda: "U$S",
    },
    {
        nombre: "pan rallado",
        unidad: "kg",
        familia: "harinas y otros",
        unidadprecio: "kg",
        precio: 5.45,
        moneda: "U$S",
    },
    {
        nombre: "acelga",
        unidad: "atado",
        familia: "verduras",
        unidadprecio: "atado",
        precio: 1.47,
        moneda: "U$S",
    },
    {
        nombre: "espinaca",
        unidad: "atado",
        familia: "verduras",
        unidadprecio: "atado",
        precio: 1.47,
        moneda: "U$S",
    },
    {
        nombre: "cebollas",
        unidad: "kg",
        familia: "verduras",
        unidadprecio: "kg",
        precio: 3.40,
        moneda: "U$S",
    },

];

const dbUnidades = [

    {
        id: "kg",
        nombre: "kilogramo",
    },
    {
        id: "g",
        nombre: "gramo",
    },
    {
        id: "ml",
        nombre: "mililitro",
    },
    {
        id: "uni",
        nombre: "unidad",
    },
    {
        id: "rama",
        nombre: "rama",
    },
    {
        id: "hoja",
        nombre: "hoja",
    },
    {
        id: "frasco",
        nombre: "frasco",
    },
    {
        id: "sobre",
        nombre: "sobre",
    },
    {
        id: "paq",
        nombre: "paquete",
    },
    {
        id: "lt",
        nombre: "litro",
    },
    {
        id: "atado",
        nombre: "atado",
    },
    {
        id: "docena",
        nombre: "docena",
    },
];


const dbUnidadesequiv = [

    {
        unidadA: "kg",
        unidadB: "g",
        ingrediente: "todos",
        conversion: 1000
    },
    {
        unidadA: "lt",
        unidadB: "ml",
        ingrediente: "todos",
        conversion: 1000
    },
    {
        unidadA: "doc",
        unidadB: "uni",
        ingrediente: "todos",
        conversion: 12
    },
    {
        unidadA: "kg",
        unidadB: "uni",
        ingrediente: "tomate",
        conversion: 8
    },
    {
        unidadA: "kg",
        unidadB: "uni",
        ingrediente: "cebollas",
        conversion: 10
    },
    {
        unidadA: "atado",
        unidadB: "g",
        ingrediente: "tomillo",
        conversion: 30
    },
    {
        unidadA: "paq",
        unidadB: "hoja",
        ingrediente: "laurel",
        conversion: 30
    },
    {
        unidadA: "paq",
        unidadB: "g",
        ingrediente: "manteca",
        conversion: 200
    },
    {
        unidadA: "frasco",
        unidadB: "ml",
        ingrediente: "vainilla",
        conversion: 100
    },
    {
        unidadA: "kg",
        unidadB: "uni",
        ingrediente: "limon",
        conversion: 10
    },
    {
        unidadA: "sobre",
        unidadB: "g",
        ingrediente: "polvo de hornear",
        conversion: 100
    },
    {
        unidadA: "paq",
        unidadB: "g",
        ingrediente: "dulce de membrillo",
        conversion: 500
    },
    {
        unidadA: "sobre",
        unidadB: "g",
        ingrediente: "levadura",
        conversion: 10
    },
    {
        unidadA: "paq",
        unidadB: "g",
        ingrediente: "sal",
        conversion: 500
    },
    {
        unidadA: "kg",
        unidadB: "uni",
        ingrediente: "morron rojo",
        conversion: 4
    },
    {
        unidadA: "sobre",
        unidadB: "g",
        ingrediente: "pimienta",
        conversion: 25
    },
];

const dbRecetas = [
    {

        nombre: "Pizza",
        porciones: 8,
        recetadesc: "Como se mezclan los ingredientes"
    },
    {

        nombre: "Pascualina",
        porciones: 8,
        recetadesc: "Como se mezclan los ingredientes"
    },
    {

        nombre: "Pasta Frola",
        porciones: 8,
        recetadesc: "Como se mezclan los ingredientes"
    },
];

// para ingresar cabezal de una receta nueva cuando importo de JSON

class NuevasRecetas {
    constructor(nombre, porciones, recetadesc) {
        this.nombre = nombre;
        this.porciones = porciones;
        this.recetadesc = recetadesc;
    }
};




const dbIngRecetas = [
    {
        idreceta: "Pizza",
        iding: "harina",
        canting: 0.5,
        unidading: "kg",

    },
    {
        idreceta: "Pizza",
        iding: "levadura",
        canting: 20,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "sal",
        canting: 15,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "azucar",
        canting: 5,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "agua",
        canting: 125,
        unidading: "ml",

    },
    {
        idreceta: "Pizza",
        iding: "leche",
        canting: 125,
        unidading: "ml",

    },
    {
        idreceta: "Pizza",
        iding: "aceite",
        canting: 80,
        unidading: "ml",

    },
    {
        idreceta: "Pizza",
        iding: "tomates",
        canting: 0.4,
        unidading: "kg",

    },
    {
        idreceta: "Pizza",
        iding: "tomillo",
        canting: 5,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "laurel",
        canting: 3,
        unidading: "hoja",

    },


    {
        idreceta: "Pascualina",
        iding: "harina",
        canting: 0.46,
        unidading: "kg",

    },
    {
        idreceta: "Pascualina",
        iding: "polvo de hornear",
        canting: 40,
        unidading: "g",

    },
    {
        idreceta: "Pascualina",
        iding: "huevos",
        canting: 10,
        unidading: "uni",

    },
    {
        idreceta: "Pascualina",
        iding: "manteca",
        canting: 40,
        unidading: "g",

    },
    {
        idreceta: "Pascualina",
        iding: "aceite",
        canting: 50,
        unidading: "ml",

    },
    {
        idreceta: "Pascualina",
        iding: "agua",
        canting: 150,
        unidading: "ml",

    },
    {
        idreceta: "Pascualina",
        iding: "acelga",
        canting: 2,
        unidading: "atado",

    },
    {
        idreceta: "Pascualina",
        iding: "espinaca",
        canting: 4,
        unidading: "atado",

    },
    {
        idreceta: "Pascualina",
        iding: "cebollas",
        canting: 2,
        unidading: "uni",

    },
    {
        idreceta: "Pascualina",
        iding: "morron rojo",
        canting: 1,
        unidading: "uni",
    },

    {
        idreceta: "Pascualina",
        iding: "panceta",
        canting: 50,
        unidading: "g",
    },

    {
        idreceta: "Pascualina",
        iding: "queso rallado",
        canting: 100,
        unidading: "g",
    },

    {
        idreceta: "Pascualina",
        iding: "sal",
        canting: 5,
        unidading: "g",
    },

    {
        idreceta: "Pascualina",
        iding: "pimienta",
        canting: 5,
        unidading: "g",
    },

    {
        idreceta: "Pascualina",
        iding: "nuez moscada",
        canting: 1,
        unidading: "uni",
    },

    {
        idreceta: "Pascualina",
        iding: "pan rallado",
        canting: 50,
        unidading: "g",
    },
    {
        idreceta: "Pasta Frola",
        iding: "manteca",
        canting: 150,
        unidading: "g",
    },
    {
        idreceta: "Pasta Frola",
        iding: "azucar",
        canting: 150,
        unidading: "g",
    },
    {
        idreceta: "Pasta Frola",
        iding: "huevos",
        canting: 1,
        unidading: "uni",
    },
    {
        idreceta: "Pasta Frola",
        iding: "yemas huevo",
        canting: 2,
        unidading: "uni",
    },
    {
        idreceta: "Pasta Frola",
        iding: "vainilla",
        canting: 5,
        unidading: "ml",
    },
    {
        idreceta: "Pasta Frola",
        iding: "limon",
        canting: 1,
        unidading: "uni",
    },
    {
        idreceta: "Pasta Frola",
        iding: "harina",
        canting: 0.32,
        unidading: "kg",
    },
    {
        idreceta: "Pasta Frola",
        iding: "polvo de hornear",
        canting: 5,
        unidading: "g",
    },
    {
        idreceta: "Pasta Frola",
        iding: "dulce de membrillo",
        canting: 350,
        unidading: "g",
    },
];



let opcion
let botonIr = document.getElementById("ir");
let trueOrFalse = true;

let modalListado;
let closeModal;


// defino variables para poner visible parrafo y cajas
let verpReceta;
let vertReceta;
let verPorcentaje;
let vernPorcentaje;

// seteo la receta de sesion anterior 
iReceta.value = localStorage.getItem("receta")


botonIr.addEventListener("click", menu);

// URL para importar recetas

const url = "./recetas.json"

// variable que controla importar el JSON solo una vez por sesion
let importado = "false"



function cerrarmodal() {
    //alert("entre a novisible")
    closeModal = document.getElementById("close");
    modalListado = document.getElementById("modal");
    closeModal.onclick = function () {
        modalListado.style.visibility = "hidden";
    }

}

function visiblemodal() {
    //alert("entre a visible")

    modalListado = document.getElementById("modal");
    modalListado.style.visibility = "visible";
    closeModal = document.getElementById("close");
    closeModal.style.visibility = "visible";

}


function menu() {
    // saco el while porque al trabajar con el DOM no se necesita

    opcion = document.getElementById("iOpcion").value;
    switch (opcion) {
        case "1":
            lingredientes();
            break;
        case "2":
            lunidades();
            break;
        case "3":
            lunidadesrel();
            break;
        case "4":
            lingreceta();
            break;
        case "5":
            lrecetas();
            break;
        case "6":
            vcostoreceta();
            break;
        case "7":
            expreceta();
            break;
        case "8":
            impreceta();
            break;
        default:

            let contenedor = document.getElementById("titulos");
            contenedor.innerHTML = "<h2><br> No has elegido una opción válida</h2><br>";
            let detalle = "";
            document.getElementById("detalle").innerHTML = detalle;
            break;
    }
    cerrarmodal();
    visiblemodal();
}


function lingredientes() {
    let ingredientes = "";
    dbIngredientes.forEach((ing) => {
        ingredientes += ing.nombre + "    " + ing.unidad + "    " + ing.precio + "<br><br>";
    });

    let contenedor = document.getElementById("titulos")
    contenedor.innerHTML = "<h2><br> Lista de ingredientes disponibles</h2><br><p>Se lista el nombre, la unidad de empaquetado y precio en U$S </p><br>"

    let detalle = ingredientes
    document.getElementById("detalle").innerHTML = detalle
}

function lunidades() {
    let unidades = "";

    dbUnidades.forEach((uni) => {
        unidades += uni.id + "     " + uni.nombre + "<br><br>";
    });

    let contenedor = document.getElementById("titulos")
    contenedor.innerHTML = "<h2><br> Lista de unidades de medida</h2><br><p>Se lista el codigo y el nombre</p><br>"
    let detalle = unidades
    document.getElementById("detalle").innerHTML = detalle

}

function lunidadesrel() {
    let unidadesrel = "";

    dbUnidadesequiv.forEach((uni) => {
        unidadesrel += uni.unidadA + "       " + uni.conversion + "   " + uni.unidadB + "   " + uni.ingrediente + "<br><br>";
    });

    let contenedor = document.getElementById("titulos")
    contenedor.innerHTML = "<h2><br> Lista de unidades de uso, envasado y su equivalencia.</h2><br><p>Se lista UnidadA == UnidadB y factor de conversion</p><br>"
    let detalle = unidadesrel
    document.getElementById("detalle").innerHTML = detalle
}

function lingreceta() {
    // Dada una receta lista sus ingredientes.
    // Se muestra la ultima receta consultada, y si la cambia se guarda en
    // localstorage la nueva receta consultada.
    // Uso de sugar

    let unareceta;

    unareceta = document.getElementById("iReceta").value;

    TrabajarConLocalStorage(unareceta)

    let ingredientesDeReceta = "";
    let ingrecetaEncontrada = dbIngRecetas.filter(
        (elm) => elm.idreceta === unareceta
    );
     
    // SUGAR AQUI
    
    (ingrecetaEncontrada.length > 0) ? ingrecetaEncontrada.forEach((elm) => 
                     {ingredientesDeReceta += elm.iding + "   " + elm.canting + "   " + elm.unidading + "<br><br>";}) : alert("La receta no existe");
     
    let contenedor = document.getElementById("titulos")
    contenedor.innerHTML = "<h2><br> Lista de los ingredientes de una receta. </h2><br><p>Se lista el ingrediente, su cantidad y unidad necesarias.</p><br>";
    //alert("receta encontada " + ingredientesDeReceta);
    let detalle = ingredientesDeReceta;
    document.getElementById("detalle").innerHTML = detalle;
}

function TrabajarConLocalStorage(punareceta) {
    // Guarda en LocalStorage la ultima receta consultada si no es la misma que la ya existente.

    if (punareceta !== localStorage.getItem("receta")) {
        localStorage.setItem("receta", punareceta)
    }
}

function lrecetas() {
    let recetas = "";

    dbRecetas.forEach((receta) => {
        recetas += receta.nombre + "       " + receta.porciones + "  " + receta.recetadesc + "<br><br>";
    });

    let contenedor = document.getElementById("titulos")
    contenedor.innerHTML = "<h2><br> Lista de recetas disponibles</h2><br><p>Se lista el nombre, las porciones y como prepararla.n</p><br>"
    let detalle = recetas;
    document.getElementById("detalle").innerHTML = detalle

}


function vcostoreceta() {
    /* Funcion que calcula el costo de una receta y da la opcion de calcular un precio de venta a partir de un porcentaje expresado con un entero.
    Si encuentra la receta en el objeto llama a la funcion buscarprecio de un ingrediente, unidad y cantidad.*/

    var mostrarprecioreceta = 0;
    let porcentajeGanancia
    let costo = {pcosto: 0};
    let venta = {pventa: 0};


    let contenedor = document.getElementById("titulos")

    contenedor.innerHTML = `<h2><br> Calculo de costo y precio de venta de una receta</h2><br>
                            <p>Se muestra el costo calculado y si se ingresa un porcentaje el precio de venta</p><br>`


    let unareceta = document.getElementById("iReceta").value;
    let ingrecetaEncontrada = dbIngRecetas.filter(
        (elm) => elm.idreceta === unareceta
    );
    
    if (ingrecetaEncontrada.length > 0) {
        ingrecetaEncontrada.forEach((elm) => {

            mostrarprecioreceta = mostrarprecioreceta + (buscarprecio(elm.iding, elm.unidading, elm.canting));

        });



        let detalle = "<br><br>El precio de costo en U$S es" + " " + mostrarprecioreceta.toFixed(2) + "<br></br>";
        document.getElementById("detalle").innerHTML = detalle;

        // Aqui busco la receta, muestro sus atributos mas el precio  
        let recetaEncontrada = dbRecetas.filter(
            (elm) => elm.nombre === unareceta
        );
       // console.log(...recetaEncontrada);
        costo.pcosto = mostrarprecioreceta.toFixed(2);
        let recetacosto = { ...recetaEncontrada, ...costo };
        console.log(recetacosto)
        detalle += "<br></br>" + recetacosto[0].nombre + recetacosto[0].porciones + recetacosto[0].recetadesc + costo.pcosto + "<br></br>";
        document.getElementById("detalle").innerHTML = detalle;
       
        
        porcentajeGanancia = document.getElementById("iGanancia").value;

        if (porcentajeGanancia > 0) {

            let precioventa = mostrarprecioreceta * (1 + (porcentajeGanancia / 100));
            detalle += "<br></br>El precio de venta en U$S es" + " " + precioventa.toFixed(2) + "<br></br>";
            document.getElementById("detalle").innerHTML = detalle;

        } else {
            detalle += "<br>No se calculara precio de venta<br><br>";
            document.getElementById("detalle").innerHTML = detalle;
        }
    } else {

        detalle = "<br><br>La receta no existe<br><br>";
        document.getElementById("detalle").innerHTML = detalle;
    }


}


function buscarprecio(pingrediente, punidad, pcanting) {
    /* Funcion que recibe cada ingrediente, unidad y cantidad de una receta para calcular el costo de la misma.
    El ingrediente en una receta puede tener una unidad de medida distinta a la unidad de su precio, 
    por lo que si no encuentra el precio en la misma unidad, busca en el array equivalencias para ver si hay una conversion y asi calcular el costo,
    Hay equivalencias en relacion uno a uno, y hay equivalencias una a varios ingredientes. */

    var precioreceta = 0
    var cantidadconequivalencia = 0;
    let ingredienteencontrado = dbIngredientes.filter(
        (elm) => elm.nombre === pingrediente
    );
    if (ingredienteencontrado.length === 1) {

        if (ingredienteencontrado[0].unidadprecio === punidad) {

            precioreceta = (pcanting * ingredienteencontrado[0].precio);

        } else {
            let equivalenciaencontrada = dbUnidadesequiv.filter(
                (elm) => elm.unidadA === ingredienteencontrado[0].unidadprecio && elm.unidadB === punidad && elm.ingrediente === pingrediente
            );
            if (equivalenciaencontrada.length === 1) {

                cantidadconequivalencia = pcanting / equivalenciaencontrada[0].conversion;
                precioreceta = (ingredienteencontrado[0].precio * cantidadconequivalencia);

            } else {
                let equivalenciaencontrada = dbUnidadesequiv.filter(
                    (elm) => elm.unidadA === ingredienteencontrado[0].unidadprecio && elm.unidadB === punidad && elm.ingrediente === "todos");
                if (equivalenciaencontrada.length === 1) {

                    cantidadconequivalencia = pcanting / equivalenciaencontrada[0].conversion;

                    precioreceta = (ingredienteencontrado[0].precio * cantidadconequivalencia);

                } else {
                    alert("No se encontro una equivalencia, no se calcula el costo para ese ingrediente" + "  " + pingrediente)
                }
            }
        }
        return precioreceta
    } else {
        alert("Ingredientes repetidos o no existe en array ingredientes" + "  " + pingrediente);
        return 0;
    }
}

function expreceta() {
    const recetastring = JSON.stringify(dbIngRecetas);
    console.log(recetastring)

    let contenedor = document.getElementById("titulos")
    contenedor.innerHTML = "<h2><br> Recetas a exportar</h2><br><p> Archivo de texto plano con todas las recetas.</p><br>"
    let detalle = recetastring;
    document.getElementById("detalle").innerHTML = detalle


}

function impreceta() {
    //const recetastring = JSON.stringify(dbIngRecetas);
   // console.log(recetastring)

   fetch(url)
   .then(res => res.json())
   .then(recetas => GuardarenDB(recetas))
}

function GuardarenDB(recetas) {
    let mismareceta = "";
    let ingreceta = {};
    let idnuevareceta;
   
 //   console.log(recetas);
//alert("importado")
if (importado === "false") {
    recetas.forEach(ingrediente => {
          dbIngRecetas.push(ingrediente)
          //console.log(ingrediente.idreceta)
          idnuevareceta = ingrediente.idreceta
          
        })
        if (dbRecetas.includes(idnuevareceta)){
            // Si ingrese la receta en dbRecetas no hago nada
            alert("no inclui dbrecetas porque ya esta incluida")
      } else {
        
        let nuevareceta = new NuevasRecetas(idnuevareceta, 1, "Como se mezclan los ingredientes")
       
        //console.log(nuevareceta);
        dbRecetas.push(nuevareceta);
        //alert("inclui" + nuevareceta)
        importado = "true"
        let contenedor = document.getElementById("titulos")
        contenedor.innerHTML = "<h2><br> Recetas importadas</h2><br><p> Archivo JSON con las recetas e ingredientes importados.</p><br>"
        let detalle = JSON.stringify(nuevareceta);
        document.getElementById("detalle").innerHTML = detalle
      } 
}else{
        alert("Las recetas ya fueron importadas")
}

}