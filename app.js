(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkIfTooMuch = function () {
      if($scope.listData != undefined && $scope.listData.length > 0){
         
          var list = $scope.listData.split(',');
          var filteredArray = [];
            angular.forEach(list, function(item) {
              if (item) filteredArray.push(item);
            });
          if(filteredArray.length <= 3){
            $scope.message = 'Enjoy!';
          }else{
            $scope.message = 'Too much!';
          }
      }else{
         $scope.message = 'Please enter data first';
      }
  }; 
}

})();
