const asyncHandler = (requestHandler)=>{(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
}}

export { asyncHandler }


// const asyncHandler = (fn)=> async ()=>{}

/*
This is the try catch async await handler

const asyncHandlers = (fn) => async (req,res,next) => {
    try{
         await fn(req,res,next)
    }catch(error){
        res.status(err.code || 500).json({
            status : false,
            message : err.message
        })
    }
}
*/