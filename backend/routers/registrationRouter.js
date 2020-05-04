const router = require('express').Router();
const User = require('../models/user.model');

router.route('/addUser').post((req, res) => {
   const { email, name, age = '', city = '', password } = req.body;

   User.findOne({ email }, (_, user) => {
      if (user) {
         return res
            .status(409)
            .json({ message: 'Пользователь уже существует' });
      } else {
         const newUser = new User({ email, name, age, city, password });
         newUser
            .save()
            .then(() => {
               res.status(200).json({ message: 'Пользователь создан' });
            })
            .catch((err) => res.status(400).json({ message: err }));
      }
   });
});

module.exports = router;
