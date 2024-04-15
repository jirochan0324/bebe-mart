const header_search = document.getElementById('search');
const search_display_id = document.getElementById('search_display');
const search_display = document.querySelector('.main__search--display')


header_search.addEventListener("focus",function(){
  search_display_id.style.display = "block"
  document.body.style.overflow = "hidden"
  // search_display_id.classList.add('search__close')
})

header_search.addEventListener("blur",function(){
  search_display_id.classList.add('search__close')
  setTimeout(() => {
    search_display_id.style.display = "none"
  search_display_id.classList.remove('search__close')
  }, 400)
  document.body.style = ""
})

