var Shop = function(){
	this.menu = [];
	this.line = [];
	this.orderQueue = [];
	this.counter = [];
	this.register = 0;
}

var Customer = function (name, order){
	this.name = name;
	this.order = order;
}

Customer.prototype.orderSandwich = function(sandwich, order) {
	// body...
};

Customer.prototype.getSandwich = function() {
	// body...
};

var Server = function(name){
	this.name = name;
}


Server.prototype.getOrder = function(shop) {
	// body...
};

Server.prototype.queueOrder = function(first_argument) {
	// body...
};


Server.prototype.deliverOrder = function(first_argument) {
	// body...
};


var Artist = function(name){
	this.name = name;
}

var Order = function(customer){
	this.sandwiches = [];
	this.customer = customer;
}

var Sandwich = function(){

}