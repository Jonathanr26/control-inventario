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
var lista = document.querySelector("#listado")

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
        if(this.v1.length >= vM){
            return "Tu inventario esta lleno"
        }else{
            this.v1.push(nombre)
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
                return v1[i].producto;
            }
        }
    }

    listarP(){
        for(let i = 0; i < v1.length; i++){
            if(v1[i] !== undefined){
                let nuevoP = document.createElement('li')
                return v1[i].producto;
            }
        }
    }

}
let inventario = new Inventario;
//Agregar
btAgregar.addEventListener('click', () => {
    let newProdcuto = new Producto(codigo.value, nombre.value, descripcion.value, costo.value, cantidad.value);
    alert(inventario.agregarP(newProdcuto));
});

//Borrar
btBorrar.addEventListener('click', () => {
    function buscar(v1, codigoPro){
        let x = 0;
        for(let i = codigoPro; i < v1.length; i++){
            if(codigoPro == codigoPro.value){
                x = i+1;
            }            
        };
    }

    function borrar(v1, codigoPro){
        delete v1[codigoPro];
        for(let i = codigoPro; i < v1.length; i++){
            v1[i] = v1[i+1];
        }
        v1.length--;
        return v1;
    }

    x = buscar(v1, codigoPro);
    borrar(v1, x);

    document.getElementById("2").reset()
    console.log(v1)
})

//Buscar
btBuscar.addEventListener('click', () => {
    function buscar(v1, codigoPro){
        let x = 0;
        for(let i = codigoPro; i < v1.length; i++){
            if(codigoPro == codigoPro.value){
                x = i+1;
            }            
        };
    }
})
