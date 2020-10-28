//Botones
var v1 = [];
var btAgregar = document.querySelector("#btAgregar");
var btBorrar = document.querySelector("#btBorrar");
var btBuscar = document.querySelector("#btBuscar");
var btListar = document.querySelector("#btListar");
var btListarIn = document.querySelector("#btListarIn");

//Inputs
var codigoPro = document.querySelector("#codigoPro");
var nombrePro = document.querySelector("#nombrePro");
var descPro = document.querySelector("#descPro");
var costoPro = document.querySelector("#costoPro");
var cantPro = document.querySelector("#cantPro");
var borrarPro = document.querySelector("#borrarPro");
var buscarPor = document.querySelector("#buscarPro");
var lista = document.querySelector("#listado");

class Producto {
  constructor(codigo, nombre, descripcion, costo, cantidad) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.costo = costo;
    this.cantidad = cantidad;
  }
  valor() {
    let cantidad = this.cantidad;
    let costo = this.costo;
    let valor = cantidad * costo;
    return valor;
  }
  articleToHtml() {
    let productString = '<li class="list-group-item">';
    for (let key in this) {
      productString += `<div><strong>${key}:</strong> ${this[key]}</div>`;
    }
    let valor_string = `<div><strong>Valor Total:</strong> ${this.valor()}</div>`;
    return productString + valor_string + "</li>";
  }
}

class Inventario {
  agregarP(nombre) {
    if (v1.length >= 19) {
      return "Tu inventario esta lleno";
    } else {
      v1.push(nombre);
      document.getElementById("form_1").reset();
      this.listaP();
      return "Se agrego el producto";
    }
  }

  borrarP(idP) {
    for (let i = 0; i < v1.length; i++) {
      if (idP == v1[i].codigo) {
        let borrado = v1[i].nombre;
        v1[i] = null;
        borrarPro.value = "";
        document.getElementById("form_2").reset();
        this.listaP();
        return borrado;
      }
    }
  }

  buscarP(idP) {
    for (let i = 0; i < v1.length; i++) {
      if (idP == v1[i].codigo) {
        lista.innerHTML = v1[i].articleToHtml();
        document.getElementById("form_1").reset();
        return v1[i].nombre;
      }
    }
  }

  listaP() {
    lista.innerHTML = "";
    for (let i = 0; i < v1.length; i++) {
      if (v1[i]) {
        lista.innerHTML += v1[i].articleToHtml();
      }
    }
  }

  listaPIn() {
    lista.innerHTML = "";
    for (let i = v1.length - 1; i >= 0; i--) {
      if (v1[i]) {
        lista.innerHTML += v1[i].articleToHtml();
      }
    }
  }
}
let inventario = new Inventario();
//Agregar
btAgregar.addEventListener("click", () => {
  let newProdcuto = new Producto(
    codigoPro.value,
    nombrePro.value,
    descPro.value,
    costoPro.value,
    cantPro.value
  );
  inventario.agregarP(newProdcuto);
  
});

//Borrar
btBorrar.addEventListener("click", () => {
  inventario.borrarP(borrarPro.value);
  
});

//Buscar
btBuscar.addEventListener("click", () => {
  inventario.buscarP(buscarPor.value);
  
});

//Lista
btListar.addEventListener("click", () => {
  inventario.listaP();
});

//Listar inverso
btListarIn.addEventListener("click", () => {
  inventario.listaPIn();
});