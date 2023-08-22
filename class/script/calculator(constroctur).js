function Calculator(a,b){
    this.a = a;
    this.b = b;

    this.sum =(a, b)=>{
        return this.a + this.b;
    }
    this.mul =(a, b)=>{
        return this.a * this.b;
    }
    this.sub =(a, b)=>{
        return this.a - this.b;
    }
    this.div =(a, b)=>{
        return this.a / this.b;
    }
}

let math = new Calculator(2, 3);

console.log(math.sum())
console.log(math.div())
console.log(math.sub())


