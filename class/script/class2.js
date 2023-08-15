let age = 25; 



let score = 10;
function category(score){
switch(score){
    case 100:
    console.log('A')
    break;
    case 80:
        console.log('b')
    break;

    case 60:
        console.log('c')
    break;
    default:
    console.log('d')
    break
}
}

console.log(category(100))