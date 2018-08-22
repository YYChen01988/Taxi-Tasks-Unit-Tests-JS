const assert = require("assert");
const Taxi = require('../taxi.js');


// describe is a function from mocha. It takes two params(classOrObjectYouWantToTest, Funstion)
describe('Taxi', function(){

  //Mocha function as setup, so we can put in examples for test
  beforeEach(function(){
    taxi = new Taxi('Toyota', 'Prius', 'Tony');
  });


  it("Should have a manufacturer", function(){
    //arrange
    //act
    const actual1111 = taxi.manufacturer;
    //assert
    assert.strictEqual(actual1111, 'Toyota');
  });


  it("Should have a modle", function(){
    //arrange
    //act
    const actual2222 = taxi.model;
    //assert
    assert.strictEqual(actual2222, 'Prius');
  });


  it ("Should have a driver", function(){
    const actual2222 = taxi.driver;
    assert.strictEqual(actual2222, 'Tony');
  });


  // ### Task:
  // Employing TDD, add the following methods to your taxi:
  // - `numberOfPassengers`
  // - `addPassenger`
  // - `removePassengerByName`
  // - `removeAllPassengers`
  // A passenger should be represented as a `String` containing the passenger's name.

  describe('Passengers', function(){
    it('should start with no passengers', function(){
      const actual = taxi.passengers;
      assert.deepStrictEqual(actual, []);
    });

    it('should be zero passengers', function(){
      const actual = taxi.count_passenger();
      assert.strictEqual(actual, 0);
    });


    it('should add passenger', function(){
      let passenger = "Fiona";
      taxi.add_passenger()
      const actual = taxi.count_passenger()
      assert.deepStrictEqual(actual, 1);
    })


    it('should remove last passenger', function(){
      const passengers_list = taxi.remove_last_passenger();
      const actual = taxi.count_passenger()
      assert.deepStrictEqual(actual, 0);
    })

    it('should remove the passenger', function(){
      taxi.add_passenger("Bob");
      taxi.add_passenger("Paul");
      taxi.remove_passenger("Bob");
      const actual = taxi.count_passenger()
      assert.deepStrictEqual(actual, 1 );
    })




    it('should remove all passenger', function(){
      taxi.add_passenger("Bob");
      taxi.add_passenger("Paul");
      taxi.remove_all_passenger();
      const actual = taxi.count_passenger()
      assert.strictEqual(actual, 0);
    })





  })



})
