function Hello(name: string | number): number {
  return name.toString().length
}

Hello(23434)

function marry(paid: number, house: boolean, charm: string): string | void {
  let score: number = 0
  score += paid
  if (house === true) {
    score += 500
  }
  if (charm === '상') {
    score += 100
  }
  if (score >= 600) {
    return '결혼가능'
  }
}
marry(300, true, '상')

type Animal = string | number | undefined

let animals: Animal = 'monkey'

function 가위바위보(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return []
}
가위바위보('가위')


var 자료 = {
    name : 'son'
} as const

function My(a: 'son'){

}

My('son')

My(자료.name)

let tag = document.getElementsByTagName('a')

for(let i = 0; i < tag.length; i++) {
    if(tag instanceof HTMLAnchorElement){
        tag.href = 'kakao.com'

    }
}
class Car{
    model : string;
    price: number;
    constructor(a: string, b: number){

        this.model = a
        this.price = b
    }
    tax() :number{
        return this.price*0.1;
    }
}


class Word{
    num;
    str;
    constructor(...params : (number | string)[]){
        let 숫자들: number[] = [];
        let 문자들: string[] = [];

        params.forEach((i)=>{
            if(typeof i === 'string'){
                문자들.push(i)
            }else{
                숫자들.push(i)
            }
        })
        this.num = 숫자들
        this.str = 문자들;
    }
}

// type Square = { color : string, width: number}


interface Square{
    color : string,
    width : number,
}

interface Item {
    brand: string,
    serialNumber: number,
    model: string[]
}


interface Cart1{
    product: string,
    price: number
}

interface NewCart extends Cart1{
    card: boolean;
}
let 장바구니: Cart1[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

