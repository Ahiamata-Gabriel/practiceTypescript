var Ride = /** @class */ (function () {
    function Ride() {
        this.activeRides = 0;
    }
    Ride.prototype.start = function () {
        this.activeRides++;
    };
    Ride.prototype.stop = function () {
        this.activeRides--;
    };
    return Ride;
}());
var ride1 = new Ride();
ride1.start();
var ride2 = new Ride();
ride2.start();
console.log(ride1.activeRides);
console.log(ride2.activeRides);
