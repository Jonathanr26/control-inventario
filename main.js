//Botones
var v1 = [];
var vM = 19;
var btAgregar = document.querySelector('#btAgregar');
var btBorrar = document.querySelector('#btBorrar');
var btBuscar = document.querySelector('#btBuscar');
var btListar = document.querySelector('#btListar');
var btListarIn = document.querySelector('#btListarIn');

//Inputs
var codigoPro = document.querySelector('#codigoPro');
var nombrePro = document.querySelector('#nombrePro');
var descPro = document.querySelector('#descPro');
var costoPro = document.querySelector('#costoPro');
var cantPro = document.querySelector('#cantPro');
var borrarPro = document.querySelector('#borrarPro');
var buscarPor = document.querySelector('#buscarPro');
var lista = document.querySelector("#listado");

class Producto{
    constructor(codigo, nombre, descripcion, costo, cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.costo = costo;
        this.cantidad = cantidad;
    }
    valor(){
        let cantidad = this.cantidad;
        let costo = this.costo;
        let valor = cantidad * costo;
        return valor
    }
}

class Inventario{
    constructor(){
    }
    agregarP(nombre){
        if(v1.length >= 19){
            return "Tu inventario esta lleno"
        }else{
            v1.push(nombre)
            return "Se agrego el producto"
        }
    }

    borrarP(idP){
        for(let i = 0; i < v1.length; i++){
            if(idP == v1[i].codigo){
                let borrado = v1[i].nombre;
                v1.splice(i, 1);
                return borrado;
            }
        }
    }

    buscarP(idP){
        for(let i = 0; i < v1.length; i++){
            if(idP == v1[i].codigo){
                return v1[i].nombre;
            }
        }
    }

    listarP(){
        for(let i = 0; i < v1.length; i++){
            if(v1[i] !== undefined){
                let nuevoP = document.createElement('li');
                nuevoP.textContent = '${i}: ${v1[i].nombre}'
                lista.appendChild(nuevoP)
            }
        }
    }

    listaPIn(){
        for(let i = v1.length -1; i >= 0; i--){
            if(v1[i] !== undefined){
                let nuevoP = document.createElement('li');
                nuevoP.textContent = `${i}: ${v1[i].nombre}`
                lista.appendChild(nuevoP)
            }
        }
    }

}
let inventario = new Inventario();
//Agregar
btAgregar.addEventListener('click', () => {
    let newProdcuto = new Producto(codigoPro.value, nombrePro.value, descPro.value, costoPro.value, cantPro.value);
    alert(inventario.agregarP(newProdcuto));
});

//Borrar
btBorrar.addEventListener('click', () => {
    alert(inventario.borrarP(codigoPro.value));
})

//Buscar
btBuscar.addEventListener('click', () => {
    alert(inventario.buscarP(codigoPro.value));
})

//Lista
btListar.addEventListener('click', () => {
    console.log(inventario.listaP());
})

//Listar inverso
btListarIn.addEventListener('click', () => {
    inventario.listaPIn();
})
console.log(inventario);
