const contenedor = document.getElementsByClassName("contenedor")

    for (let index = 0; index < contenedor.length; index++) {

        contenedor[index].addEventListener("click", function () {

            contenedor[index].innerHTML = "X";
            
            
            let lista = []

            for (let index = 0; index < contenedor.length; index++) {

                if (contenedor[index].textContent === "") {

                    lista.push(index)
                  
                }
               
            }

            let numeroAleatorio = Math.floor(Math.random()*lista.length);

            let contenido = lista[numeroAleatorio]
    
           contenedor[contenido].innerHTML = "O"  
        })

    }




