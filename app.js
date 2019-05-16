var myApp = angular.module('myApp',['ui']);

myApp.controller('chartCtrl', ['$scope', '$http', function ContactController($scope, $http) {


    $scope.sortType = 'name'; // set the default sort type

    $scope.sortReverse = false;

    // $scope.sort = function (keyname) {
    //     $scope.sortReverse = !$scope.sortReverse;
    //     $scope.sortType = keyname;
    //     console.log($scope.sortReverse)
    // };

    $scope.isSortDownName = false;
    $scope.isSortDownAge = false;
    $scope.isSortDownGender = false;
    $scope.isSortDownAddress = false;
    $scope.isSortDownPhoneNum = false;
    $scope.isSortUpName = false;
    $scope.isSortUpAge = false;
    $scope.isSortUpGender = false;
    $scope.isSortUpAddress = false;
    $scope.isSortUpPhoneNum = false;

    $scope.sortDownName = function (keyname) {
        $scope.sortReverse = true;
        $scope.sortType = keyname;

        $scope.isSortDownName = true;

        //when one sort is true, all other become false
        $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };

    $scope.sortUpName = function (keyname) {
        $scope.sortReverse = false;
        $scope.sortType = keyname;

        $scope.isSortUpName = true;

        $scope.isSortDownName = false;
        $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        // $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };

    //change color when click on sort age
    $scope.sortDownAge = function (keyname) {
        $scope.sortReverse = true;
        $scope.sortType = keyname;

        $scope.isSortDownAge = true;

        //when one sort is true, all other become false
        $scope.isSortDownName = false;
        // $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };

    $scope.sortUpAge = function (keyname) {
        $scope.sortReverse = false;
        $scope.sortType = keyname;

        $scope.isSortUpAge = true;

        $scope.isSortDownName = false;
        $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        // $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };

    //change color button when click sort gender
    $scope.sortDownGender = function (keyname) {
        $scope.sortReverse = true;
        $scope.sortType = keyname;

        $scope.isSortDownGender = true;

        //when one sort is true, all other become false
        $scope.isSortDownName = false;
        $scope.isSortDownAge = false;
        // $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };

    $scope.sortUpGender = function (keyname) {
        $scope.sortReverse = false;
        $scope.sortType = keyname;

        $scope.isSortUpGender = true;

        $scope.isSortDownName = false;
        $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        // $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };

    //change color button when click sort address

    $scope.sortDownAddress = function (keyname) {
        $scope.sortReverse = true;
        $scope.sortType = keyname;

        $scope.isSortDownAddress = true;

        //when one sort is true, all other become false
        $scope.isSortDownName = false;
        $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        // $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };

    $scope.sortUpAddress = function (keyname) {
        $scope.sortReverse = false;
        $scope.sortType = keyname;

        $scope.isSortUpAddress = true;

        $scope.isSortDownName = false;
        $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        // $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };


    //change color button when click sort phone

    $scope.sortDownPhoneNum = function (keyname) {
        $scope.sortReverse = true;
        $scope.sortType = keyname;

        $scope.isSortDownPhoneNum = true;

        //when one sort is true, all other become false
        $scope.isSortDownName = false;
        $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        // $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        $scope.isSortUpPhoneNum = false;
    };

    $scope.sortUpPhoneNum = function (keyname) {
        $scope.sortReverse = false;
        $scope.sortType = keyname;

        $scope.isSortUpPhoneNum = true;

        $scope.isSortDownName = false;
        $scope.isSortDownAge = false;
        $scope.isSortDownGender = false;
        $scope.isSortDownAddress = false;
        $scope.isSortDownPhoneNum = false;
        $scope.isSortUpName = false;
        $scope.isSortUpAge = false;
        $scope.isSortUpGender = false;
        $scope.isSortUpAddress = false;
        // $scope.isSortUpPhoneNum = false;
    };


    $scope.showFilterName = false;
    // $scope.toggleFilterName = function(){
    //     $scope.showFilterName = !$scope.showFilterName;
    // };

    $scope.showFilterAge = false;
    // $scope.toggleFilterAge = function(){
    //     $scope.showFilterAge = !$scope.showFilterAge;
    // };

    $scope.showFilterGender = false;
    // $scope.toggleFilterGender = function(){
    //     $scope.showFilterGender = !$scope.showFilterGender;
    // };

    $scope.showFilterAddress = false;
    // $scope.toggleFilterAddress = function(){
    //     $scope.showFilterAddress = !$scope.showFilterAddress;
    // };

    $scope.showFilterPhoneNum = false;
    // $scope.toggleFilterPhoneNum = function(){
    //     $scope.showFilterPhoneNum = !$scope.showFilterPhoneNum;
    // };

    $scope.toggleFilter = function (args) {
        switch (args) {
            case 'name':
                $scope.showFilterName = !$scope.showFilterName;
                break;
            case 'age':
                $scope.showFilterAge = !$scope.showFilterAge;
                break;
            case 'gender':
                $scope.showFilterGender = !$scope.showFilterGender;
                break;
            case 'address':
                $scope.showFilterAddress = !$scope.showFilterAddress;
                break;
            case 'phoneNum':
                $scope.showFilterPhoneNum = !$scope.showFilterPhoneNum;
                break;
        }

    }

    // calculate data and draw chart
    $scope.calculateData = function () {

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
        $scope.name = $scope.nameModal;
        $scope.age = $scope.ageModal;
        $scope.gender = $scope.genderModal;
        $scope.address = $scope.addressModal;
        $scope.phoneNum = $scope.phoneNumModal;
        if ($scope.checkAllModal) {
            $scope.name = true;
            $scope.age = true;
            $scope.gender = true;
            $scope.address = true;
            $scope.phoneNum = true;
        }
    };

    $scope.initCollumn = function () {
        $scope.nameModal = $scope.name;
        $scope.ageModal = $scope.age;
        $scope.genderModal = $scope.gender;
        $scope.addressModal = $scope.address;
        $scope.phoneNumModal = $scope.phoneNum;
        if ($scope.nameModal === true && $scope.ageModal === true && $scope.genderModal === true && $scope.addressModal === true && $scope.phoneNumModal === true) {
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
        $scope.toggleFilter('name');
    }

    $scope.changeStudentsDataAge = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilter('age');
    }

    $scope.changeStudentsDataGender = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilter('gender');
    }

    $scope.changeStudentsDataAddress = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilter('address');
    }

    $scope.changeStudentsDataPhone = function (data) {
        $scope.studentsData = data;
        $scope.toggleFilter('phoneNum');
    };


    //get filter result when click on filter
    $scope.getAllStudentByName = function (name) {
        let filter = [];
        for (let i = 0; i < $scope.students.length; i++) {
            if (name === $scope.students[i].name) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        // console.log($scope.studentsData);
        $scope.toggleFilter('name');
    }

    $scope.getAllStudentByAge = function (age) {
        let filter = [];
        for (let i = 0; i < $scope.students.length; i++) {
            if (age === $scope.students[i].age) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        // console.log($scope.studentsData);
        $scope.toggleFilter('age');
    }

    $scope.getAllStudentByGender = function (gender) {
        let filter = [];
        for (let i = 0; i < $scope.students.length; i++) {
            if (gender === $scope.students[i].gender) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        // console.log($scope.studentsData);
        $scope.toggleFilter('gender');
    }

    $scope.getAllStudentByAddress = function (address) {
        let filter = [];
        for (let i = 0; i < $scope.students.length; i++) {
            if (address === $scope.students[i].address) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        // console.log($scope.studentsData);
        $scope.toggleFilter('address');
    }

    $scope.getAllStudentByPhoneNum = function (phone) {
        let filter = [];
        for (let i = 0; i < $scope.students.length; i++) {
            if (phone === $scope.students[i].phoneNum) {
                filter.push($scope.students[i])
            }
        }
        $scope.studentsData = filter;
        // console.log($scope.studentsData);
        $scope.toggleFilter('phoneNum');
    }

    //modal checkbox react
    $scope.checkAll = function () {
        if ($scope.checkAllModal) {
            $scope.nameModal = true;
            $scope.ageModal = true;
            $scope.genderModal = true;
            $scope.addressModal = true;
            $scope.phoneNumModal = true;
        } else {
            $scope.nameModal = false;
            $scope.ageModal = false;
            $scope.genderModal = false;
            $scope.addressModal = false;
            $scope.phoneNumModal = false;
        }
    }

    $scope.checkBoxStatus = function () {
        if ($scope.nameModal === true && $scope.ageModal === true && $scope.genderModal === true && $scope.addressModal === true && $scope.phoneNumModal === true) {
            $scope.checkAllModal = true;
        }
        if ($scope.nameModal === false || $scope.ageModal === false || $scope.genderModal === false || $scope.addressModal === false || $scope.phoneNumModal === false) {
            $scope.checkAllModal = false;
        }
    }


}]);

