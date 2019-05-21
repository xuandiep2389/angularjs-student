var app = angular.module("crud", []);

app.controller('CRUDCtrl', ['$scope','CRUDService', function ($scope,CRUDService) {

    $scope.updateStudent = function () {
        CRUDService.updateStudent($scope.student.id,$scope.student.name,$scope.student.age, $scope.student.gender, $scope.student.address, $scope.student.phoneNum)
            .then(function success(response){
                    $scope.message = 'Student data updated!';
                    $scope.errorMessage = '';
                },
                function error(response){
                    $scope.errorMessage = 'Error updating student!';
                    $scope.message = '';
                });
    }

    $scope.getStudent = function () {
        var id = $scope.student.id;
        CRUDService.getStudent($scope.student.id)
            .then(function success(response){
                    $scope.student = response.data;
                    $scope.student.id = id;
                    $scope.message='';
                    $scope.errorMessage = '';
                },
                function error (response ){
                    $scope.message = '';
                    if (response.status === 404){
                        $scope.errorMessage = 'Student not found!';
                    }
                    else {
                        $scope.errorMessage = "Error getting student!";
                    }
                });
    }

    $scope.addStudent = function () {
        if ($scope.student != null && $scope.student.name) {
            CRUDService.addStudent($scope.student.name, $scope.student.age, $scope.student.gender, $scope.student.address,$scope.student.phoneNum)
                .then (function success(response){
                        $scope.message = 'Student added!';
                        $scope.errorMessage = '';
                    },
                    function error(response){
                        $scope.errorMessage = 'Error adding student!';
                        $scope.message = '';
                    });
        }
        else {
            $scope.errorMessage = 'Please enter a name!';
            $scope.message = '';
        }
    }

    $scope.deleteStudent = function () {
        CRUDService.deleteStudent($scope.student.id)
            .then (function success(response){
                    $scope.message = 'Student deleted!';
                    $scope.student = null;
                    $scope.errorMessage='';
                },
                function error(response){
                    $scope.errorMessage = 'Error deleting student!';
                    $scope.message='';
                })
    }

    $scope.getAllStudents = function () {
        CRUDService.getAllStudents()
            .then(function success(response){
                    $scope.students = response.data;
                    $scope.message='';
                    $scope.errorMessage = '';
                },
                function error (response ){
                    $scope.message='';
                    $scope.errorMessage = 'Error getting students!';
                });
    }

}]);

app.service('CRUDService',['$http', function ($http) {

    this.getStudent = function getStudent(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/students/'+id
        });
    }

    this.addStudent = function addStudent(name, age, gender, address, phoneNum){
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/students',
            data: {name:name, age:age, gender: gender, address: address, phoneNum: phoneNum}
        });
    }

    this.deleteStudent = function deleteStudent(id){
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/students/'+id
        })
    }

    this.updateStudent = function updateStudent(id,name,age,gender,address,phoneNum){
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/students/'+id,
            data: {name:name, age:age, gender: gender, address: address, phoneNum: phoneNum}
        })
    }

    this.getAllStudents = function getAllStudents(){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/students'
        });
    }

}]);

