import connectDB from '../../middleware/mongodb';
import User from '../../models/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { name, email, password,year,university } = req.body;
    console.log(req.body)
    if (name && email && password && year && university) {
        try {
          var user = new User({
            name,
            email,
            password,
            year,
            university
          });
          // Create new user
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);