class Productos {
    constructor(nombre, ml, tipo, precio, stock){
        this.nombre = nombre;
        this.ml = ml;
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
    }
}

const productos = [];

const p1 = new Productos('Agua micelar', '400 ml', 'liquido', 100);
const p2 = new Productos('Agua termal', '50 ml', 'liquido', 75);
const p3 = new Productos('Corrector antimanchas', '40 ml', 'crema', 80);
const p4 = new Productos('Crema antiage', '80 ml', 'crema', 102);
const p5 = new Productos('Dermasolución ', '40 ml', 'crema', 10);
const p6 = new Productos('Crema de ojos concentrada', '50 ml', 'crema', 60);
const p7 = new Productos('Serum', '40 ml', 'liquido', 80);
const p8 = new Productos('Serum mineral', '50 ml', 'serum', 110);


productos.push(p1, p2, p3, p4, p5, p6, p7, p8);

localStorage.setItem('productos', JSON.stringify(productos));


