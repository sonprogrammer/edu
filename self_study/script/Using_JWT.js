setUserToken = (res, user) =>{
    const token = jwt.sign(user, secret); 
    //*user정보를 secret변수를 이용해 sign을 해줌으로써 jwt 토큰이 생성된다 
    res.cookie('token', token)
    //*res에 cookie함수를 사용해서 첫번째 token이라는 이름의 cookie를 
    //*위에서 생성한 두번째 token정보로 저장해줌
}
// ==> 이렇게 하면 클라이언트가 쿠키를 저장할 수 있게 응답을 보내는 기능이 구현됨