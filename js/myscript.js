const URL="https://covid19.mathdro.id/api"

let app=angular.module("MyApp",[]);


app.controller("MyCtrl",($scope,$http)=>{
    $scope.title="welcome to covid reports";
    $http.get(URL).then((response)=>{
        $scope.all_data=response.data;
    
    },(error)=>{
        console.log(error)
    });
    
    
    
    
    
    

        
        







    
    //get country data
    $scope.get_c_data=()=>{
        let country=$scope.c
        if($scope.c==''){
            $scope.c_data=undefined;
            return;
        }
        
        $http.get(`${URL}/countries/${country}`).then((response)=>{
            $scope.c_data=response.data;
            

        } ,(error)=>{
            console.log(error);
        })
        
    }
    
    
    //get news
    $scope.get_news_data=()=>{
    
        
        
        $http.get("http://newsapi.org/v2/top-headlines?q=corona&apiKey=ebc29c659d4240d08e87f6eafba82902").then((response)=>{
            $scope.ran1=Math.ceil(Math.random()*20);
            $scope.ran2=Math.ceil(Math.random()*20);
            $scope.ran3=Math.ceil(Math.random()*20);
            $scope.ran4=Math.ceil(Math.random()*20);
            $scope.article=response.data.articles;
            list=Array($scope.ran1,$scope.ran2,$scope.ran3,$scope.ran4);
            console.log(list);
            for(i=0;i<4;i++){
               
                if($scope.article[list[i]].urlToImage==null){
                    $scope.article[list[i]].urlToImage='img/corona.jpeg'
                }
            
                
            }
        
        } ,(error)=>{
            console.log(error);
        })
}
    
    $scope.get_news_data();
});




