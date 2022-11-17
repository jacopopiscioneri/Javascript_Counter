let add = document.getElementById('plus');
let remove = document.getElementById('minus');
let counter = document.getElementById('number');
let reset = document.getElementById('reset');
let integer = 0;
add.addEventListener('click', function increment(){
  integer +=1;
  counter.innerHTML = integer;
})
remove.addEventListener('click', function decrement(){
  integer -=1;
  counter.innerHTML = integer;
})
reset.addEventListener('click', function reset(){
    integer = 0;
    counter.innerHTML = integer;
})
