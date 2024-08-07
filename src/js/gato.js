const contenedor = document.getElementsByClassName("contenedor")

    for (let index = 0; index < contenedor.length; index++) {

        contenedor[index].addEventListener("click", function () {
            if (contenedor[index].textContent === "") {
                
            contenedor[index].textContent = "X";
        
      
            let lista = []

            for (let index = 0; index < contenedor.length; index++) {

                if (contenedor[index].textContent === "") {

                    lista.push(contenedor[index])
                  
                }
            }
            
                if (lista.length > 0) {

                    let numeroAleatorio = Math.floor(Math.random()*lista.length);

                    lista[numeroAleatorio].textContent = "O"
    
                }
            }    
            
            const victoria = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8], 
                [0, 4, 8],
                [2, 4, 6]
            ]; 

          
           

        })
    }
   
