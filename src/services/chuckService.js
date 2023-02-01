import ApiRequest from "../utils/config/chuck.config";

export  function getRandomJoke() {
    
    return ApiRequest.get('/', { 
        validateStatus: function (status) {
            return status < 500 //Resuelve solo si el codigo status es menor a 500
        }
    }) 

}

