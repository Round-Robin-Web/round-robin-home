import connectDB from '../../../middleware/mongodb';
import User from '../../../models/user';
import passport from "passport";

const handler = async (req,res) => {
    if(req.method === "POST") {
        const {name,email,year,university} =req.body;
        if(name&&email&&year&&university){
            const user = {
                name : req.body.name,
                email  : req.body.email,
                year : req.body.year,
                university : req.body.university
            };
            User.register(user,req.body.password,(error,user) => {
                if(user) {
                    return res.redirect('/account/login');
                }else{
                    return res.redirect('/account/create');
                }
            });
        }else {
            res.status(422).send('data_incomplete')
        }
    }else {
        res.status(422).send("req_method_not_supported");
    }
}

export default connectDB(handler);