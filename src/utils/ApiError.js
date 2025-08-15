class ApiError extends Error{
    constructor(statuscode,message="something went wrong",error=[],statck=""){
        this.statuscode=statuscode;
        this.message=message;
        this.error=error;
        this.data=null;
        this.success=false;
        if(statck)
           { this.statck=statck;
           }
           else{
            error.captureStackTrace(this,this.constructor)
           }
    }
}
export{ApiError};