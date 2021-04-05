import passport from 'passport';
import User from '../models/user';

passport.initialize();
passport.session();
passport.use(User.createSttategy());


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());