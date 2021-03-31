import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
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
  since: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;