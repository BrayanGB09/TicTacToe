const contenedor = document.getElementsByClassName("contenedor")
const texto = document.getElementById("texto")


    for (let index = 0; index < contenedor.length; index++) {
      
        contenedor[index].addEventListener("click", function () {
           
            if (contenedor[index].textContent === "") {
                
            contenedor[index].textContent = "🪄"

      
            let lista = []

            for (let index = 0; index < contenedor.length; index++) {

                if (contenedor[index].textContent === "") {

                    lista.push(contenedor[index])
                  
                }
            }
            
                if (lista.length > 0) {

                    let numeroAleatorio = Math.floor(Math.random()*lista.length);

                    lista[numeroAleatorio].textContent = "☠️"
    
                }    
            }

                if (contenedor[0].textContent === "🪄" && contenedor[1].textContent === "🪄" && contenedor[2].textContent === "🪄") {
                    texto.textContent = "¡Has Ganado!"

                } else {
                
                    if (contenedor[3].textContent === "🪄" && contenedor[4].textContent === "🪄" && contenedor[5].textContent === "🪄") {
                        texto.textContent = "¡Has Ganado!"

                    }
                }
            
                if (contenedor[6].textContent === "🪄" && contenedor[7].textContent === "🪄" && contenedor[8].textContent === "🪄") {
                    texto.textContent = "¡Has Ganado!"
                    
                } else {
                    
                    if (contenedor[0].textContent === "🪄" && contenedor[3].textContent === "🪄" && contenedor[6].textContent === "🪄") {
                        texto.textContent = "¡Has Ganado!"

                    }
                }
            
                if (contenedor[1].textContent === "🪄" && contenedor[4].textContent === "🪄" && contenedor[7].textContent === "🪄") {
                    texto.textContent = "¡Has Ganado!"
                
                } else {
                
                    if (contenedor[2].textContent === "🪄" && contenedor[5].textContent === "🪄" && contenedor[8].textContent === "🪄") {
                        texto.textContent = "¡Has Ganado!"

                    }
                }

                if (contenedor[0].textContent === "🪄" && contenedor[4].textContent === "🪄" && contenedor[8].textContent === "🪄") {
                    texto.textContent = "¡Has Ganado!"
            
                } else {
                
                    if (contenedor[2].textContent === "🪄" && contenedor[4].textContent === "🪄" && contenedor[6].textContent === "🪄") {
                        texto.textContent = "¡Has Ganado!"

                    }
                }


                if (contenedor[0].textContent === "☠️" && contenedor[1].textContent === "☠️" && contenedor[2].textContent === "☠️") {
                    texto.textContent = "¡Has Perdido"

                } else {
                
                    if (contenedor[3].textContent === "☠️" && contenedor[4].textContent === "☠️" && contenedor[5].textContent === "☠️") {
                        texto.textContent = "¡Has Perdido!"

                    }
                }
        
                if (contenedor[6].textContent === "☠️" && contenedor[7].textContent === "☠️" && contenedor[8].textContent === "☠️") {
                    texto.textContent = "¡Has Perdido!"
                
                } else {
                
                    if (contenedor[0].textContent === "☠️" && contenedor[3].textContent === "☠️" && contenedor[6].textContent === "☠️") {
                        texto.textContent = "¡Has Perdido!"

                    }
                }
        
                if (contenedor[1].textContent === "☠️" && contenedor[4].textContent === "☠️" && contenedor[7].textContent === "☠️") {
                    texto.textContent = "¡Has Perdido!"
            
                } else {
                
                    if (contenedor[2].textContent === "☠️" && contenedor[5].textContent === "☠️" && contenedor[8].textContent === "☠️") {
                        texto.textContent = "¡Has Perdido!"

                    }
                }

                if (contenedor[0].textContent === "☠️" && contenedor[4].textContent === "☠️" && contenedor[8].textContent === "☠️") {
                    texto.textContent = "¡Has Perdido!"
        
                } else {
                
                    if (contenedor[2].textContent === "☠️" && contenedor[4].textContent === "☠️" && contenedor[6].textContent === "☠️") {
                        texto.textContent = "¡Has Perdido!"
                
                    }
                }  
        })
    }
    
    
