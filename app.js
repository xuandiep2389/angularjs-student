var myApp = angular.module('myApp',[]);

myApp.controller('chartCtrl', ['$scope','$http', function ContactController($scope) {

    $scope.showGraph = true;

    $scope.toggleShowGraph = function () {
        $scope.showGraph = !$scope.showGraph;
    };


    $scope.chartData = [
        ['hai duong', 40],
        ['hai phong', 20],
        ['ha noi', 20],
        ['sai gon', 20]
    ];

    $scope.drawChart = function (chartData) {
        Highcharts.chart('myDChart', {
            chart: {
                type: 'pie'
            },
            title: {
                text: 5 + '<br>' + 'students',
                align: 'center',
                verticalAlign: 'middle',
                y: -30
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    point: {
                        events: {
                            mouseOver: function (e) {
                                this.originalRadius = this.graphic.r;
                                this.graphic.animate({
                                    r: this.originalRadius * 1.07
                                }, 200);
                            },
                            mouseOut: function (e) {
                                this.graphic.animate({
                                    r: this.originalRadius
                                }, 200);
                            }
                        }
                    }
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
                }
            },
            series: [{
                name: 'Data',
                data: chartData,
                size: '100%',
                innerSize: '70%',
                showInLegend: true,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        halo: false
                    }
                },
            }]
        });
    };

    $scope.init = function () {
        $scope.drawChart($scope.chartData);
    };

    $scope.init();
}]);

myApp.controller('listStudentCtrl',['$scope','$http', function ($scope, $http) {


    $scope.sortType = 'name'; // set the default sort type

    $scope.sortRevert = false;

    $scope.sort = function (keyname) {
        $scope.sortRevert = !$scope.sortRevert;
        $scope.sortType = keyname;
    };

    // $scope.sortUp = function(keyname) {
    //     $scope.sortRevert = true;
    //     $scope.sortType = keyname;
    // };

    $http.get('students/students.json').then(function (response) {
        $scope.students = response.data;
    });


    $scope.name = true;
    $scope.age = true;
    $scope.gender = true;
    $scope.address = false;
    $scope.phoneNum = false;

    $scope.checkAll = true;

    $scope.check = function () {
        if ($scope.checkAll) {
            $scope.name = true;
            $scope.age = true;
            $scope.gender = true;
            $scope.address = true;
            $scope.phoneNum = true;
        } else {
            $scope.name = false;
            $scope.age = false;
            $scope.gender = false;
            $scope.address = false;
            $scope.phoneNum = false;
        }
    };

    var init = function () {
        if ($scope.checkAll) {
            $scope.name = true;
            $scope.age = true;
            $scope.gender = true;
            $scope.address = true;
            $scope.phoneNum = true;
        }
    };

    init();

}]);
