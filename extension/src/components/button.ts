export const insertButton = (fn: (e: MouseEvent) => any) => {
  const button = document.createElement('button')
  button.textContent = 'Скачать'
  button.style.cursor = 'pointer'
  button.style.backgroundColor = 'white'
  button.style.height = '70px'
  button.style.paddingLeft = '15px'
  button.style.paddingRight = '15px'
  button.style.borderRadius = '15px'
  button.style.border = '2px solid black'
  button.style.fontWeight = 'bold'
  button.style.position = 'fixed'
  button.style.zIndex = '10000'
  button.style.top = '100px'
  button.style.right = '100px'
  button.onclick = fn

  document.body.appendChild(button)
}
