let menu = document.querySelector('#menu-bars')
    header = document.querySelector('header')


menu.onclick=()=>{
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}
