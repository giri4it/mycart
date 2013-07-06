function HomeController($scope) {

	//alert('home controller called');

}

function LoginController($scope, $http) {

	$scope.action = function() {
		
		alert('test'+$scope.login+' '+$scope.password);
		var url = "http://localhost:8080/mycart-1.0/rest/login";

		$http({
			method : 'POST',
			headers: {'Content-Type': 'application/json'},
			url : url,
			data: {
			      "login" : $scope.login",
			      "password" : $scope.password"
			    }
		}).success(function(data, status) {
			$scope.status = status;
			$scope.data = data;
			window.alert(data);
		}).error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;
		});

	}
	
	//alert('login controller called');
}

function HomeMenuController($scope) {
	alert('home controller called');
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