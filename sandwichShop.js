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
	//look in the menu
	//choose a sandwich 
	// add it to the order
};

Customer.prototype.getSandwich = function() {
	// customer picks sanwich up from counter
};

var Server = function(name){
	this.name = name;
}


Server.prototype.getOrder = function(shop) {
	// look at customer order
	//queues all sandwiches in the order
};

Server.prototype.queueOrder = function(first_argument) {
	// puts the sandwich from the order into the shop queue
};


Server.prototype.deliverOrder = function(first_argument) {
	// call the customer get sandwich method
};


var Artist = function(name){
	this.name = name;
}

Artist.prototype.makeSandwich = function(shop) {
	// body...
	//create new sandwich
	//put it on the counter
};

var Order = function(customer){
	this.sandwiches = [];
	this.customer = customer;
	this.date = Date.now();
}

var Sandwich = function(name){
	tthis.name = name;
}