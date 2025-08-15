class ApiResponse{
    constructor(statuscode,message="success",data){
        this.statuscode=statuscode;
        this.data=data;
        this.message=messagethis.success=statuscode<400;
    }
}