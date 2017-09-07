var app = angular
       .module('app', ['ui.router']);


app.run(function ($rootScope, $state) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        //console.log("$stateChangeStart is fired");
        //console.log(event);
        //console.log(fromState);
        //console.log(fromParams);
        if (toState.name == "/") {
            $rootScope.isMenuShow = true;
        }
    });
});