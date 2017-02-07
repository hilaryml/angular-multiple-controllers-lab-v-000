function StaffController() {
  this.name = "Robert"
  this.email = 'email@email.com'
  this.phone = '123-456-7890'
}

angular
	.module('app')
	.controller('StaffController', StaffController);
