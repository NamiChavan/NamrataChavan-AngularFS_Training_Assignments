var Product = /** @class */ (function () {
    function Product(ProId) {
        this.ProId = 0;
        this.ProductName = "";
        this.UnitPrize = "";
        this.Qty = 0;
        this.ProId = ProId;
    }
    Object.defineProperty(Product.prototype, "ProductId", {
        get: function () {
            return this.ProId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductNames", {
        get: function () {
            return this.ProductName;
        },
        set: function (value) {
            this.ProductName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProPrize", {
        get: function () {
            return this.UnitPrize;
        },
        set: function (value) {
            this.UnitPrize = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Quantity", {
        get: function () {
            return this.Qty;
        },
        set: function (value) {
            this.Qty = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var ProObj = new Product(45645);
ProObj.ProductNames = "Milkproducts"; //set
ProObj.ProPrize = "INR 1000";
ProObj.Quantity = 2;
console.log("Product Id: " + ProObj.ProductId); //get
console.log("Product Name: " + ProObj.ProductNames); // get
console.log("Unit Prize: " + ProObj.ProPrize); // get
console.log("Quanity: " + ProObj.Quantity); //get
