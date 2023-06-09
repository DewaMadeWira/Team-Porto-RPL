const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry)
  if(entry.target.classList.contains("hidden-right")){
      if(entry.isIntersecting){
          entry.target.classList.add('show-right')
      }
      else{
          entry.target.classList.remove('show-right')
      }
  }
  if(entry.target.classList.contains("hidden-left")){
      if(entry.isIntersecting){
          entry.target.classList.add('show-left')
      }
      else{
          entry.target.classList.remove('show-left')
      }
  }
  if(entry.target.classList.contains("hidden-vertical")){
      if(entry.isIntersecting){
          entry.target.classList.add('show-vertical')
      }
      else{
          entry.target.classList.remove('show-vertical')
      }
  }

  })
})
const hiddenElements = document.querySelectorAll('.hidden-right')
const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
const hiddenElementsVertical = document.querySelectorAll('.hidden-vertical')
hiddenElements.forEach((el)=> observer.observe(el))
hiddenElementsLeft.forEach((el)=> observer.observe(el))
hiddenElementsVertical.forEach((el)=> observer.observe(el))