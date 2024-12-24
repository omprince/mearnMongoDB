class ApiResponce{
    constructor(statusCode, data, message="Success"){
        this.statusCode = statusCode
        this.data = data
        this.meassage = message
    }
}