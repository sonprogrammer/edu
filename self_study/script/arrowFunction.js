// let age = 123;

// let welcome = (age < 18) ?
//   () => console.log('안녕') :
//   () => console.log("안녕하세요!");

// welcome();


let group

group ={
    class: '1반',
    students: ['a', 'b', 'c'],

    showList(){
        group.students.forEach((student)=>{
            console.log(this.class + ': ' + student)
        })
    }
}
group.showList();