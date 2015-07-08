app.controller('casesController', ['$scope', '$resource', function ($scope, $resource) {

  $scope.cases = [];
  $scope.cities = ["_", "Albrightsville", "Murillo", "Glendale", "Crown", "Crayne", "Rodman", "Baker", "Statenville", "Bennett", "Dellview", "Abrams", "Northridge", "Sehili", "Freetown", "Albany", "Herbster", "Singer", "Jacksonwald", "Draper", "Cashtown", "Thynedale", "Teasdale", "Elfrida", "Dunbar", "Ypsilanti", "Witmer", "Escondida", "Ryderwood", "Lacomb", "Blue", "Dowling", "Falmouth", "Wintersburg", "Aguila", "Edmund", "Freeburn", "Bagtown", "Dahlen", "Clay", "Beason", "Grimsley", "Dorneyville", "Ahwahnee", "Courtland", "Blackgum", "Callaghan", "Nord", "Waterloo"];
  $scope.snames = ["_","Missing Sign","Other","Dead Animal","Fallen Tree","Open Man Hole Cover","Obstructed Parking","Broken Street Lamp", "Open Fire Hydrant", "Uncollected Garbage"];
  $scope.stats = ["_","open","closed","pending"];

  $scope.city = "";
  $scope.stat = "";
  $scope.serviceName = "";

  $scope.searchCases = function () {
    var _stat = $scope.stat;
    var _city = $scope.city;
    var _sname = $scope.serviceName;
  	var cases_query = $resource('/api/cases/:s/:c/:n',{s:_stat,c:_city,n:_sname});
    cases_query.query(function (results) {
    	$scope.cases = results;
        $scope.casesresp = "Found "+ $scope.cases.length +"";
  	});
  }
}]);


