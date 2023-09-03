// const me = {
//     name: 'Jimmy'
//   };
  
//   function changeName(person) { //callee
//     person.name = 'Joo';
//     console.log(me) //Joo
//   }
  
//   console.log(me); // { name: 'Jimmy' }
  
//   changeName(me); //caller
  
//   console.log(me); // { name: 'Joo' }

const me = {
  name: 'Jimmy'
};
  
function changeName(person) { //callee
    person = { name: 'Joo' };
    console.log(me)
  }
  
  console.log(me); // { name: 'Jimmy' }
  
  changeName(me); //caller
  
  console.log(me); // 정답은?? jimmy