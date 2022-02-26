// const precio =100;
// const desc = 5;

// const precioDesc = (desc * precio)/100;
// const precioProduct = precio - precioDesc;
// console.log(precioProduct);


function precioProduct(desc,precio) {
    const precioDesc = (desc * precio)/100;
    const precioProduct = precio - precioDesc;
    return precioProduct;
}

function entradas(){
    
    const input = document.getElementById("precio");
    const precio = input.value;

    const input1 = document.getElementById("desc");
    const desc = input1.value;
    
    const precioProducto = precioProduct(desc,precio);
 
    const resultPrecio = document.getElementById("result");
    resultPrecio.innerText = `El precio del producto con descuento es: ${precioProducto}`;
}