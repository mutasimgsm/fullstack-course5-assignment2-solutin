(function () {
  'ues strict';

angular.module('CheckOff', [])
.controller('ToBuyCotroller', ToBuyCotroller)
.controller('BoughtController', BoughtController)
.service('ShoppingListService', ShoppingListService);

function ShoppingListService() {
  var service = this;

  service.items = [
    {name: "Cookies", quentity: 5},
    {name: "Hamburger", quentity: 10 },
    {name: "Peanut", quentity: 10},
    {name: "Beef Masala", quentity: 7},
    {name: "Besmil", quentity: 6}
  ];

   service.bought = [];

  service.boughtItem = function (itemIndex) {
    var item = service.items[itemIndex];
    service.items.splice(itemIndex, 1);
    service.bought.push(item);
  };
}

ToBuyCotroller.$inject = ['ShoppingListService'];
function ToBuyCotroller(ShoppingListService) {
  var ToBuy = this;
  ToBuy.items = ShoppingListService.items;
  ToBuy.getFun = ShoppingListService.boughtItem;


}

BoughtController.$inject = ['ShoppingListService'];
function BoughtController(ShoppingListService) {
  var here = this;

  here.data = ShoppingListService.bought;
}

})();
