var myApp = angular.module('myApp',['ui']);

myApp.controller('chartCtrl', ['$scope','$http', function ContactController($scope, $http) {


    $scope.sortType = 'name'; // set the default sort type

    $scope.sortReverse = false;

    // $scope.sort = function (keyname) {
    //     $scope.sortReverse = !$scope.sortReverse;
    //     $scope.sortType = keyname;
    //     console.log($scope.sortReverse)
    // };

    $scope.sortDown = function (keyname) {
        $scope.sortReverse = true;
        $scope.sortType = keyname;
    };

    $scope.sortUp = function(keyname) {
        $scope.sortReverse = false;
        $scope.sortType = keyname;
    };

    

    // toggle filter on table
    $scope.showFilterName = true;
    $scope.toggleFilterName = function(){
       $scope.showFilterName = !$scope.showFilterName;
    };

    $scope.showFilterAge = true;
    $scope.toggleFilterAge = function(){
        $scope.showFilterAge = !$scope.showFilterAge;
    };

    $scope.showFilterGender = true;
    $scope.toggleFilterGender = function(){
        $scope.showFilterGender = !$scope.showFilterGender;
    };

    $scope.showFilterAddress = true;
    $scope.toggleFilterAddress = function(){
        $scope.showFilterAddress = !$scope.showFilterAddress;
    };

    $scope.showFilterPhoneNum = true;
    $scope.toggleFilterPhoneNum = function(){
        $scope.showFilterPhoneNum = !$scope.showFilterPhoneNum;
    };


    // calculate data and draw chart
    $scope.calculateData = function(){

        $http.get('students/students.json').then(function (response) {
            $scope.students = response.data;
        
        $scope.chartData = [];
        // calculate data input for pie chat
        let saigonPer, hanoiPer, haiduongPer, haiphongPer;

        let saigonCount = 0;
        let hanoiCount = 0;
        let haiphongCount = 0;
        let haiduongCount = 0;

        let province = ['Hai duong', 'Hai phong', 'Ha noi', 'Sai gon'];
        let provincePer = [];




        for (let i = 0; i < $scope.students.length; i++) {
            switch ($scope.students[i].address) {
                case 'Hai phong':
                    haiphongCount++;
                    break;
                case 'Hai duong':
                    haiduongCount++;
                    break;
                case 'Ha noi':
                    hanoiCount++;
                    break;
                case 'Sai gon':
                    saigonCount++;
            }
        }

        haiduongPer = Math.round((haiduongCount / $scope.students.length) * 100);
        // console.log(haiduongPer);
        haiphongPer = Math.round((haiphongCount / $scope.students.length) * 100);
        // console.log(haiphongPer);
        hanoiPer = Math.round((hanoiCount / $scope.students.length) * 100);
        // console.log(hanoiPer);
        saigonPer = Math.round((saigonCount / $scope.students.length) * 100);
        // console.log(saigonPer);
        provincePer.push(haiduongPer);
        provincePer.push(haiphongPer);
        provincePer.push(hanoiPer);
        provincePer.push(saigonPer);
        // console.log(provincePer);

        for (let j = 0; j < province.length; j++) {
            $scope.chartData.push([province[j], provincePer[j]])
        }

            $scope.drawChart($scope.chartData);
            $scope.studentsData = $scope.students;

    });
    };



    $scope.name = true;
    $scope.age = true;
    $scope.gender = true;
    $scope.address = true;
    $scope.phoneNum = true;

    $scope.nameModal;
    $scope.ageModal;
    $scope.genderModal;
    $scope.addressModal;
    $scope.phoneNumModal;
    $scope.checkAllModal;

    $scope.getModalStatus = function () {
        console.log($scope.nameModal);

        $scope.name = $scope.nameModal;
        $scope.age = $scope.ageModal;
        $scope.gender = $scope.genderModal;
        $scope.address =  $scope.addressModal;
        $scope.phoneNum = $scope.phoneNumModal;
        if ($scope.checkAllModal) {
            $scope.name = true;
            $scope.age = true;
            $scope.gender = true;
            $scope.address = true;
            $scope.phoneNum = true;
        }
    };

    $scope.initCollumn = function(){
        $scope.nameModal = $scope.name;
        $scope.ageModal = $scope.age;
        $scope.genderModal = $scope.gender;
        $scope.addressModal = $scope.address;
        $scope.phoneNumModal = $scope.phoneNum;
        if ($scope.nameModal === true && $scope.ageModal===true && $scope.genderModal===true && $scope.addressModal===true && $scope.phoneNumModal===true ) {
            $scope.checkAllModal = true;
        }
    };

    $scope.initCollumn();

    // $scope.checkAll = true;

    // $scope.check = function () {
    //     if ($scope.checkAll) {
    //         $scope.name = true;
    //         $scope.age = true;
    //         $scope.gender = true;
    //         $scope.address = true;
    //         $scope.phoneNum = true;
    //     } else {
    //         $scope.name = false;
    //         $scope.age = false;
    //         $scope.gender = false;
    //         $scope.address = false;
    //         $scope.phoneNum = false;
    //     }
    // };
    //
    // var init = function () {
    //     if ($scope.checkAll) {
    //         $scope.name = true;
    //         $scope.age = true;
    //         $scope.gender = true;
    //         $scope.address = true;
    //         $scope.phoneNum = true;
    //     }
    //
    // };
    //
    // init();


    //show hide chart
    $scope.showGraph = true;

    $scope.toggleShowGraph = function () {
        $scope.showGraph = !$scope.showGraph;
    };


    // $scope.chartData = [
    //     ['hai duong', 40],
    //     ['hai phong', 20],
    //     ['ha noi', 20],
    //     ['sai gon', 20]
    // ];

    //draw chart function
    $scope.drawChart = function (chartData) {
        Highcharts.chart('myDChart', {
            chart: {
                type: 'pie'
            },
            title: {
                text: $scope.students.length + '<br>' + 'students',
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
        $scope.calculateData();



    };

    $scope.init();


    // change table data when click `ok`
    $scope.changeStudentsDataName = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilterName();
    }

    $scope.changeStudentsDataAge = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilterAge();
    }

    $scope.changeStudentsDataGender = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilterGender();
    }

    $scope.changeStudentsDataAddress = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilterAddress();
    }

    $scope.changeStudentsDataPhone = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilterPhoneNum();
    };


    $scope.getAllStudentByName = function (name) {
        let filter=[];
        for (let i = 0; i < $scope.students.length; i++) {
            if (name === $scope.students[i].name) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        console.log($scope.studentsData);
        $scope.toggleFilterName();
    }

    $scope.getAllStudentByAge = function (age) {
        let filter=[];
        for (let i = 0; i < $scope.students.length; i++) {
            if (age === $scope.students[i].age) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        console.log($scope.studentsData);
        $scope.toggleFilterAge();
    }

    $scope.getAllStudentByGender = function (gender) {
        let filter=[];
        for (let i = 0; i < $scope.students.length; i++) {
            if (gender === $scope.students[i].gender) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        console.log($scope.studentsData);
        $scope.toggleFilterGender();
    }

    $scope.getAllStudentByAddress = function (address) {
        let filter=[];
        for (let i = 0; i < $scope.students.length; i++) {
            if (address === $scope.students[i].address) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        console.log($scope.studentsData);
        $scope.toggleFilterAddress();
    }

    $scope.getAllStudentByPhoneNum = function (phone) {
        let filter=[];
        for (let i = 0; i < $scope.students.length; i++) {
            if (phone === $scope.students[i].phoneNum) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        console.log($scope.studentsData);
        $scope.toggleFilterPhoneNum();
    }


}]);

