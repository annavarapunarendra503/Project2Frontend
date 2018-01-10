app.factory('JobService',function($http){
	var jobService={}
	jobService.createJob=function(job)
	{
		console.log("job service")
		return $http.post("http://localhost:8010/Project2Backend/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8010/Project2Backend/getalljobs")
	}
	
	jobService.getJobById=function(id){
        console.log(id)
        return $http.get("http://localhost:8010/Project2Backend/getjobbyid/"+id)
    }
	
	return jobService;
})
