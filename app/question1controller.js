app.controller("question1Controller", function ($scope, $http) {
    $scope.checkPrime = function (num) {

        $scope.isPrimeNumber = "";
        if (num && num > 1) {
            $scope.isPrimeNumber = "" + num + " is not Prime Number";
            if (num == 2) {
                $scope.isPrimeNumber = ""+num+" is Prime Number";
            }
            var flag = 0;
            for (var i = 2; i <= num / 2; i++) {
                if (num % 2 == 0) {
                    flag = 1;
                    return;
                }

                if (flag == 0) {

                    $scope.isPrimeNumber = "Input is Prime Number";
                }

            }

        }
    }
    $scope.checkPalindrom = function (num) {
        $http.post("url", num).then(function (res) {

        })
    }

    $scope.checkFibonacciSeries = function (num) {
        if (num) {
            var str = "";
            var t2 = 1;
            var nextTurm = 0;
            var i = 0
            for (var t1 = 0; t1 <= num;) {
                if (i == 0) { str += "" + t1; }
                else { str += " , " + t1; }
                nextTurm = t2 + t1;
                t1 = t2;
                t2 = nextTurm;
                i++;


            }
            $scope.fibonacciSeries = str;
        }
    }
})