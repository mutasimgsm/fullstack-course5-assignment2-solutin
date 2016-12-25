(function () {
'ues strict';



angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService() {
  var service = this;

  service.toBuy = [
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

  service.bought = [];

  service.boughtItem = function (itemIndex) {
    var item = service.toBuy[itemIndex];
    service.toBuy.splice(itemIndex, 1);
    service.bought.push(item);
  };

}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCon = this;
  buyCon.items = ShoppingListCheckOffService.toBuy;
  buyCon.boughtItem = ShoppingListCheckOffService.boughtItem;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bouCon = this;
  bouCon.items = ShoppingListCheckOffService.bought;
}

})();
