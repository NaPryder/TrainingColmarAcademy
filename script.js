const handleDarkMode = () => {
  let body = window.document.body
  body.classList.toggle('dark')

  let btnText = document.getElementById("btn-dark").innerText
  
  document.getElementById("btn-dark").innerText = btnText == "Dark" ? 'Ligth': "Dark"
}