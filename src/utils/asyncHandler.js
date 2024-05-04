const asyncHandler = (requestHandler) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
}

export {asyncHandler}

//const asyncHandler =(func) => async(req,res,next) => {
//    try{
//        await func(req,res,next)
//    }catch (error){
//        res.status(err.code || 500).json({
/*            sucess:false,
            mesage: err.message
        })
    }
} */