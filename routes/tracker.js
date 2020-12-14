const express=require("express");
const router=express.Router();
const fetch=require("node-fetch")

router.get("/profile/:platform/:gamertag",async (req,res,next)=>{
    const platform=req.params.platform;
    const gamertag=req.params.gamertag;
    try {
        const headers={
            'TRN-Api-Key':process.env.TRACKER_API_KEY
        }

        const response=await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,{headers:headers})
        const data=await response.json();
        if(data.errors && data.errors.length>0){
           return res.status(404).json({message:"Profile Not Found May User ` s profile is private."})
        }
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports=router;