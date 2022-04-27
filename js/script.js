const icon = document.querySelector('i')
const html = document.querySelector('html')
const btn = document.querySelector('.btn')
const ulStars = document.querySelector('ul')
const container = document.querySelector('.container')

icon.addEventListener('click', () => {
  if(html.classList[0] == undefined){
    html.classList.add('active')
  }else if(html.classList[0] == 'active'){
    html.classList.remove('active')
  }
})

const fields = [...document.querySelectorAll('.input')]
btn.addEventListener('click', event => {
  event.preventDefault()
  fields.forEach(field => {
    if(field.value == ''){   
      container.classList.add('validate-error')
      field.style.border = '0.5px solid red'
    }else{
      container.classList.add('form-hide')
      setTimeout(() => {
        window.location.reload()
      },1500)
    }
    field.addEventListener('keyup', () => {
      if(field.value !== ''){
        field.style.border = '2px solid black'
      }
    })
    container.addEventListener('animationend', event => {
      if(event.animationName == 'nono'){
        container.classList.remove('validate-error')
      }
    })
  })
})


for(i = 0; i < 31; i++){
  const li = document.createElement('li')  

  const random = (min, max) => Math.random() * (max - min) + min
  const size = Math.floor(random(1, 8))
  const position = Math.floor(random(1, 99))
  const delay = random(5, 0.1)
  const duration = random(1, 5)


  li.style.width = `${size}px`
  li.style.height = `${size}px`
  li.style.borderRadius = `${size/2}px`
  li.style.bottom = `-${size}px`
  li.style.left = `${position}%`
  li.style.animationDelay = `${delay}s`
  li.style.animationDuration = `${duration}s`

  ulStars.appendChild(li)
}

