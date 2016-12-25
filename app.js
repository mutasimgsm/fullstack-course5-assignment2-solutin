(function () {
'ues strict';

var items = [
  {
    name: "Chips",
    quentity: 5
  },
  {
    name: "Peanut",
    quentity: 10
  },
  {
    name: "Hamburger",
    quentity: 6
  },
  {
    name: "Chicken",
    quentity: 3
  },
  {
    name: "Beef Masala",
    quentity: 8
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  ShoppingListCheckOffService.items = items;
  //console.log(items);
  var adder = this;
  adder.items = items;
  //console.log(items);

  adder.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);

  }
};

AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;
  showList.itemName = "";
  showList.itemQuentity = "";

  showList.boughtList =
  ShoppingListCheckOffService.getItems();
};


function ShoppingListCheckOffService() {
  var service = this;

  // List of bought items
  var boughtList = [];

  // service.addItem = function (itemName, quentity) {
  //   var item = {
  //     name: itemName,
  //     quentity: quentity
  //   };
  //   // boughtList.push(item);
  //   // console.log(boughtList);
  // };




  service.removeItem = function (itemIndex) {
    //items.splice(itemIndex, 1);
    var getList = boughtList.push(items.splice(itemIndex, 1));
  };

  service.getItems = function () {
    return boughtList;
  };
console.log(boughtList);

}

})();
