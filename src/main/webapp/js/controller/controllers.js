function HomeController($scope, $http) {

	//alert('home controller called');
	var url = "/rest/category/roots";
	$http({
		method : 'GET',
		headers: {'Content-Type': 'application/json'},
		url : url
	}).success(function(data, status) {
		$scope.status = status;
		$scope.rootCategories = data;
		//alert(data.result);
	}).error(function(data, status) {
		$scope.data = data || "Request failed";
		$scope.status = status;
	});

}

function LoginController($scope, $http) {

	$scope.action = function() {
		
		//alert('login controller action called');
		//alert('credentials - '+$scope.login+' '+$scope.password);
		var url = "/rest/loginservice/login";
		var data = {};
		data.login = $scope.login;
		data.password = $scope.password;
		$http({
			method : 'POST',
			headers: {'Content-Type': 'application/json'},
			url : url,
			data: data
		}).success(function(data, status) {
			$scope.status = status;
			$scope.data = data;
			//alert(data.result);
		}).error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;
		});

	}
	
	
}

function HomeMenuController($scope) {
	//alert('home controller called');
}

function RegistrationController($scope, $http) {

	$scope.register = function() {
		var url = "rest/register";
		var postData = {
			"userName" : $scope.userName,
			"password" : $scope.password
		};
		alert("user Name "+ $scope.userName);
		var config = {};
		$http.post(url, postData, config
		).success(function(data, status, header, config) {
			alert("success"+status);
			$scope.status = status;
			$scope.data = data;
			window.alert(data.Success);
		}).error(function(data, status, header, config) {
			alert("error"+status);
			$scope.data = data || "Request failed";
			$scope.status = status;
		});
	}
}