class ProductManager{
    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(title === "" || description === "" || price === "" || thumbnail === "" || code === "" || stock ===""){
            return console.log("Debe ingresar todos los campos requeridos!")
        }
       let existe = this.products.find((p)=>p.codigo === code)
        if(existe){
            console.log("Ya existe este codigo")
            return
        }else{
            let id = 1
            if(this.products.length>0){
                id = this.products[this.products.length-1].id +1
            }
            this.products.push({
                id: id,
                nombre: title,
                descrip: description,
                precio: price,
                img: thumbnail,
                codigo: code,
                cantidad: stock
            })
        }       
    }

    getProducts(){
        // NOTA PARA EL TUTOR: 
            // Acá en un principio quería poner:
            // return this.products
            // pero no me devolvía nada, entonces puse esta opción:
        return console.log(this.products)
    }

    getProductById(numeroId){
        let index = this.products.findIndex(p=>p.id === numeroId)
        if(index !== -1){
            // NOTA PARA EL TUTOR: 
            // Acá en un principio quería poner:
            // return this.products[index]
            // pero no me devolvía nada, entonces puse esta opción:
            return console.log(this.products[index])
        }else{
            return console.log("Not found")
        }
    }
}

let prueba1 = new ProductManager()
prueba1.addProduct("tomate", "verduleria",110,"aaa",111,3)
prueba1.addProduct("lechuga", "verduleria",110,"aaa",222,3)
prueba1.addProduct("queso", "verduleria",110,"aaa",333,3)
prueba1.addProduct("tomate", "verduleria",110,"aaa",111,3) //ejemplo en donde se repite
prueba1.getProducts()
prueba1.getProductById(2)
prueba1.getProductById(5) //ejemplo donde no existe
