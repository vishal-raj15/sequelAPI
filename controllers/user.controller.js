const db = require('../models');
const Users = db.users;

const addUser = async (req, res) => {
    // validate request

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }


  
    // create a user
    let info = {
    id:req.body.id,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    console.log( " here is the info -------------------------", "id :",req.body.id," ", info);
  
    // save user in the database
    try {
      const user = await Users.create(info);
      res.status(200).send(user);
      console.log(' new user created ', user);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error occurred while creating the user",
      });
    }
  };


const getUsers = async (req, res) => {
    try {
      const users = await Users.findAll({
        attributes: ["id", "username", "email"],
      });
      if (users) {
        res.json({
          success: 1,
          data: users,
        });
      }
    } catch (error) {
      console.log(' error in getting the users !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1', error);
    }
  };

const updateUser = async ( req , res) => {
    const id = req.params.id;

    const { username , email} = req.body;

    try{
      const instance = await Users.findOne({ where : { id}});
      await instance.update({ username , email});

      res.status(200).send('Update successful');
    }catch(err){
      res.status(500).send(err.message);
    }

}

const deleteUser = async (req , res) => {
  const { id }= req.body;

  try{
    const user = await Users.destroy({ where : {id}});
    if(!user){
      return res.json({
        success: 0,
        message: " No user found or exist ! ",
      });
    }
    else {
      return res.json({
        success: 1,
        message: " user successfully deleted!! ",
      });
    }
  }catch (error) {
    console.log("error in geting user !! ", error);
  }
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser,
  };