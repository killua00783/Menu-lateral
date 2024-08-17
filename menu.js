
var menuitem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuitem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuitem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//expandir menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})