var app = angular.module('landing', []);
app.controller('landingCtrl', function($scope, $http) {
	// Obtenemos el contenido del archivo test.json
	$http.get("test.json")
	.then(function(response) {

		//Seasignan los valores a las variables de scope
		$scope.headerTitle = response.data.landing.title;
		$scope.headerText = response.data.landing.text;
		$scope.items = response.data.landing.items;

	});
});

/**
* Lo que seria ajax
function loadNav() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      if(!data) {
      	 return false;
      }
      makeNavBar(data);
    }
  };
  xhttp.open("GET", "data/test.json");
  xhttp.send();

}
 */