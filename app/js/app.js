

myapp.controller('dashboardCtrl', ['$scope','Tickets','socketio', function($scope,Tickets,socketio){

	'use strict';

	$scope.tickets = Tickets.query();

	socketio.on('ticket', function(msg){
		$scope.tickets.push(msg);
	});
}]);
myapp.controller('createCtrl', ['$scope', '$location','Tickets', function($scope, $location,Tickets){

	'use strict';

	$scope.save = function(newTicket){
		
		console.log(newTicket);

		 Tickets.save(newTicket);
		 $location.path('/');
	};

	$scope.cancel= function()
	{
		$location.path('/');
	}

}]);
myapp.config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider

		.state('/',{
			url:'/',
			templateUrl:'partials/dashboard.html',
			controller: 'dashboardCtrl'
		})

		.state('new',{
			url: '/new',
			templateUrl:'partials/ticket.html',
			controller: 'createCtrl'

		})

		
});
myapp.factory('socketio', ['$rootScope', function ($rootScope) {
  //var socket = io.connect();
  var socket = io.connect('http://localhost:4000');
  

  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
}]);