const myImage = document.getElementById("trocaImg")


function trocaImagem(){

  if(myImage.style.opacity == 0){

    myImage.style.opacity = 1
  }
  else{
    myImage.style.opacity = 0
  }

}

setInterval( () => {
   trocaImagem()
},4000)








