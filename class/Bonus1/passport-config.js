const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        //이메일을 이용해서 사용자 찾기
        const user = getUserByEmail(email);
        //사용자 없으면 실패
        if(user === null){
            return done(null, false, {message: 'no email'})
        }
        // 비밀번호 비교 -> bcrypt사용
        try{
            if(await bcrypt.compare(password, user.password)){ //*!첫번째는 user가 적은 password, 두번째는 db에 저장되있는 해쉬된 비밀번호
                return done(null, user)
            }else{
                return done(null, false, {message: 'no password'})
            }
            // 비밀번호 틀린경우 실패
        }catch(e){
            return done(e)
        }
    };

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
    });
}

module.exports = initialize;