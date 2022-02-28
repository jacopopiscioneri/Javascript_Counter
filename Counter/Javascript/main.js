let add = document.getElementById('plus');
let remove = document.getElementById('minus');
let counter = document.getElementById('number');
let integer = 0;
add.addEventListener('click', function(){
  integer +=1;
  counter.innerHTML = integer;
})
remove.addEventListener('click', function(){
  integer -=1;
  counter.innerHTML = integer;
})
