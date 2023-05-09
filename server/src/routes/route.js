const express=require("express")
const {  Signup, Login } = require("../Controllers/userController")
const { StoreMovie } = require("../Controllers/movieController")
const router=express.Router()

router.post("/signup",Signup)
router.post("/login",Login)

// movies apis

router.post("/storemovie",StoreMovie)



module.exports=router