const Taxi = function(manufacturer, model, driver){
  this.manufacturer = manufacturer;
  this.model = model;
  this.driver = driver;
  this.passengers = [];
}

Taxi.prototype.count_passenger = function(){
  return this.passengers.length;
}

Taxi.prototype.add_passenger = function(passenger){
  this.passengers.push(passenger);
}

Taxi.prototype.remove_last_passenger = function(){
  this.passengers.pop();
}

Taxi.prototype.remove_passenger = function(name){
  const index = this.passengers.indexOf(name);
  this.passengers.splice(index,1);
}



Taxi.prototype.remove_all_passenger = function(){
  // this.passengers = []
  while(this.passengers.length > 0) {
    this.passengers.pop();
}
}




module.exports = Taxi;
