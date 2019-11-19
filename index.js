function buscar(){
   let input, filtro, li, a, ul, textValue;
   input = document.getElementById("myInput");
   filtro = input.value.toUpperCase();
   ul = document.getElementById("lista");
   li = ul.getElementsByTagName("li");
   for (let i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      textValue = a.textContent || a.innerText;
      if (textValue.toUpperCase().indexOf(filtro) > -1) {
         li[i].style.display = '';
      }
      else{
         li[i].style.display = 'none';
      }
   }
}
