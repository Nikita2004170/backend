const asynchandler=(fun)=>
    async(req,res,next)=>{
        try{
        await fun(req,res,next);
        }
        catch(err){
            res.status(err.code||500).json({
                status:fail,
                message:err.message
            })
        }
    }