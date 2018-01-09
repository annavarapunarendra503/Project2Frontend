app.factory('UserService',function($http)
{
	
	var  BASSE_URL="http://localhost:8010/Project2Backend";
	
    var usersService={}
    
    usersService.registerUser = function(user){
    	
    	console.log(user)
    	return $http.post(BASSE_URL +"/registration",user)
    }
    
    usersService.login=function(user){
    	return $http.post(BASSE_URL +"/login",user)
    }
 


usersService.logout=function(user){
	return $http.get(BASSE_URL +"/logout",user)

}
/*
userService.login=function(user){
	return $http.post(BASSE_URL +"/home",user)
}*/

    
return usersService;
})