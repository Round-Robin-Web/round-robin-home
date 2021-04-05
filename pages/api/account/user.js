import connectDB from '../../../middleware/mongodb';
import User from '../../../models/user';

const handler = async (req,res) => {
    if(req.method === "POST") {
        const user = {
            name : {
                first : req.body.first,
                last : req.body.last
            },
            email  : req.body.email,
            university : req.body.university,
            year : req.body.year,
            prefecture : req.body.prefecture
        };
        if(user){
            User.register(user,req.body.password,(error,user) => {
                if(user) {
                    return res.redirect('/account/login');
                }else{
                    console.log(error.message);
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