class Product
{
    private ProId:number = 0;
    private ProductName:string  = "";
    private UnitPrize:string  = "";
    private Qty:number  = 0; 


    constructor(ProId:number)
    {
        this.ProId = ProId;
    }

    public get ProductId():number
    {
        return this.ProId;
    }
 
    public get ProductNames():string
    {
        return this.ProductName;
    }

    public set ProductNames(value:string)
    {
        this.ProductName = value;
    }
    public get ProPrize():string
    {
        return this.UnitPrize;
    }

    public set ProPrize(value:string)
    {
        this.UnitPrize = value;
    }
    public get Quantity():number
    {
        return this.Qty;
    }

    public set Quantity(value:number)
    {
        this.Qty = value;
    }
}


let ProObj:Product = new Product(45645);

ProObj.ProductNames = "Milkproducts";  //set
ProObj.ProPrize="INR 1000";
ProObj.Quantity=2;

console.log("Product Id: " + ProObj.ProductId);//get
console.log("Product Name: " + ProObj.ProductNames);  // get
console.log("Unit Prize: " + ProObj.ProPrize);  // get
console.log("Quanity: " + ProObj.Quantity);//get