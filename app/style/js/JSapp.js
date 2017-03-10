var varModule = angular.module('MyModule',[]);

varModule.controller('controleDonnees', function($scope){

	
	
	// $scope.donnees = [
						// {
						// "username":"julien",
						// "age":"15"
						// },
						// {
						// "username":"rémi",
						// "age":"21"
						// },
						// {
						// "username":"Pierre",
						// "age":"indéterminé"
						// },
						// {
						// "username":"Indiana",
						// "age":"osef"
						// },
						// {
						// "username":"Boulais",
						// "age":"23"
						// },
						// {
						// "username":"Adrien",
						// "age":"22"
						// }

					
					
					// ];
					
					$http.get('parcs-de-stationnement-concedes-de-la-ville-de-paris.json').then(function(response){
			$scope.donnees = response.data.records;
			
		});	
					
				}
			);
$(document).ready(function(){
      $('.carousel').carousel();
    });