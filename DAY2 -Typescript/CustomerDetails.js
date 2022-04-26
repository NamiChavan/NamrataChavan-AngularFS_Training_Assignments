var Customer = /** @class */ (function () {
    function Customer(CusId, CustomerName, City) {
        if (CusId === void 0) { CusId = 0; }
        if (CustomerName === void 0) { CustomerName = ""; }
        if (City === void 0) { City = ""; }
        this.CusId = 0;
        this.CustomerName = "";
        this.City = "";
        this.CusId = CusId;
        this.CustomerName = CustomerName;
        this.City = City;
    }
    Customer.prototype.showDetails = function () {
        console.log("Id: ".concat(this.CusId, ", Name: ").concat(this.CustomerName, ", City: ").concat(this.City, " "));
        console.log("----------------------------");
    };
    return Customer;
}());
var c = new Customer();
var c1 = new Customer(46545);
var c2 = new Customer(46545, "Scott");
var c3 = new Customer(46545, "Scott", "HYD");
c1.showDetails();
c2.showDetails();
c3.showDetails();
