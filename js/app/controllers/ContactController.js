function ContactController() {
  var vm = this;
  
  vm.name = 'Bill'
  vm.email = 'email@email.com'
  vm.phone = '123-456-7890'

  this.changeName = function () {
    vm.name = 'Ben'
  }
}

angular
	.module('app')
	.controller('ContactController', ContactController);
