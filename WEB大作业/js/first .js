let topnav=document.querySelector('.topnav')
window.onscroll=function(sco){
  if(window.scrollY>0)
  {
    topnav.classList.add('sticky')
  }
  else
  {
    topnav.classList.remove('sticky')

  }
}