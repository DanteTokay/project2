const baton = document.querySelector('button');
let numberLi =1;
let nrToBold =1;
const addLi = function(){
  numberLi +=2;
 //  nrToBold ++;
  const newLi = document.createElement('li');
  newLi.textContent=numberLi;

    //if(nrToBold ==3)
    if(numberLi%3==0){
      newLi.classList.add('bold');
        //nrToBold=0;
    } ;

    document.querySelector('ul').appendChild(newLi);
  // console.log('działa');
 }



baton.addEventListener('click', addLi);
