
// 배달 서비스.

const user = {
    //객체 속성 + 기능
    //user 배달을 시키는 고객 정보
    name : '손영진',
    age : 27,
    email : 'ods04138@gmail.com',
    address : '천안시',
    food : ['김치찌개', '제육볶음'],

    payment : function(){
        console.log("결제가 완료 되었습니다!")
        return this.deliverystart();
    },

    deliverystart: function(){
        console.log("배달이 시작되었습니다!")
    }
}
user.payment();
user.deliverystart();
// module.exports = user;

console.log(user.name);
console.log(user.age);
console.log(user);
console.log(user.food[0]);
console.log(user.food[1]); //food두번째음식에 접근




