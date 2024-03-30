const User = require("../Models/user")

const entry = async(request,response) =>{
    try{
        const {name,email,gender,course,year,branch,contactNumber} = request.body
        
        const existingUser = await User.findOne({email:email})
        if(existingUser){
            return response.status(403).json({
                success:false,
                message:"Already registered with this email id"
            })
        }

        if(!name || !email ||!gender ||!course ||!year ||!branch||!contactNumber){
            return response.status(401).json({
                success : false,
                message :"All fields required",
            })  
        }
        const user = await User.create({
            name:name,
            email:email,
            sex:gender,
            course:course,
            branch:branch,
            contactNumber:contactNumber,
            year:year
        })
        console.log(user)

        console.log("User Entry in Database is succesfull")

        return response.status(200).json({
            success:true,
            message:"User Data Insertion in database is successfull"    
        })
    }
    catch(error){
        response.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
}

module.exports = { entry }