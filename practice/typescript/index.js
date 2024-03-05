// let name1 :string = 'son';
// let member : string[] = ['son']
// let members : {member1: string, member2: string} = { member1 : 'son', member2 : 'son' }
// let hi = [123]
// let maName : string = 'sonyoungjin'
// let age : number = 28
// let area : string = 'cheonan'
// let song : {singer: string , song: string} = {singer: 'son', song: 'sonyoungjin'}
// let project : {member:string[], days:number, started: boolean}
// let answer : number | string = '123'
// let answers : (number | string)[] = [1, '2', 3]
// let objects : { a : string | number} = { a : 123}
// let user: string = 'kim'
// let age1: number | undefined = undefined
// let married: boolean = false
// let school :{score:number[], teacher: string, friend:string} = {score: [100, 93,84],teacher: 'phil', friend: 'john'}
// function mul(x: number) : number{
//     return x * 2 
// }
// mul(20)
// function hello(name?: string) : void{
//     if(name){
//         console.log('hi'+name)
//     }else{
//         console.log('no name') 
//     }
// }
// function count(x: number | string) : number{
//     return x.toString().length
// }
// function marry(money: number, house: boolean, charm: string) : string | void{
//     let score : number = 0
//     score += money
//     if(house){
//         score += 500
//     }
//     if(charm === '상'){
//         score += 100
//     }
//     if(score >= 600){
//         return '결혼가능'
//     }
// }
// console.log(marry(100,true, '상'))
// function cleaning(a :(number | string)[]){
//     let cleaned : number[] =[];
//     a.forEach((b)=>{
//         if(typeof b === 'string'){
//             cleaned.push(parseFloat(b))
//         }else{
//             cleaned.push(b)
//         }
//     })
//     return cleaned
// }
// console.log(cleaning([12, '3']))
// function subject(a:{sub: string | string[]}): string{
//     if(typeof a.sub === 'string'){
//         return a.sub
//     }else if(Array.isArray(a.sub)){
//         return a.sub[a.sub.length - 1]
//     }else{
//         return 'x'
//     }
// }
// console.log(subject({sub : ['enl', 'art']}))
// type a ={
//     color?: string,
//     size: number,
//     readonly position: number[]
// }
// let test: a = {
//     size: 12,
//     position: [1, 2,3]
// }
// type b = {
//     name : string,
//     phone : string,
//     email : string
// }
// type c = {
//     adult: boolean
// }
// type Newa = b & c;
// let Memer : Newa = {
//     name : 'son',
//     phone: '010-23',
//     adult : false,
//     email: 'son@'
// }
// function rsp(a : '가위' | '바위' | '보') :('가위' | '바위' | '보')[]{
//     return ['가위']
// }
// rsp('가위')
// let 자료 = {
//      name: 'kim'
// }
// function ma(a: 'kim'){
// }
// ma('kim')
var title = document.querySelector('#title');
// if(title != null){
//     title.innerHTML = 'hello';
// }
if (title instanceof Element) {
    title.innerHTML = 'how are you';
}
var button1 = document.querySelector('#button');
if (button1 !== null) {
    button1 === null || button1 === void 0 ? void 0 : button1.addEventListener('click', function () {
        console.log('hi');
    });
}
var link = document.querySelector('#link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'http://kakao.com';
}
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = 'sonata';
        this.price = 3000;
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var Word = /** @class */ (function () {
    function Word() {
        var parms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parms[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        parms.forEach(function (i) {
            if (typeof i === 'string') {
                strings.push(i);
            }
            else {
                numbers.push(i);
            }
        });
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var obj = new Word('kim', 3, 7, 'son');
console.log(obj.num);
console.log(obj.str);
var 장바구니 = [{ item: 'vaccum', price: 3000 }, { item: 'water', price: 100 }];
var math = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
function count() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    a.map(function (i) {
        if (i > 3) {
            console.log(i);
        }
    });
}
count(1, 2, 1, 3, 4, 5);
function hey(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
