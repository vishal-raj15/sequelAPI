const db = require('../models');
const Authors = db.authors;

const addAuthor = async (req, res) => {
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
      author: req.body.author,
      book: req.body.book,
      totalpages: req.body.totalpages,
    };

    console.log( " here is the info -------------------------", "id :",req.body.id," ", info);
  
    // save user in the database
    try {
      const author = await Authors.create(info);
      res.status(200).send(author);
      console.log(' new user created ', author);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error occurred while creating the user",
      });
    }
  };


const getAuthors = async (req, res) => {
    try {
      const authors = await Authors.findAll({
        attributes: ["id", "author", "book", "totalpages"],
      });
      if (authors) {
        res.json({
          success: 1,
          data: authors,
        });
      }
    } catch (error) {
      console.log(' error in getting the authors !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1', error);
    }
  };

const updateAuthor = async ( req , res) => {
    const id = req.params.id;

    const { author , book, totalpages} = req.body;

    try{
      const instance = await Authors.findOne({ where : { id}});
      await instance.update({ author , book, totalpages});

      res.status(200).send('Update successful');
    }catch(err){
      res.status(500).send(err.message);
    }

}

const deleteAuthor = async (req , res) => {
  const { id }= req.body;

  try{
    const author = await Authors.destroy({ where : {id}});
    if(!author){
      return res.json({
        success: 0,
        message: " No author found or exist ! ",
      });
    }
    else {
      return res.json({
        success: 1,
        message: " author successfully deleted!! ",
      });
    }
  }catch (error) {
    console.log("error in geting user !! ", error);
  }
}

const getById = async (req , res) => {
  const id = req.params.id;
  const { author , book, totalpages} = req.body;

  try{
    const instance = await Authors.findOne({ where : { id}});
    if (instance) {
      res.json({
        success: 1,
        data: instance,
      });
    }
    else{
      res.status(400).send({
        message: "id doesn't exists!",
      });
      return;
    }
  }catch(err){
    console.log(" id dont exist ", err);
  }
}

module.exports = {
    addAuthor,
    getAuthors,
    updateAuthor,
    deleteAuthor,
    getById,
  };