

function Hello(name: string | number) :number{
    return name.toString().length;
}

Hello(23434)

function marry(paid: number, house: boolean, charm: string) : string|void{
    let score: number = 0;
    score += paid;
    if(house === true){
        score += 500;
    }
    if(charm === '상'){
        score += 100;
    }
    if(score >= 600){
        return '결혼가능'
    }
}
marry(300, true, '상')

type Animal = string | number | undefined


let animals : Animal = 'monkey'

