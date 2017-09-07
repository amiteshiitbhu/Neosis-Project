app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        // State managing 
         .state('/', {
             url: '/',
             templateUrl: '/App/question1.html',
             controller: 'question1Controller'
         })
        .state('q2', {
            url: '/q2',
            templateUrl: '/App/question2.html',
            controller: 'question1Controller'
        })
         .state('q3', {
             url: '/q3',
             templateUrl: '/App/question3.html',
             controller: 'question1Controller'
         })
          .state('register', {
              url: '/register',
              templateUrl: 'home/register',
              controller: 'usercontroller'
          })
          .state('users', {
              url: '/users',
              templateUrl: 'user/index',
              controller: 'usercontroller'
          })
         // nested list with data
        .state('home.template', {
            url: '/template',
            template: 'Welcome to the C# Corner'
        })

        // nested list with controller
        .state('home.list', {
            url: '/list',
            templateUrl: '/App/Test/homelist.html',
            controller: function ($scope) {
                $scope.Language = ['C#', 'VB', 'JavaScript', 'PHP'];
            }
        })

        // State with multiple views
        .state('multipleview', {
            url: '/multipleview',
            views: {
                '': { templateUrl: '/App/Test/multipleview.html' },
                'ViewOne@multipleview': { template: 'Welcome to the C# Corner!' },
                'ViewTwo@multipleview': {
                    templateUrl: '/App/Test/dataList.html',
                    controller: 'CarController'
                },
                'ViewThree@multipleview': {
                    templateUrl: '/App/Test/homelist.html',
                    controller: function ($scope) {
                        $scope.Language = ['C#', 'VB', 'JavaScript', 'PHP'];
                    }
                }

            }

        });
    //   $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
});



var AuthHttpResponseInterceptor = function ($q, $location, $injector) {
    return {
        response: function (response) {
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                console.log("error found = " + rejection);
                // $injector.get('$state').go('login', { returnUrl: $location.path() });
            }
            return $q.reject(rejection);
        }
    }
}

AuthHttpResponseInterceptor.$inject = ['$q', '$location', '$injector'];
