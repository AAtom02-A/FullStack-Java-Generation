let $btnGato = document.querySelector("#btnGato");

$btnGato.addEventListener("click", ()=>{

    //JSON CON ARREGLOS api cats
    /* function (resp) {
        return resp.json()
    }  */
    fetch("https://api.thecatapi.com/v1/images/search")
        .then( resp => resp.json()).then(data =>{
            console.log(data);
            //Agregar imagen desde JS
            let imagenGatito = document.createElement("img");
            imagenGatito.src = data[0].url;
            document.body.appendChild(imagenGatito);
        });

        
  /*  });  */

//json con message api dog
fetch("https://dog.ceo/api/breeds/image/random")
.then( resp => resp.json()).then(data =>{
    console.log(data);
    //Agregar imagen desde JS
    let imagenGatito = document.createElement("img");
    imagenGatito.src = data.message;
    document.body.appendChild(imagenGatito);
     });

});






