const buttom_next = document.getElementById('bottom-next')
const buttom_back = document.getElementById('bottom-back')
const span_error = document.getElementById('span-error')

let page = window.location.pathname[21]

console.log(page)
buttom_back.addEventListener('click', (e) => {
   e.preventDefault()
   if (page === "1") {
      span_error.className = 'error'
      span_error.innerHTML = 'Error. Última página alcançada'
      return
   }
   page--
   window.location.href = `/src/html/pages/page-${page}.html`
})

buttom_next.addEventListener('click', (e) => {
   e.preventDefault()
   if (page === "7") {
      span_error.className = 'error'
      span_error.innerHTML = 'Error. Última página alcançada'
      return
   }
   page++
   window.location.href = `/src/html/pages/page-${page}.html`
})

