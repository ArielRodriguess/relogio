function carregar() {
  let msg = window.document.querySelector('.msg')
  let foto = window.document.querySelector('.foto')
  let data = new Date()
  let hora = data.getHours()
  let min = data.getMinutes()
  let seg = data.getSeconds()
  setTimeout(carregar, 1000)
  msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
  if (hora >= 0 && hora < 6) {
  foto.style.backgroundImage = "url('./images/noite.jpg')"
  document.body.style.backgroundColor = "#0E0EAC"
} else if (hora < 12) {
  foto.style.backgroundImage = "url('./images/manha.jpg')"
  document.body.style.backgroundColor = "#DDCF82"
} else if (hora < 18) {
  foto.style.backgroundImage = "url('./images/tarde.png')"
  document.body.style.backgroundColor = "#FE840B"
} else {
  foto.style.backgroundImage = "url('./images/noite.jpg')"
  document.body.style.backgroundColor = "#0E0EAC"
}
}