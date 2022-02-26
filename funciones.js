const PI = Math.PI;

function pcuadrado  () {
    const input = document.getElementById("cuad");
    const value = input.value;
    const perimetro = value * 4;
    alert(perimetro);
}

function acuadrado () {
    const input = document.getElementById("cuad");
    const value = input.value;
    const area = value * value;
    alert(area);
}

function ptriangulo () {
    const input = document.getElementById("tri1");
    let lado1 = Number(input.value);
    const input2 = document.getElementById("tri2");
    let lado2 = Number(input2.value);
    const input3 = document.getElementById("bas");
    let base = Number(input3.value);
    let perimetro = lado1 + lado2 + base;
    alert(perimetro);
}

function atriangulo () {
    const input = document.getElementById("bas");
    const base = input.value;
    const input2 = document.getElementById("alt");
    const altura = input2.value;
    const area = (base * altura)/2;
    alert(area);
}

function pcirculo () {
    const input = document.getElementById("cir");
    const radio = input.value;
    const perimetro = (radio * 2)* PI;
    alert(perimetro);
}

function acirculo () {
    const input = document.getElementById("cir");
    const radio = input.value;
    const area = (radio * radio)* PI;
    alert(area);
}

function visosceles () {
    const input = document.getElementById("lad1");
    const lado1 = input.value;
    const input2 = document.getElementById("lad2");
    const lado2 = input2.value;
    const input3 = document.getElementById("lad3");
    const lado3 = input3.value;
    
    if ((lado1 != "") && (lado2 !="") && (lado3 !="")) {
        if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3))
            return true;
    } else {
        alert("Debe llenar los campos");
    } 
}

function hisosceles () {
    const verificar = visosceles();
    if (verificar) {
        const input = document.getElementById("lad1");
        const lad1 = input.value;
        const input2 = document.getElementById("lad2");
        const lad2 = input2.value;
        const input3 = document.getElementById("lad3");
        const lad3 = input3.value;
        const altura = Math.sqrt((lad1 * lad1)-((lad3 * lad3)/4));
        alert(altura);
    }else {
        alert("NO Es isosceles");
    }
}
