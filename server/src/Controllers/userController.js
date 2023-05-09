const UserModel =require("../Models/userModel")

exports.Signup=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const CheckEmailid=await UserModel.findOne({email})
        if(CheckEmailid) return res.status(400).json({message:"EmailId is Already Register"})
        const UserData=await UserModel.create(req.body)
        return res.status(201).json({data:UserData,message:"User Signup Successfully"})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}
exports.Login=async(req,res)=>{
    try{
        const{email,password}=req.body
        const CheckUser=await UserModel.findOne({email,password})
        if(!CheckUser)return res.status(400).json({message:"Email/Password is not correct"})
        return res.status(200).json({data:CheckUser,message:"Login successfully"})

    }catch(err){
        return res.status(500).json({error:err.message})
    }
}