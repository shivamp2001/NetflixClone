const MovieModel = require("../Models/movieModel");

exports.StoreMovie = async(req, res) => {
  try {
    const{}=req.body
    const MovieData=await MovieModel.create(req.body)
    return res.status(201).json({data:MovieData})
  } catch (err) {
    return res.status(500).json({error:err.message})
  }
};
