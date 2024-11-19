const menu = document.getElementById("menuAberto");
const menuFechado = document.getElementById("menuFechado");

menuFechado.addEventListener('click', ()=>{
    menu.classList.toggle('esconder')
} )



