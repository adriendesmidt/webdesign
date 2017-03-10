var varModule = angular.module('MyModule',[]);


varModule.controller('controleDonnees', function($scope, $http){
	
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
					
					$http.get('style/js/liste-des-cafes-a-un-euro.json').then(function(response){
					$scope.donnees = response.data;
					console.log("testa");
					/* for (i=0; i<$scope.donnees.length;i++){
						console.log("test"+i);
						$("noms").append("<div> id='nom"+i+"' class='col s12'>"+$scope.donnees[i].fields.nom_du_cafe+"</div>");
						$("adresses").append("<div> id='adresse"+i+"' class='col s12'>"+$scope.donnees[i].fields.adresse+"</div>");
					} */

					
		});	
					
				}
			);

			
			