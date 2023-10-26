function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adiciona a imagem light
    img.setAttribute("scr", "./assets/danilo-light.png")
  } else {
    //se não tiver light mode, adiciona a imagem normal
    img.setAttribute("scr", "./assets/danilo.png")
  }
}

// Atenção:
// coloquei o código "onclick" na linha 21 do html (switch)
// linkei o html do js na linha 63 do html
