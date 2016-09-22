/**
 * Created by Bonnie on 21/09/16.
 */
angular.module('myApp', []).controller('myCtrl', function ($scope) {
    $scope.items = [
        {id : '1', name : 'Honey', unitprice : 8.00},
        {id : '2', name : 'Bread', unitprice : 2.00},
        {id : '3', name : 'Cheese', unitprice : 3.00},
        {id : '4', name : 'Milk', unitprice : 3.00},
        {id : '5', name : 'Potato', unitprice : 1.00},
        {id : '6', name : 'Tomato', unitprice : 2.00}
    ];
    $scope.ifHide = true;
    $scope.products = {};

    $scope.buyAction = function (name, price, id) {
        $scope.ifHide = false;
        var arr = [];

        if ($scope.products[id]) {
            arr.count = $scope.products[id].count + 1;
        } else {
            arr.count = 1;
        }
        arr.id = id;
        arr.name = name;
        arr.unitprice = price;
        $scope.products[id] = arr;
        GetTotal();
    }

    //$scope.total = 19;
    var GetTotal = function () {
        $scope.total = 0;
        for(var i in $scope.products){
            if($scope.products[i]){
                var item = $scope.products[i];
                $scope.total += item.unitprice * item.count;
            }
        }
    }

    $scope.updateCount = function (id, count) {

        if($scope.products[id]){
            if($scope.products[id].count < 1 && count == -1){
                $scope.products[id].count = 0;
            }else {
                $scope.products[id].count += count;
            }
        }

        GetTotal();
    }

    $scope.deleteItem = function (id) {
        if($scope.products[id]){
            //$scope.products.splice(id, 1);
            delete $scope.products[id];
        }
        GetTotal();

    }

});