import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    first : {
      type : String,
      required : true
    },
    last : {
      type : String,
      required : true
    }
  },
  email: {
    type: String,
    required: true
  },
  university : {
    type : String,
    required : true
  },
  year : {
    type : Number,
    required : true
  },
  prefecture : {
    type : String,
    required : true
  }
});

userSchema.virtual("fullName").get(function(){
  return this.name.first + "_" + this.name.last
});

userSchema.plugin(passportLocalMongoose,{
    usernameField : "email"
});

mongoose.models = {};

var User = mongoose.model('User', userSchema);

export default User;