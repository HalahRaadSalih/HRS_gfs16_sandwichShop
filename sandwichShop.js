var Shop = function(name){
	this.name = name;
	this.menu = [];
	this.line = [];
	this.orderQueue = [];
	this.counter = [];
	this.register = 0;
}

var Customer = function (name){
	this.name = name;
	this.order = new Order(this);
	this.lunch = [];
}

Customer.prototype.orderSandwich = function(sandwich, order) {
	//look in the menu
	//choose a sandwich 
	// add it to the order
};

Customer.prototype.getSandwich = function(shop) {
	// customer picks sanwich up from counter
	for(var i ; i < this.counter.length; i++){
		this.lunch.push(this.counter[i]);
	}
};

var Server = function(name, shop){
	this.name = name;
	this.shop = shop;
}


// Server.prototype.getOrder = function(customer) {
// 	// look at customer order
// 	//queues all sandwiches in the order
// 	this.queueOrder(this.shop, customer.order);
// };

Server.prototype.queueOrder = function(customer) {
	// puts the sandwich from the order into the shop queue
	var order = customer.order;

	for(var i = 0; i < order.sandwiches.length; i++){
		this.shop.sandwichQueue.push(order.sandwiches[i]);
		console.log("I need a +" + order.sandwiches[i].name);
	}
};


Server.prototype.deliverOrder = function(shop, customer) {
	// call the customer get sandwich method
	customer.getSandwich(this.shop);
};


var Artist = function(name){
	this.name = name;
	this.shop = shop;
}

Artist.prototype.makeSandwich = function(shop) {
	//create new sandwich

	//put it on the counter
	var sandwich = new Sandwich(sandwich.name);
	this.shop.counter.push(sandwich);
};

Artist.prototype.processQueue = function() {
	//
	for (var i = 0; i < shop.sandwichQueue.length; i++){
		this.makeSandwich(shop.sandwichQueue[i]);
	}
};

var Order = function(customer){
	this.sandwiches = [];
	this.customer = customer;
	this.date = Date.now();
}

var Sandwich = function(name){
	tthis.name = name;
}


// created shop with employees
var hipwich = new Shop('hipwich');
var jessica = new Server('Jessica')
var kelly = new Artist('Kelly');

// open for business, create some customers and put them in line
var liz = new Customer('Liz');
liz.order.sandwiches.push(new Sandwich('The Cosmopolitan'));

//get in line
hipwich.line.push(liz);
// server takes her order
jessica.queueOrder(hipwich.line.shift());
//kelly make the sanswih
kelly.processQueue();
//jessica gives liz the sandwich
jessica.deliverOrder();

