import passport from 'passport';


export default function authentication() {
    passport.authenticate("local",{
        failureRedirect : "account/login",
        successRedirect : "/account/mypage"
    })
}