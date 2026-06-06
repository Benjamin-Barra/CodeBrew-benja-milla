const cafes = [
    {
        id:1,
        nombre: "Espresso",
        precio: 2500,
        imagen: "./imgs/espresso.jpg"
    },
    {
        id:2,
        nombre: "Americano",
        precio: 4900,
        imagen: "./imgs/americano.jpg"
    },
    {
        id:3,
        nombre: "Macchiato",
        precio: 5900,
        imagen: "./imgs/macchiato.jpg"
    },
    {
        id:4,
        nombre: "Cortado",
        precio: 3500,
        imagen: "./imgs/cortado.jpg"
    },
    {
        id:5,
        nombre: "Flat White",
        precio: 5700,
        imagen: "./imgs/flat white.jpg"
    },
    {
        id:6,
        nombre: "Capuccino",
        precio: 4500,
        imagen: "./imgs/capuccino.jpg"
    },
    {
        id:7,
        nombre: "Latte",
        precio: 5000,
        imagen: "./imgs/latte.jpg"
    },
    {
        id:8,
        nombre: "Mocha",
        precio: 5900,
        imagen: "./imgs/mocha.jpg"
    },
    {
        id:9,
        nombre: "Iced Latte",
        precio: 5400,
        imagen: "./imgs/iced latte.jpg"
    }

];

let carrito = []
const catalogo = document.getElementById("productosCatalogo");
const contenedorCarrito = document.querySelector(".productos");

function menu() {
    catalogo.innerHTML = "";
    cafes.forEach(cafe =>  {

        catalogo.innerHTML += `
            <div class="cafe">
                <div class="imagenes">
                    <img src="${cafe.imagen}" alt="${cafe.nombre}">
                </div>

                <div class="boton">
                    <strong>${cafe.nombre}</strong>
                    <span>$${cafe.precio}</span>

                    <button onclick="agregar(${cafe.id})">
                        Agregar
                    </button>
                </div> 

            </div>
        
        `;
    });

}

function agregar(id) {
    const cafe = cafes.find(cafe => cafe.id === id);
    carrito.push(cafe);

    actualizar();
}

function actualizar(){
    contenedorCarrito.innerHTML = "";
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <div class="items vacio">
                <span>Tu orden esta vacia</span>
            </div>
        `;

        return;
    }

    let total = 0;
    carrito.forEach(cafe => {
        total += cafe.precio;

        contenedorCarrito.innerHTML += `
            <div class="items">
                <span>${cafe.nombre}</span>
                <span>$${cafe.precio}</span>
            </div>
        `;

    });

    /* mini ayuda IA*/

    let descuento = 0;
    if (total > 10000) {
        descuento = total * 0.10;
    }

    const totalFinal = total - descuento;

    contenedorCarrito.innerHTML += `
        <hr>
        <p>Subtotal: $${total}</p>
        <p>Descuento: $${descuento}</p>
        <h2>Total: $${totalFinal}</h2>
    `;

}


menu()
actualizar()