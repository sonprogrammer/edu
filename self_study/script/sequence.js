function baz(){
    console.log('baz')
}
function bar(){
    console.log('bar')
}
function foo(){
    console.log('foo')
    setTimeout(bar, 0)
    baz()
}
foo()


console.log('let')
console.log('let')
console.log('let')
console.log('let')
console.log('let')
console.log('let')
console.log('let')
console.log('let', setTimeout(foo, 1000))