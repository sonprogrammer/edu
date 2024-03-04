var name1 = 'son';
var member = ['son'];
var members = { member1: 'son', member2: 'son' };
var hi = [123];
var maName = 'sonyoungjin';
var age = 28;
var area = 'cheonan';
var song = { singer: 'son', song: 'sonyoungjin' };
var project;
var answer = '123';
var answers = [1, '2', 3];
var objects = { a: 123 };
var user = 'kim';
var age1 = undefined;
var married = false;
var school = { score: [100, 93, 84], teacher: 'phil', friend: 'john' };
function mul(x) {
    return x * 2;
}
mul(20);
function hello(name) {
    if (name) {
        console.log('hi' + name);
    }
    else {
        console.log('no name');
    }
}
function count(x) {
    return x.toString().length;
}
function marry(money, house, charm) {
    var score = 0;
    score += money;
    if (house) {
        score += 500;
    }
    if (charm === '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(marry(100, true, '상'));
function cleaning(a) {
    var cleaned = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            cleaned.push(parseFloat(b));
        }
        else {
            cleaned.push(b);
        }
    });
    return cleaned;
}
console.log(cleaning([12, '3']));
function subject(a) {
    if (typeof a.sub === 'string') {
        return a.sub;
    }
    else if (Array.isArray(a.sub)) {
        return a.sub[a.sub.length - 1];
    }
    else {
        return 'x';
    }
}
console.log(subject({ sub: ['enl', 'art'] }));
var test = {
    size: 12,
    position: [1, 2, 3]
};
var Memer = {
    name: 'son',
    phone: '010-23',
    adult: false,
    email: 'son@'
};
