let seed = [
    { id: 1, nombre: "Carbon", precio: 20 },
    { id: 2, nombre: "Carne", precio: 21 },
    { id: 3, nombre: "Mistol", precio: 22 }
]

let products = null;

export default function getproducts() {
    // if (products)
    //     return products;
    // if (!global._products) {
    //     products = seed;
    //     global._products = products;
    // } else {
    //     products = global._products;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!products)
        products = seed;

    return products;
}
