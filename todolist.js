const da_input=document.querySelector('input');
const the_button=document.querySelector('button');
const la_liste=document.querySelector('ul');

the_button.addEventListener("click", function(){
    const newListItem = document.createElement('li');
    newListItem.textContent = da_input.value;
    la_liste.appendChild(newListItem);
})


